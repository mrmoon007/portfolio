import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div>
        <Sidebar />
        <div >
          <section className='home section'>
            Home
          </section>
        </div>
      </div>
    </>
  )
}

export default App
