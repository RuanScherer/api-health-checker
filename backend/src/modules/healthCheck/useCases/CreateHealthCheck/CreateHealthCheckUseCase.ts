import { ValidateRequiredFields } from "../../../../shared/utils/ValidateRequiredFields";
import AppError from "../../../../shared/errors/AppError";
import { EnumTypeHealthChecker, IHealthCheckersRepository } from "../../repositories/interfaces/IHealthCheckersRepository";

interface IRequest {
  type: string;
  active: boolean;
  name: string;
  intervalInMinutes: number;
  databaseConnectionString: string;
  databaseCommand: string;
}

class CreateHealthCheckUseCase {
  constructor(private healthCheckersRepository: IHealthCheckersRepository) { }

  async execute({ type, active = true, name, databaseCommand, databaseConnectionString }: IRequest): Promise<void> {
    const requiredFields = [{ type }, { name }, { databaseCommand }, { databaseConnectionString }];
    ValidateRequiredFields(requiredFields);

    const enumTypeObjectValue = Object.values(EnumTypeHealthChecker);
    if (!enumTypeObjectValue.some(enumType => enumType === type.toUpperCase())) {
      throw new AppError(`Field type must be in [${enumTypeObjectValue}]`);
    }

    await this.healthCheckersRepository.create({
      type: type.toUpperCase() as EnumTypeHealthChecker,
      active,
      name,
      databaseCommand,
      databaseConnectionString
    });
  }
}

export { CreateHealthCheckUseCase }
