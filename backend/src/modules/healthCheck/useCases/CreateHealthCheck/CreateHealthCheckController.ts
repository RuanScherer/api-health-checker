import { Request, response, Response } from "express";
import { CreateHealthCheckUseCase } from './CreateHealthCheckUseCase';

class CreateHealthCheckController {
  constructor(private createHealthCheckUseCase: CreateHealthCheckUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { type, active, name, intervalInMinutes, databaseCommand, databaseConnectionString } = request.body;

    await this.createHealthCheckUseCase.execute({ type, active, name, intervalInMinutes, databaseCommand, databaseConnectionString });

    return response.status(201).send();
  }
}

export { CreateHealthCheckController }


