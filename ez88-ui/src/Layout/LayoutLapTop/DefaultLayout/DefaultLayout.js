import { Header } from './Header'
import { Footer } from './Footer'
import { useState } from 'react'
import './DefaultLayout.scss'
function DefaultLayout ({ children }) {
const [isSang, setisSang] = useState(() => {
  return localStorage.getItem('theme') === 'dark' ? false : true
})
  
  return (
    <div className='baselayout_container'>
      <Header isSang={isSang} setisSang={setisSang}/>
      {children}
      <Footer isSang={isSang}/>
    </div>
  )
}

export default DefaultLayout
