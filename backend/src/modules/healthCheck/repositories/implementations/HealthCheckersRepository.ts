import { client } from "../../../../database/connection";

import { IHealthCheckersRepository, ICreateHealthCheckersRepositoryDTO } from "../interfaces/IHealthCheckersRepository";

class HealthCheckersRepository implements IHealthCheckersRepository {
  private static INSTANCE: HealthCheckersRepository;

  private constructor() {

  }

  public static getInstance(): HealthCheckersRepository {
    if (!HealthCheckersRepository.INSTANCE) {
      HealthCheckersRepository.INSTANCE = new HealthCheckersRepository();
    }
    return HealthCheckersRepository.INSTANCE;
  }

  async create({ type, active, name, databaseConnectionString, databaseCommand }: ICreateHealthCheckersRepositoryDTO): Promise<void> {
    await client.healthCheck.create({
      data: {
        type,
        active,
        name,
        databaseConnectionString,
        databaseCommand
      }
    });
  }

}

export { HealthCheckersRepository }
