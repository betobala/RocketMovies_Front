import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import AppProvider  from "./hooks/index"

import { Routes } from './routes'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppProvider>
          <Routes/>
        </AppProvider>
    </ThemeProvider>
    
  
)
