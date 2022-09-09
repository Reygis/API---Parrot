import app from "../../src/app"
import request from "supertest"

describe("POST /register", () => {

    test("returns status code 201 if first name is passed", async () => {
        const res = await request(app)
            .post("/register")
            .send({firstname: "John"})
        expect(res.statusCode).toEqual(201)
    })

    test("returns status code 400 if first name is not passed", async () => {
        const res = await request(app)
            .post("/register")
        expect(res.statusCode).toEqual(400)
    })
})