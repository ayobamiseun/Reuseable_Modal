import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    default:
      "var(--bg-02, radial-gradient(77.79% 77.76% at 50% 0%, rgba(255, 255, 255, 0.12) 0%, rgba(252, 252, 252, 0.00) 100%), radial-gradient(59.47% 59.45% at 50% 100%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(to bottom right, rgba(91, 91, 91, 0.09) 0%, rgba(255, 255, 255, 0.00) 50%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, rgba(91, 91, 91, 0.09) 0%, rgba(255, 255, 255, 0.00) 50%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, rgba(91, 91, 91, 0.09) 0%, rgba(255, 255, 255, 0.00) 50%) top left / 50% 50% no-repeat, linear-gradient(to top right, rgba(91, 91, 91, 0.09) 0%, rgba(255, 255, 255, 0.00) 50%) top right / 50% 50% no-repeat, #001314)",
    primaryText: "white",
    overlay: "black",
    defaultText: "white",

  },

};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
