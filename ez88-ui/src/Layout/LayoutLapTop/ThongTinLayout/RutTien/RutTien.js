/* eslint-disable jsx-a11y/anchor-has-content */
import './RutTien.scss'
import { useState } from 'react'
import VietNamRutTien from './VietNamRutTien'
function RutTien () {
  const [ismethod, setismethod] = useState(true)
  const isMobile = window.innerWidth <= 768

  return (
    <div className='ruttien_container'>
      <div className='method_naptien'>
        <div className='naptien'>
          <input
            type='radio'
            checked={ismethod}
            onClick={() => setismethod(true)}
          />
          <label htmlFor=''>VND</label>
        </div>
        <div className='naptien'>
          <input
            type='radio'
            checked={!ismethod}
            onClick={() => setismethod(false)}
          />
          <label htmlFor=''>USDT</label>
        </div>
      </div>

      {ismethod ? (
        <VietNamRutTien />
      ) : (
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
                    d='M12 2C17.5226 2 22 6.4774 22 12C22 17.5226 17.5224 22 12 22C6.4776 22 2 17.5238 2 12C2 6.4762 6.4768 2 12 2Z'
                    fill='#53AE94'
                  ></path>
                  <path
                    d='M13.2342 10.6676V9.18H16.636V6.9134H7.3728V9.18H10.775V10.6664C8.01 10.7934 5.931 11.341 5.931 11.997C5.931 12.653 8.011 13.2006 10.775 13.3284V18.0934H13.235V13.328C15.995 13.2006 18.0698 12.6534 18.0698 11.998C18.0698 11.3426 15.995 10.7954 13.235 10.668M13.235 12.9244V12.9232C13.1656 12.9276 12.809 12.949 12.015 12.949C11.3802 12.949 10.9336 12.931 10.7762 12.9228V12.9248C8.3334 12.8166 6.51 12.3912 6.51 11.8822C6.51 11.3732 8.3336 10.9484 10.7762 10.84V12.501C10.9362 12.512 11.3938 12.539 12.0254 12.539C12.784 12.539 13.1654 12.5074 13.2354 12.501V10.84C15.6734 10.9486 17.4926 11.3744 17.4926 11.8816C17.4926 12.3888 15.6722 12.8146 13.235 12.9232'
                    fill='white'
                  ></path>
                </svg>
                <span>USDT</span>
              </div>
              <span>0.00</span>
            </div>
          </div>
          <div className='divchonmangluoi'>
            <h4>Chọn mạng lưới</h4>
            <div className='divinputmangluoi'>
              <input type='radio' checked />
              <span>USDT(BEP20)</span>
            </div>
          </div>
          <a
            href={
              isMobile ? '/caidatruttien' : '/thongtin?tab=Cài đặt rút tiền'
            }
          >
            <div
              style={{
                color: 'red',
                marginTop: '20px'
              }}
            >
              <h4>Thiết lập địa chỉ ví</h4>
            </div>
          </a>
          <div className='divtienrutra'>
            <h4>Số tiền rút ra</h4>
            <span>Phí: 1$</span>
          </div>
          <div className='divinputnhapsotien'>
            <input type='text' placeholder='Nhập số tiền' />
            <span>USDT</span>
          </div>
          <button className='btnruttien'>Thực hiện</button>
        </>
      )}

      <div className='divvitienchuy'>
        <span>Chú ý:</span>
        <ul>
          <li>Nhập đúng số tài khoản, tên chủ tài khoản</li>
          <li>Các giao dịch sai tên tài khoản sẽ k được hoàn tiền</li>
          <li>Sau khi rút xin đợi 1 khoảng thời gian để xử lý</li>
          <li>
            Để đảm bảo quyền lợi của mình , hội viên vui lòng sử dụng tài khoản
            ngân hàng chính chủ để giao dịch với hệ thống . không liên kết 1 tài
            khoản ngân hàng cho 2 hoặc nhiều tài khoản game .
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RutTien
