import request from 'supertest';
import { server, app } from '../src/index';

describe('GET /api/cities/by_country/:country', () => {
    
    afterAll((done) => {        // Cerrar el servicio una vez se realizó el test
        server.close(done);
    });
    
    // C.U: Buscar país con numeritos
    test('debe devolver 400 si el parámetro country contiene caracteres numéricos', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Chile123');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: 'Solo se aceptan caracteres no numéricos'
        });
    });
});
