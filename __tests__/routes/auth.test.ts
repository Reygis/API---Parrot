import app from "../../src/app"
import request from "supertest"
import { AppDataSource } from "../../src/data-source";

beforeAll(async() => {
    await AppDataSource.initialize()
  });
  
afterAll(() => {
    AppDataSource.close()
});

describe("Auth route tests", () => {
    test("User login", async () => {
        await request(app)
            .post("/login")
            .send( { 
                "email": "user1@user.com",
                "password": "admin"
            })
            .expect(200)
    })
})