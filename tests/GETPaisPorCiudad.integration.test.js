import request from 'supertest';
import { server, app } from '../src/index';

describe('GET /api/cities/by_country/:country', () => {
    afterAll((done) => {
        server.close(done);
    });

    // C.U: Encontrar país por el nombre que se desea
    test('debe devolver 200 y un arreglo de ciudades si encuentra resultados', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Chile');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: expect.any(String) })
        ]));
    });
});
