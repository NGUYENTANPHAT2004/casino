import { useState } from 'react'
import './DangKyLayout.scss'
import { DangNhapLayout } from '../DangNhapLayout'
function DangKyLayout ({ isOpen, onClose }) {
  const [isPassword, setIsPasswword] = useState(true)
  const [isRePassword, setReIsPasswword] = useState(true)
  const [selectedType, setSelectedType] = useState('phone')
  const [isOpenDangNhap, setIsOpenDangNhap] = useState(false)
  if (!isOpen) return null
  return (
    <div className='modaldangnhap'>
      <div className='modaldangnhap_overlay' onClick={onClose}></div>
      <div className='modaldangnhap_main'>
        <div className='formauth_container'>
          <div className='fromauth_close' onClick={onClose}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'></path>
            </svg>
          </div>
          <div className='formauth_image'></div>
          <div className='formauth_form'>
            <div className='formauth_tag'>
              <img src='/images/imgdangnhap1.webp' alt='' className='' />
              <span>Đăng ký</span>
            </div>
            <p className='formauth_title'>
              Đăng ký ngay để nhận nhiều phần quà hấp dẫn
            </p>
            <form action=''>
              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'></path>
                    </svg>
                  </i>
                  <input
                    type='text'
                    className='input_input'
                    placeholder='Tên tài khoản'
                  />
                </div>
              </label>
              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z'></path>
                    </svg>
                  </i>
                  <input
                    type={isPassword ? 'password' : 'text'}
                    className='input_input'
                    placeholder='Mật khẩu'
                  />
                  <span
                    className='input_eye'
                    onClick={() => setIsPasswword(!isPassword)}
                  >
                    {isPassword ? (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z'></path>
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'></path>
                      </svg>
                    )}
                  </span>
                </div>
              </label>

              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z'></path>
                    </svg>
                  </i>
                  <input
                    type={isRePassword ? 'password' : 'text'}
                    className='input_input'
                    placeholder='Nhập lại mật khẩu'
                  />
                  <span
                    className='input_eye'
                    onClick={() => setReIsPasswword(!isRePassword)}
                  >
                    {isRePassword ? (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z'></path>
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'></path>
                      </svg>
                    )}
                  </span>
                </div>
              </label>

              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'></path>
                    </svg>
                  </i>
                  <input
                    type='text'
                    className='input_input'
                    placeholder='Mã giới thiệu'
                  />
                </div>
              </label>
              <div className='FormSignup_type__ga8F0'>
                <span>Kích hoạt</span>
                <label>
                  <span>SĐT</span>
                  <input
                    name='type'
                    type='radio'
                    checked={selectedType === 'phone'}
                    onChange={() => setSelectedType('phone')}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    name='type'
                    type='radio'
                    checked={selectedType === 'email'}
                    onChange={() => setSelectedType('email')}
                  />
                </label>
              </div>

              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    {selectedType === 'phone' ? (
                      <svg
                        stroke='currentColor'
                        fill='none'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke='none'
                          d='M0 0h24v24H0z'
                          fill='none'
                        ></path>
                        <path d='M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z'></path>
                        <path d='M11 4h2'></path>
                        <path d='M12 17v.01'></path>
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z'></path>
                      </svg>
                    )}
                  </i>
                  <input
                    type={selectedType === 'phone' ? 'phone' : 'email'}
                    className='input_input'
                    placeholder={
                      selectedType === 'phone'
                        ? 'Số điện thoại'
                        : 'Địa chỉ Email'
                    }
                  />
                </div>
              </label>
              <label htmlFor='' className='input_container_label'>
                <div className='input_group_input'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      stroke-width='2'
                      viewBox='0 0 24 24'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                      <path d='M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2'></path>
                      <path d='M12 11.875l3 -1.687'></path>
                      <path d='M12 11.875v3.375'></path>
                      <path d='M12 11.875l-3 -1.687'></path>
                      <path d='M12 11.875l3 1.688'></path>
                      <path d='M12 8.5v3.375'></path>
                      <path d='M12 11.875l-3 1.688'></path>
                      <path d='M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2'></path>
                    </svg>
                  </i>
                  <input
                    type='text'
                    className='input_input'
                    placeholder='OTP'
                  />
                  <div class='Input_sendBtn__cEMS2'>Lấy OTP</div>
                </div>
              </label>

              <div className='formlogin_groupbtn'>
                <div className='Button_container__By3IT'>
                  <div className='Button_primary__8ZICM Button_rounded_6__tsqKR Button_btn__z_3IU'>
                    <div className='Button_text__FcN3u'>Đăng ký</div>
                  </div>
                </div>
              </div>
              <div class='FormLogin_note__3xgzD'>
                Bạn đã có tài khoản?{' '}
                <span
                  onClick={() => {
                    setIsOpenDangNhap(true)
                  }}
                >
                  Đăng nhập ngay
                </span>
              </div>
              <span class='FormSignup_help__eYvaQ'>
                Không thể đăng ký? Liên hệ CSKH
              </span>
            </form>
            <div className='FormLogin_denlong__WFfoN'>
              <img src='/images/denlong.webp' alt='' />
            </div>
          </div>
        </div>
      </div>
      <DangNhapLayout
        isOpen={isOpenDangNhap}
        onClose={() => setIsOpenDangNhap(false)}
      />
    </div>
  )
}

export default DangKyLayout
