import { useState } from "react";

import { healthCheckTypes } from "../../shared/constants/healthCheckTypes";
import { HealthCheckTypeCard } from "../HealthCheckTypeCard";
import { HealthCheckSelectionContainer } from "./styles";

interface IHealthCheckSelectionProps {
  isVisible: boolean;
  handleToggleVisible: () => void;
}

function HealthCheckSelectiton({
  isVisible,
  handleToggleVisible,
}: IHealthCheckSelectionProps) {
  if (!isVisible) {
    return <></>;
  }

  return (
    <HealthCheckSelectionContainer onClick={() => handleToggleVisible()}>
      <h1>Choose an option</h1>
      <div>
        {healthCheckTypes.map((healthCheckType) => (
          <HealthCheckTypeCard
            healthCheckType={healthCheckType}
            onSelect={() => {}}
            key={healthCheckType.name}
          />
        ))}
      </div>
    </HealthCheckSelectionContainer>
  );
}

export { HealthCheckSelectiton };
