import { NapTien } from '../NapTien'
import { RutTien } from '../RutTien'
import { ViTien } from '../ViTien'
import './TongQuatViTien.scss'
import { useState } from 'react'

function TongQuatViTien ({ name, lichuy, tieudechuy }) {
  const tabs = [
    {
      name: 'Nạp tiền'
      
    },
    {
      name: 'Rút tiền'

    },
    {
      name: 'Ví tiền'
    }
  ]

  return (
    <div className='tongquatvitien_container'>
      <div className='tongquatvitien_tong'>
        <div className='tongquatvitien_header'>
          {tabs.map((tab, index) => (
            <a href={`/thongtin?tab=${tab.name}`}>
              <div
                className={`tongquatvitien_header_item ${
                  name === tab.name ? 'tongquatvitien_header_item_active' : ''
                }`}
                key={index}
              >
                {tab.name}
              </div>
            </a>
          ))}
        </div>
        <div className='tongquavitien_body'>
          {name === 'Nạp tiền' && <NapTien />}
          {name === 'Rút tiền' && <RutTien />}
          {name === 'Ví tiền' && <ViTien />}
        </div>
      </div>
      <div className='tongquatvitien_chuy'>
        <h3 className='tieude_chuy'>{tieudechuy}</h3>

        <ul>
          {lichuy.map((chuy, index) => (
            <li key={index}>{chuy}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TongQuatViTien
