import { createGlobalStyle } from 'styled-components'
import { colors } from './constants/colors'

const GlobalStyle = createGlobalStyle`
  :root {
    --gray-50: ${colors.gray50};
    --gray-100: ${colors.gray100};
    --gray-300: ${colors.gray300};
    --gray-900: ${colors.gray900};

    --dark-blue-900: ${colors.darkBlue900};

    --cyan-500: ${colors.cyan500};

    --purple-900: ${colors.purple900};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: .3s;
  }

  html {
    @media (min-width: 721px) and (max-width: 1080px) {
      font-size:  93.75%; // equal to 15px by default
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // equal to 14px by default
    }
  }

  body {
    background-color: var(#F5F5F5);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #292929;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`


export { GlobalStyle }