import { useState } from "react";
import { IoAdd } from "react-icons/io5";

import { IconButton } from "../../styles/shared/buttons";
import { HealthCheckSelectiton } from "../HealthCheckSelection";
import { ResponsiveIcon } from "../ResponsiveIcon";

function AddHealthCheckButton() {
  const [isSelectionVisible, setIsSelectionVisible] = useState(false);
  function handleToggleSelectionVisible() {
    setIsSelectionVisible(!isSelectionVisible);
  }
  return (
    <>
      <IconButton onClick={() => handleToggleSelectionVisible()}>
        <ResponsiveIcon icon={IoAdd} />
      </IconButton>
      <HealthCheckSelectiton
        isVisible={isSelectionVisible}
        handleToggleVisible={() => handleToggleSelectionVisible()}
      />
    </>
  );
}

export { AddHealthCheckButton };
