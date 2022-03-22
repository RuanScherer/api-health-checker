import { colors } from "../../styles/constants/colors";
import { FilledButton } from "../../styles/shared/buttons";
import {
  Card,
  HealthCheckTypeInfo,
  HealthCheckTypeDescription,
} from "./styles";

interface IHealthCheckTypeCardProps {
  healthCheckType: {
    name: string;
    logo: string;
    type: {
      name: string;
      color: string;
    };
  };
}

function HealthCheckTypeCard({ healthCheckType }: IHealthCheckTypeCardProps) {
  return (
    <Card>
      <HealthCheckTypeInfo>
        <img src={healthCheckType.logo} alt="#" />

        <HealthCheckTypeDescription>
          <h2>{healthCheckType.name}</h2>
          <span>{healthCheckType.type.name}</span>
        </HealthCheckTypeDescription>
      </HealthCheckTypeInfo>

      <FilledButton
        type="button"
        className="select-button"
        backgroundColor={colors.purple900}
        color={colors.white50}
        centralize
      >
        Select
      </FilledButton>
    </Card>
  );
}

export { HealthCheckTypeCard };
