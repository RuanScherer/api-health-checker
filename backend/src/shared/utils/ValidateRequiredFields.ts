import AppError from "../errors/AppError";

function ValidateRequiredFields(requiredFields: Object[]): void {
  const filteredRequiredFields = requiredFields.filter(requiredField => !Object.values(requiredField)[0]);
  const mappedRequiredFields = filteredRequiredFields.map(requiredField => Object.keys(requiredField));

  if (filteredRequiredFields.length > 0) {
    throw new AppError(`The fields [${mappedRequiredFields.toString().replace(/,/gi, ', ')}] are required`);
  }
}

export { ValidateRequiredFields };
