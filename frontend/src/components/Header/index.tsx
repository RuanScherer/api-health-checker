import { IoSettingsOutline, IoSwapVerticalOutline } from "react-icons/io5";

import { FilledButton, IconButton } from "../../styles/shared/buttons";
import { AddHealthCheckButton } from "../AddHealthCheckButton";
import { ResponsiveIcon } from "../ResponsiveIcon";
import { Content, Header as StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Content>
        <h1>Health Checker</h1>

        <div>
          <FilledButton>
            Workspace
            <ResponsiveIcon icon={IoSwapVerticalOutline} />
          </FilledButton>

          <AddHealthCheckButton />

          <IconButton>
            <ResponsiveIcon icon={IoSettingsOutline} />
          </IconButton>
        </div>
      </Content>
    </StyledHeader>
  );
}

export { Header };
