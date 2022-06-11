import { Router } from "express";

import { createHealthCheckController } from "../modules/healthCheck/useCases/CreateHealthCheck";

const healthCheckersroutes = Router();

healthCheckersroutes.post('/', (request, response) => {
  return createHealthCheckController.handle(request, response);
})

export { healthCheckersroutes }
