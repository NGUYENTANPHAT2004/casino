import { NapTien } from '../../LayoutLapTop/ThongTinLayout/NapTien'
import { ViTien } from '../../LayoutLapTop/ThongTinLayout/ViTien'
import { RutTien } from '../../LayoutLapTop/ThongTinLayout/RutTien'
import { useState } from 'react'

function TongQuatViTien ({ name }) {
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
            <a href={`/thongtin2?tab=${tab.name}`}>
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
    </div>
  )
}

export default TongQuatViTien
