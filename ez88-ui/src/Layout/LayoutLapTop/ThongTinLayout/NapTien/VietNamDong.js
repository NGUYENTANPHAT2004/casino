import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
function VietNamDong () {
  const [textsottien, settextsotien] = useState('')
  const [visible, setvisible] = useState(false)
  const [itemnh, setitemnh] = useState('')
  const nganhang = [
    {
      img: '/images/bidv.webp',
      name: 'BIDV'
    },
    {
      img: '/images/vpbank.webp',
      name: 'VPBank'
    }
  ]

  const tien = [
    {
      tien: '100k',
      value: '100,000'
    },
    {
      tien: '500k',
      value: '500,000'
    },
    {
      tien: '1,000k',
      value: '1,000,000'
    },
    {
      tien: '5,000k',
      value: '5,000,000'
    },
    {
      tien: '10,000k',
      value: '10,000,000'
    }
  ]
  return (
    <>
      <div className='divsodu'>
        <h4>Số dư ước tính</h4>
        <div className='sodutong'>
          <div className='phuongthuc_sodu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 19.4323C16.1048 19.4323 19.4323 16.1048 19.4323 12C19.4323 7.89525 16.1048 4.56769 12 4.56769C7.89525 4.56769 4.56769 7.89525 4.56769 12C4.56769 16.1048 7.89525 19.4323 12 19.4323ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9904 17.5189 17.5189 21.9904 12 22ZM12 3.31004C7.17655 3.31004 3.26638 7.22022 3.26638 12.0437C3.26638 16.8671 7.17655 20.7773 12 20.7773C16.8234 20.7773 20.7336 16.8671 20.7336 12.0437C20.7336 9.72736 19.8135 7.50593 18.1756 5.86806C16.5377 4.23019 14.3163 3.31004 12 3.31004Z'
                fill='#BE1515'
              ></path>
              <path
                d='M14.2379 7.72931H15V8.55961H14.2379V14.8541H12.9715V14.0463C12.4908 14.6858 11.8107 15 10.9196 15C10.1106 15 9.43049 14.7195 8.85595 14.1473C8.28141 13.575 8 12.8682 8 12.0491C8 11.2188 8.28141 10.5231 8.85595 9.95091C9.43049 9.37868 10.1106 9.09818 10.9196 9.09818C11.8107 9.09818 12.4908 9.41234 12.9715 10.0407V8.55961H11.072V7.72931H12.9715V7H14.2379V7.72931ZM9.79397 13.3394C10.1457 13.676 10.5913 13.8443 11.1189 13.8443C11.6466 13.8443 12.0921 13.676 12.4439 13.3394C12.7956 12.9916 12.9715 12.5652 12.9715 12.0491C12.9715 11.533 12.7956 11.1066 12.4439 10.77C12.0921 10.4222 11.6466 10.2539 11.1189 10.2539C10.5913 10.2539 10.1457 10.4222 9.79397 10.77C9.44221 11.1066 9.26633 11.533 9.26633 12.0491C9.26633 12.5652 9.44221 12.9916 9.79397 13.3394Z'
                fill='white'
              ></path>
            </svg>

            <span>VNĐ</span>
          </div>
          <span>0.00 USDT ~ 0</span>
        </div>
      </div>
      <div className='divchonmangluoi'>
        <h4>Nạp tiền bằng</h4>
        <div className='divinputmangluoi'>
          <input type='radio' checked />
          <img src='/images/nganhang.png' alt='' width={24} height={24} />
          <span>Ngân hàng</span>
        </div>
      </div>
      <div className='divchonnganhang'>
        <label htmlFor=''>Ngân hàng</label>
        <Tippy
          interactive={visible}
          arrow={false}
          visible={visible}
          onClickOutside={() => setvisible(false)}
          placement='bottom-start'
          content={
            <div className='menu-container'>
              <ul className='menu-list'>
                {nganhang.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setvisible(false)
                      setitemnh(item)
                    }}
                  >
                    <div className='divmethodusd'>
                      <img src={item.img} alt='' width={24} height={24} />
                      <span>{item.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          }
          appendTo='parent'
          maxWidth='none'
        >
          <div
            className='divinputnhapsotien'
            onClick={() => setvisible(!visible)}
          >
            {itemnh ? (
              <div className='itemnh'>
                <img src={itemnh.img} alt='' width={24} height={24} />
                <span>{itemnh.name}</span>
              </div>
            ) : (
              <input type='text' placeholder='Chọn tên ngân hàng' readOnly />
            )}
            <svg
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='down'
              width='1em'
              height='1em'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
            </svg>
          </div>
        </Tippy>
      </div>
      <div className='divchonnganhang'>
        <label htmlFor=''>Số tiền nạp vào</label>
        <div className='divinputnhapsotien'>
          <input
            type='text'
            placeholder='Nhập số tiền'
            value={textsottien}
            onChange={e => settextsotien(e.target.value)}
          />
          <span>VNĐ</span>
        </div>
        <div className='chonganhangfooter'>
          <span>1USDT = 26,200VNĐ</span>
          <span>~0USDT</span>
        </div>
      </div>
      <div className='divtien'>
        {tien.map((item, index) => (
          <div
            key={index}
            className='divtien_item'
            onClick={() => settextsotien(item.value)}
          >
            {item.tien}
          </div>
        ))}
      </div>
      <button className='btnruttien'>Lấy thông tin thanh toán</button>
    </>
  )
}

export default VietNamDong
