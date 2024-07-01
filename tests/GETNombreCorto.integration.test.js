import request from 'supertest';
import { server, app } from '../src/index';

describe('GET /api/cities/by_country/:country', () => {
    afterAll((done) => {
        server.close(done);
    });

    // C.U: Buscar un país con menos de 3 caracteres 
    test('debe devolver 400 si el parámetro country tiene menos de 3 caracteres', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Ch');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: 'El país/ciudad ingresado debe tener al menos 3 caracteres'
        });
    });
});