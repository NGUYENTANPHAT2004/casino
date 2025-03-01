import './NganHang.scss'
import Tippy from '@tippyjs/react'
import { useState } from 'react'
import 'tippy.js/dist/tippy.css'

function NganHang () {
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
  return (
    <div className='nganhang_container'>
      <div className='nganhang_body'>
        <label htmlFor=''>Ngân hàng</label>
        <Tippy
          interactive={visible}
          visible={visible}
          arrow={false}
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
      <div className='nganhang_body'>
        <label htmlFor=''>Số thẻ/tài khoản</label>
        <div className='divinputnhapsotien'>
          <input type='text' placeholder='Số thẻ/tài khoản' />
        </div>
      </div>
      <div className='nganhang_body'>
        <label htmlFor=''>Tên thẻ/tài khoản</label>
        <div className='divinputnhapsotien'>
          <input type='text' placeholder='Tên thẻ/tài khoản' />
        </div>
      </div>
      <div className='nganhang_body'>
        <p>
          Xin lưu ý rằng thông tin thanh toán sẽ chỉ được ghi lại một lần và
          không thể chỉnh sửa. Vui lòng kiểm tra cẩn thận trước khi lưu.
        </p>
      </div>
      <div className='nganhang_body'>
        <button class='btnruttien'>Thực hiện</button>
      </div>
    </div>
  )
}

export default NganHang
