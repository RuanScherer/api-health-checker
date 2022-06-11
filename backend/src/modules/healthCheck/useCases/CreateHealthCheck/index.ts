import { HealthCheckersRepository } from "../../repositories/implementations/HealthCheckersRepository";
import { CreateHealthCheckController } from "./CreateHealthCheckController";
import { CreateHealthCheckUseCase } from "./CreateHealthCheckUseCase";

const healthCheckersRepository = HealthCheckersRepository.getInstance();
const createHealthCheckUseCase = new CreateHealthCheckUseCase(healthCheckersRepository);
const createHealthCheckController = new CreateHealthCheckController(createHealthCheckUseCase);

export { createHealthCheckController };
