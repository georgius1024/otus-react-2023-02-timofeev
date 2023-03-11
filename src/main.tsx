import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import Calc from './Calc'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>
)
