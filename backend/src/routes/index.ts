import { Router } from "express";

import { healthCheckersroutes } from "./healthCheckers.routes";

const router = Router();

router.use("/healthcheck", healthCheckersroutes);

export { router };
