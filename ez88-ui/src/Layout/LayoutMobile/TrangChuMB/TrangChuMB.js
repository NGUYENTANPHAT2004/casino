import './TrangChuMB.scss'
import { TheThaoMB } from './TheThaoMB'
import { CasinoMB } from './CasinoMB'
import { NoHuMB } from './NoHuMB'
import { BanCaMB } from './BanCaMB'
import { DaGaMB } from './DaGaMB'
import { CucTele } from '../../LayoutLapTop/CucTele'
import { useState } from 'react'

function TrangChuMB () {
  const [activetab, setactivetab] = useState('CASINO')
  const tabs = [
    { img: '/images/casinomenutc.webp', name: 'CASINO' },
    { img: '/images/thethaomenutc.webp', name: 'THỂ THAO' },
    { img: '/images/bancamenutc.webp', name: 'BẮN CÁ' },
    { img: '/images/nohumenutc.webp', name: 'NỔ HŨ' },
    { img: '/images/daga.webp', name: 'ĐÁ GÀ' }
  ]
  return (
    <main className='trangchummb_container'>
      <CucTele />
      <div className='trangchumb_main'>
        <div className='layouttrangchumb_container'>
          <div className='layouttrangchumb_container2'>
            <div className='layouttrangchumb_menuBox'>
              {tabs.map((tab, index) => (
                <div
                  className={`layouttrangchumb_menuBox_item ${
                    activetab === tab.name
                      ? 'layouttrangchumb_menuBox_item_active'
                      : ''
                  }`}
                  key={index}
                  onClick={() => setactivetab(tab.name)}
                >
                  <div className='menuboxmb_con'>
                    <img src={`${tab.img}`} alt='' width={32} height={32} />
                    <p>{tab.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {activetab === 'CASINO' && <CasinoMB />}
              {activetab === 'THỂ THAO' && <TheThaoMB />}
              {activetab === 'BẮN CÁ' && <BanCaMB />}
              {activetab === 'NỔ HŨ' && <NoHuMB />}
              {activetab === 'ĐÁ GÀ' && <DaGaMB />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TrangChuMB
