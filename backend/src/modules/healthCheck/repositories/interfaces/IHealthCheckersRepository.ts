enum EnumTypeHealthChecker {
  "ENDPOINT" = "ENDPOINT",
  "DATABASE" = "DATABASE",
}
interface ICreateHealthCheckersRepositoryDTO {
  type: EnumTypeHealthChecker;
  name: string;
  active: boolean;
  databaseConnectionString?: string;
  databaseCommand?: string;
}

interface IHealthCheckersRepository {
  create({ type, active, name, databaseConnectionString, databaseCommand }: ICreateHealthCheckersRepositoryDTO): Promise<void>;
}

export { IHealthCheckersRepository, ICreateHealthCheckersRepositoryDTO, EnumTypeHealthChecker }
