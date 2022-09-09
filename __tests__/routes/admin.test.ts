import app from "../../src/app"
import request from "supertest"
import { AppDataSource } from "../../src/data-source";

var token = ''
var badtoken = ''

beforeAll(async () => {
    await AppDataSource.initialize()
    const response = await request(app).post('/login')
    .send({
        "email": "admin@admin.com",
        "password": "admin"
    })
    const response2 = await request(app).post('/login')
    .send({
        "email": "user1@admin.com",
        "password": "admin"
    })
    token = response.body.token;
    badtoken = response2.body.token;
});

afterAll(() => {
  AppDataSource.close()
});

describe("Admin route tests", () => {
    test("Admin login", async () => {
        await request(app)
            .post("/admin/login")
            .send( { 
                "email": "admin@admin.com",
                "password": "admin"
            })
            .expect(200)
    })

    test("fail Admin login, password incorrect", async () => {
        await request(app)
            .post("/admin/login")
            .send( { 
                "email": "admin@admin.com",
                "password": "incorrect"
            })
            .expect(401)
    })

    test("Get all users", async () => {
        await request(app)
            .get("/admin/users")
            .set('Authorization', 'bearer ' + token)
            .expect(200)
            .expect('Content-Type', /json/)
    })

    test("fail to get all users, not admin", async () => {
        await request(app)
            .get("/admin/users")
            .set('Authorization', 'bearer ' + badtoken)
            .expect(401)
    })

    test("Get user by id", async () => {
        await request(app)
            .get("/admin/2")
            .set('Authorization', 'bearer ' + token)
            .expect(200)
            .expect('Content-Type', /json/)
    })

    test("fail to get user by id, not admin", async () => {
        await request(app)
            .get("/admin/2")
            .set('Authorization', 'bearer ' + badtoken)
            .expect(401)
    })
    test("Fail to Get user by id, not exist", async () => {
        await request(app)
            .post("/admin/9999999999")
            .set('Authorization', 'bearer ' + token)
            .expect(404)
    })
})