import { HeaderMB } from './HeaderMB'
import { FooterMB } from './FooterMB'
import { MenuMB } from './MenuMB'
import { useState } from 'react'
function DefaultLayoutMB ({ children }) {
  const [activemenu, setactivemenu] = useState(false)
  return (
    <div className='baselayout_container'>
      <HeaderMB />

      <MenuMB activemenu={activemenu} setactivemenu={setactivemenu} />

      <FooterMB activemenu={activemenu} setactivemenu={setactivemenu} />
      {children}
    </div>
  )
}

export default DefaultLayoutMB
