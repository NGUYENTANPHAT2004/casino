import './ThongTinCaNhan.scss'
import { useState } from 'react'
import { TaiKhoan } from './TaiKhoan'
import { DoiMatKhau } from './DoiMatKhau'
import { DoiMaPin } from './DoiMaPin'

function ThongTinCaNhan () {
  const [activeTab, setactiveTab] = useState('Tài khoản')
  const tabs = ['Tài khoản', 'Đổi mật khẩu', 'Đổi mã pin']
  return (
    <div className='thongtincanhan_container'>
      <div className='mainaccount'>
        <div className='mainaccount_title'>Thông tin cá nhân</div>
        <div className='mainaccount_tab'>
          {tabs.map((tab, index) => (
            <div
               className={`mainaccount_tab_item ${activeTab === tab ? 'mainaccount_tab_item_active' : ''}`}
              key={index}
              onClick={() => setactiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div>
          {activeTab === 'Tài khoản' && <TaiKhoan />}
          {activeTab === 'Đổi mật khẩu' && <DoiMatKhau />}
          {activeTab === 'Đổi mã pin' && <DoiMaPin />}
        </div>
      </div>
    </div>
  )
}

export default ThongTinCaNhan
