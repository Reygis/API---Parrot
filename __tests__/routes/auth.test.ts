import request from 'supertest';
import app from "../../src/app";

beforeAll(() => jest.setTimeout(90 * 1000))


describe('loguin user', function() {
    it('responds with json', async ()=> {
      const response = await request(app).post('/login')
        .send({
            "email": "user1@user.com",
            "password": "admin"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

// it('Loguin user', async ()=>{
//     const res:any = await request(app).post("/login").send({
//         "email": "user1@user.com",
//         "password": "admin"
//     }).then( ()=>{
//         expect(res.status).toBe(200)
//     })
//     // expect(res.body)('Content-Type', /json/)
// })
