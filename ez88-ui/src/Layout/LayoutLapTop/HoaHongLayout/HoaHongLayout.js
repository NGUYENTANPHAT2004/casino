/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import './HoaHongLayout.scss'
import { GioiThieuLayout } from './GioiThieuLayout'
import { MangluoiLayout } from './MangluoiLayout'
import LichSuLayout from './LichSuLayout/LichSuLayout'
import { CucTele } from '../CucTele'

function HoaHongLayout () {
  const [activeTab, setActiveTab] = useState('Giới thiệu')

  const tabs = ['Giới thiệu', 'Thành viên', 'Lịch sử']

  return (
    <div className='divhoahong_container'>
      <CucTele />
      <div className='HelpCenter_container__ONosN'>
        <a href='' className='HelpCenter_item__8R90S'>
          <i>
            <img src='/images/tele.webp' alt='' width={24} height={24} />
          </i>
        </a>
      </div>

      <div className='tab_list'>
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab_item ${activeTab === tab ? 'tab_item_active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <div className='tab_itemtext'>{tab}</div>
          </div>
        ))}
      </div>
      <div>
        {activeTab === 'Giới thiệu' && <GioiThieuLayout />}
        {activeTab === 'Thành viên' && <MangluoiLayout />}
        {activeTab === 'Lịch sử' && <LichSuLayout />}
      </div>
    </div>
  )
}

export default HoaHongLayout
