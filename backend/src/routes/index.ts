import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  return response.json({ message: "Funcionou" });
});

export { router };
