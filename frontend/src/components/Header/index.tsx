import { IoAdd, IoSettingsOutline, IoSwapVerticalOutline } from 'react-icons/io5'
import { FilledButton, IconButton } from '../../styles/shared/buttons'
import { ResponsiveIcon } from '../ResponsiveIcon'
import { Content, Header as StyledHeader } from './styles'

const Header = () => {
    return (
        <StyledHeader>
            <Content>
                <h1>Health Checker</h1>

                <div>
                    <FilledButton>
                        Workspace
                        <ResponsiveIcon icon={IoSwapVerticalOutline} />
                    </FilledButton>

                    <IconButton>
                        <ResponsiveIcon icon={IoAdd} />
                    </IconButton>

                    <IconButton>
                        <ResponsiveIcon icon={IoSettingsOutline} />
                    </IconButton>
                </div>
            </Content>
        </StyledHeader>
    )
}

export { Header }
