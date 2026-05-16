const request = require("supertest");
const app = require("../server");

describe("Secure To-Do App", () => {
  test("GET / debe responder mensaje principal", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Secure To-Do App funcionando");
  });

  test("GET /health debe responder estado healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });

  test("POST /tasks debe crear una tarea válida", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Prueba S-SDLC" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Prueba S-SDLC");
  });

  test("POST /tasks debe rechazar una tarea vacía", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "" });

    expect(res.statusCode).toBe(400);
  });
});
