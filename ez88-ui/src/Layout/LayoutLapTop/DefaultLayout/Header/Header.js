/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import './Header.scss'
import { DangNhapLayout } from '../../DangNhapLayout'
import { useLocation } from 'react-router-dom'
import { DangKyLayout } from '../../DangKyLayout'
import { DangXuatLayout } from '../../../LayoutMobile/DangXuatLayout'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function Header ({ isSang, setisSang }) {
  const [isModalDangnhap, setisOpenModalDangNhap] = useState(false)
  const [isModalDangKy, setIsOpenDangKy] = useState(false)
  const [isModalDangXuat, setIsOpenDangXuat] = useState(false)

  const [time, setTime] = useState('')
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [visiblmethod, setvisiblemethod] = useState(false)
  const [imageusd, setimageusd] = useState('/images/vnd.webp')

  const [isDangNhap, setIsDangNhap] = useState(
    sessionStorage.getItem('isDangNhap')
  )

  const methodusd = [
    {
      img: '/images/vnd.webp',
      name: 'VND'
    },
    {
      img: '/images/usdt.svg',
      name: 'USDT'
    }
  ]
  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const options = { timeZone: 'Asia/Bangkok', hour12: false }
      setTime(now.toLocaleTimeString('en-GB', options) + ' GMT+7')
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval) // Cleanup khi unmount
  }, [])
  useEffect(() => {
    if (isSang) {
      // Chuyển sang màu sáng
      document.documentElement.style.setProperty('--standard-color', '#2a2d34')
      document.documentElement.style.setProperty('--title-color', '#fff')
      document.documentElement.style.setProperty(
        '--background-color',
        '#1c1e22'
      )
      document.documentElement.style.setProperty('--shadow-color', '#111415')
      document.documentElement.style.setProperty(
        '--icon-menu-active-3',
        'linear-gradient(180deg, #4b4e4e, #303537)'
      )
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.style.setProperty('--standard-color', '#ffffff')
      document.documentElement.style.setProperty('--title-color', '#2a2d34')
      document.documentElement.style.setProperty(
        '--background-color',
        '#f6f7fa'
      )
      document.documentElement.style.setProperty('--shadow-color', '#eaecf3')
      document.documentElement.style.setProperty(
        '--icon-menu-active-3',
        '#dddfe7'
      )
      localStorage.setItem('theme', 'dark')

      // Chuyển lại màu tối
    }
  }, [isSang])

  const handelhoahong = e => {
    e.preventDefault()
    if (!sessionStorage.getItem('isDangNhap')) {
      setisOpenModalDangNhap(true)
      return
    }
    window.location.href = '/hoahong'
  }

  return (
    <div>
      <div className='header'>
        <div className='divheader'>
          <div className='divlogotieng'>
            <a href='/'>
              <img src='/images/logo.webp' alt='' width={140} height={40} />
            </a>
            <div className='divTieng'>
              <i>
                <img src='/images/vn.webp' alt='' width={24} height={24} />
              </i>
              Tiếng Việt
            </div>
            <div className='divsangtoi'>
              <div className='divsang' onClick={() => setisSang(!isSang)}>
                <div className={`diviconsang ${isSang ? '' : 'active'}`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'></path>
                  </svg>
                </div>
                <div className={`divicontoi ${!isSang ? 'activetoi' : ''}`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    stroke-width='0'
                    viewBox='0 0 24 24'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z'></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {isDangNhap ? (
            <div className='GroupControlHeader_group_chat__ZQeHs'>
              <div className='GroupLogged_container__r_YCs'>
                <Tippy
                  content={
                    <div className='menu-container'>
                      <ul className='menu-list'>
                        {methodusd.map((method, index) => (
                          <li
                            key={index}
                            onClick={() => setimageusd(method.img)}
                          >
                            <div className='divmethodusd'>
                              <img
                                src={`${method.img}`}
                                width={24}
                                height={24}
                              />
                              {method.name}
                            </div>

                            <div className='divmethodsotien'>
                              <span>0</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  visible={visiblmethod}
                  interactive={true}
                  onClickOutside={() => setvisiblemethod(false)}
                >
                  <div
                    className='GroupLogged_groupText__Jz1OU'
                    onClick={() => setvisiblemethod(!visiblmethod)}
                  >
                    <img src={`${imageusd}`} alt='' width={22} height={22} />
                    <span class='GroupLogged_coin__cQg_b' id='coin'>
                      0
                    </span>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 512 512'
                      color='var(--text-color)'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                      style={{ color: '#98a7b5' }}
                    >
                      <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'></path>
                    </svg>
                  </div>
                </Tippy>

                <a
                  href='/thongtin?tab=Nạp tiền'
                  className='Button_container__By3IT Button_maxContent__29WwM'
                >
                  <div className='Button_primaryLight__xb5yf Button_maxContent__29WwM Button_small__ZiSjz Button_rounded_6__tsqKR Button_p_6_12__yWNI_ Button_btn__z_3IU'>
                    <div className='Button_text__FcN3u'>
                      <span className='GroupLogged_btn__DXtBn'>
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
                            <path fill='none' d='M0 0h24v24H0V0z'></path>
                            <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'></path>
                          </svg>
                        </i>
                        Nạp tiền
                      </span>
                    </div>
                  </div>
                </a>

                <Tippy
                  content={
                    <div className='menu-container'>
                      <ul className='menu-list'>
                        <a href='/thongtin'>
                          <li>
                            <div className='divmethodusd'>
                              <svg
                                stroke='currentColor'
                                fill='currentColor'
                                stroke-width='0'
                                viewBox='0 0 512 512'
                                height='1em'
                                width='1em'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path d='M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z'></path>
                              </svg>
                              Thông tin tài khoản
                            </div>
                          </li>
                        </a>
                        <li onClick={() => setIsOpenDangXuat(true)}>
                          <div className='divmethodusd'>
                            <svg
                              stroke='currentColor'
                              fill='currentColor'
                              stroke-width='0'
                              viewBox='0 0 24 24'
                              height='1em'
                              width='1em'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z'></path>
                            </svg>
                            Đăng xuất
                          </div>
                        </li>
                      </ul>
                    </div>
                  }
                  visible={visible}
                  interactive={true}
                  onClickOutside={() => setVisible(false)}
                >
                  <div
                    className='GroupLogged_avatar__28Red'
                    style={{ cursor: 'pointer' }}
                    onClick={() => setVisible(!visible)}
                  >
                    <div className='Avatar_container__OtlQL'>
                      <span className='span_avatar'>
                        <img
                          src='/images/avatar.webp'
                          alt=''
                          className='imgavatar'
                        />
                      </span>
                    </div>
                  </div>
                </Tippy>
                <span class='GroupLogged_username__La8dz'>tentoila99</span>
              </div>
            </div>
          ) : (
            <div className='GroupControlHeader_group_chat__ZQeHs'>
              <div className='GroupAuth_groupBtn__HWS4v'>
                <div className='Button_container__By3IT Button_maxContent__29WwM'>
                  <div className='Button_textLight__bOO84 Button_bold__oPRj9 Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                    <div
                      className='Button_text__FcN3u'
                      onClick={() => setisOpenModalDangNhap(true)}
                    >
                      Đăng nhập
                    </div>
                  </div>
                </div>
                <div className='Button_container__By3IT Button_maxContent__29WwM'>
                  <div className='Button_bold__oPRj9 Button_primaryLight__xb5yf Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                    <div
                      className='Button_text__FcN3u'
                      onClick={() => setIsOpenDangKy(true)}
                    >
                      Tham gia ngay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='headermenu'>
        <div className='divheadermenu'>
          <div className='headermainmenu'>
            <ul role='menu' className='headerlist'>
              <li>
                <a
                  href='/'
                  className={`headeritem ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/'
                        ? '/images/trangchu2.webp'
                        : '/images/trangchu.webp'
                    }
                    alt=''
                  />
                  <span>Trang Chủ</span>
                </a>
              </li>
              <li>
                <a
                  href='/thethao'
                  className={`headeritem ${
                    location.pathname === '/thethao' ? 'active' : ''
                  }`}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/thethao'
                        ? '/images/thethao2.webp'
                        : '/images/thethao.webp'
                    }
                    alt=''
                  />
                  <span>Thể thao</span>
                </a>
              </li>

              <li>
                <a
                  href='/casino'
                  className={`headeritem ${
                    location.pathname === '/casino' ? 'active' : ''
                  }`}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/casino'
                        ? '/images/casino2.webp'
                        : '/images/casino.webp'
                    }
                    alt=''
                  />
                  <span>Casino</span>
                </a>
              </li>

              <li>
                <a
                  href='/nohu'
                  className={`headeritem ${
                    location.pathname === '/nohu' ? 'active' : ''
                  }`}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/nohu'
                        ? '/images/slots2.webp'
                        : '/images/slots.webp'
                    }
                    alt=''
                  />
                  <span>Nổ hũ</span>
                </a>
              </li>

              <li>
                <a
                  href='/banca'
                  className={`headeritem ${
                    location.pathname === '/banca' ? 'active' : ''
                  }`}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/banca'
                        ? '/images/banca2.webp'
                        : '/images/banca.webp'
                    }
                    alt=''
                  />
                  <span>Bắn cá</span>
                </a>
              </li>

              <li>
                <a
                  className={`headeritem ${
                    location.pathname === '/hoahong' ? 'active' : ''
                  }`}
                  onClick={e => handelhoahong(e)}
                >
                  <img
                    width={24}
                    height={24}
                    src={
                      location.pathname === '/hoahong'
                        ? '/images/khuyenmai2.webp'
                        : '/images/khuyenmai.webp'
                    }
                    alt=''
                  />
                  <span>Hoa hồng</span>
                </a>
              </li>
            </ul>
            <div style={{ marginLeft: 'auto' }}>
              <div className='Button_container__By3IT'>
                <div className='Button_w_fit__CkozB Button_p_8_12___NQEY Button_rounded_4__aAM9e Button_green_outline_2__zX_0j'>
                  <div className='Button_text__FcN3u'>
                    <i>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 512 512'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M256 112a56 56 0 1 0-56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm72.87-263.84l-28.51-15.92c-7.44-5-16.91-2.46-22.29 4.68a47.59 47.59 0 0 1-47.23 18.23C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49a47.5 47.5 0 0 1-41.54-19.15c-5.28-7.09-14.73-9.45-22.09-4.54l-28.57 16a16 16 0 0 0-5.44 20.47L104.24 416h303.52l102.55-211.37a16 16 0 0 0-5.44-20.47z'></path>
                      </svg>
                    </i>
                    <p className='pvipclub'>VIP Club</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='headersupport'>
              <img width={24} height={24} src='/images/support.webp' alt='' />
              <span>Hỗ trợ trực tuyến</span>
            </div>
          </div>
        </div>
      </div>
      <div className='headernotifi'>
        <div className='baselayout'>
          <div className='headermainnotifi'>
            <div className='headertextnotifi'>
              <i>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 1024 1024'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z'></path>
                </svg>
              </i>
              <div className='chuchay rfm-marquee-container'>
                <div></div>
                <div className='divchu rfm-marquee'>
                  <div className='rfm-initial-child-container'>
                    <div className='rfm-child'>
                      <p className='pvipclub1'>
                        FNK88 - Nhà cái uy tín số một thị trường Châu Á, Hỗ trợ
                        đa dạng các cổng thanh toán: ATM, Banking, MOMO,
                        USDT,... Khuyến mãi ngập tràn theo tháng, thỏa sức cá
                        cược. CSKH hỗ trợ nhiệt tình 24h/7.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='divchu rfm-marquee'>
                  <div className='rfm-child'>
                    <p className='pvipclub1'>
                      FNK88 - Nhà cái uy tín số một thị trường Châu Á, Hỗ trợ đa
                      dạng các cổng thanh toán: ATM, Banking, MOMO, USDT,...
                      Khuyến mãi ngập tràn theo tháng, thỏa sức cá cược. CSKH hỗ
                      trợ nhiệt tình 24h/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='headerclocknotifi'>{time}</div>
          </div>
        </div>
      </div>
      <DangNhapLayout
        isOpen={isModalDangnhap}
        onClose={() => setisOpenModalDangNhap(false)}
      />
      <DangKyLayout
        isOpen={isModalDangKy}
        onClose={() => setIsOpenDangKy(false)}
      />
      <DangXuatLayout
        isOpen={isModalDangXuat}
        onClose={() => setIsOpenDangXuat(false)}
      />
    </div>
  )
}

export default Header
