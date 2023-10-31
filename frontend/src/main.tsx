import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Tracker } from './components/Tracker'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex flex-col items-center h-max h-screen pb-64 pt-10 w-full min-w-min'>
      <div className="flex text-center text-gray-500 text-4xl pb-12 px-12">Time Tracker</div>
      <Tracker />
    </div>
  </React.StrictMode>
)
