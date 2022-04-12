import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* mulish-300 - latin */
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/mulish-v10-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/mulish-v10-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/mulish-v10-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/mulish-v10-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../fonts/mulish-v10-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/mulish-v10-latin-300.svg#Mulish') format('svg'); /* Legacy iOS */
  }
  /* mulish-regular - latin */
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/mulish-v10-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/mulish-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/mulish-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/mulish-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/mulish-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/mulish-v10-latin-regular.svg#Mulish') format('svg'); /* Legacy iOS */
  }
  /* mulish-500 - latin */
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/mulish-v10-latin-500.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/mulish-v10-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/mulish-v10-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/mulish-v10-latin-500.woff') format('woff'), /* Modern Browsers */
        url('../fonts/mulish-v10-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/mulish-v10-latin-500.svg#Mulish') format('svg'); /* Legacy iOS */
  }
  /* mulish-600 - latin */
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/mulish-v10-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/mulish-v10-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/mulish-v10-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/mulish-v10-latin-600.woff') format('woff'), /* Modern Browsers */
        url('../fonts/mulish-v10-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/mulish-v10-latin-600.svg#Mulish') format('svg'); /* Legacy iOS */
  }
  /* mulish-700 - latin */
  @font-face {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/mulish-v10-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/mulish-v10-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/mulish-v10-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/mulish-v10-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../fonts/mulish-v10-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/mulish-v10-latin-700.svg#Mulish') format('svg'); /* Legacy iOS */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    border: 0;
  }

  a, button {
    cursor: pointer;
  }

  body {
    ${({ theme }) => css`
			font-family: ${theme.font.family};
		`}
  }
`

export default GlobalStyle
