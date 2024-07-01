import request from 'supertest';
import { server, app } from '../src/index';

describe('GET /api/cities/by_country/:country', () => {
    afterAll((done) => {
        server.close(done);
    });

    // C.U: No se encuentra la ciudad buscada
    test('debe devolver 200 y un mensaje si no encuentra resultados', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/UnknownCountry');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: 'No se encontraron ciudades para el país ingresado'
        });
    });
});
