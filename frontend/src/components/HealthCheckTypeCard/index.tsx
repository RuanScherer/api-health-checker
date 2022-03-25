import { colors } from "../../styles/constants/colors";
import { FilledButton } from "../../styles/shared/buttons";
import {
  Card,
  HealthCheckTypeInfo,
  HealthCheckTypeDescription,
} from "./styles";

interface IHealthCheckTypeCardProps {
  onSelect: (healtCheckType: IHealthCheckType) => void;
  healthCheckType: IHealthCheckType;
}

interface IHealthCheckType {
  name: string;
  logo: string;
  category: {
    name: string;
    color: string;
  };
}

function HealthCheckTypeCard({
  onSelect,
  healthCheckType,
}: IHealthCheckTypeCardProps) {
  return (
    <Card>
      <HealthCheckTypeInfo>
        <img src={healthCheckType.logo} alt={healthCheckType.name} />

        <HealthCheckTypeDescription chipColor={healthCheckType.category.color}>
          <h2>{healthCheckType.name}</h2>
          <span>{healthCheckType.category.name}</span>
        </HealthCheckTypeDescription>
      </HealthCheckTypeInfo>

      <FilledButton
        type="button"
        className="select-button"
        backgroundColor={colors.purple900}
        color={colors.white50}
        centralize
        onClick={() => onSelect(healthCheckType)}
      >
        Select
      </FilledButton>
    </Card>
  );
}

export { HealthCheckTypeCard };
