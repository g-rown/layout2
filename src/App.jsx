import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">

      <div className="row1">
        <div className="r1-col1"></div>
        <div className="r1-col2">
          <div className="r1-col2-left"></div>
          <div className="r1-col2-right"></div>
        </div>
        <div className="r1-col3"></div>
      </div>

      <div className="row2">
          <div className="left">
            <div className="r2-lf-col1"></div>
          </div>

          <div className="right">
            <div className="r2-rg-row1"></div>
            <div className="r2-rg-row2"></div>
          </div>
      </div>

    <div className="row3">
      <div className="r3-col1"></div>
      <div className="r3-col2"></div>
      <div className="r3-col3"></div>
      <div className="r3-col4"></div>
    </div>
  </div>
    </>
  )
}

export default App
