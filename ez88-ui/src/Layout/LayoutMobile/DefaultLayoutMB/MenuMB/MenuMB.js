/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './MenuMB.scss'
import { DangNhapLayoutMB } from '../../DangNhapLayoutMB'
import { DangKyLayoutMB } from '../../DangKyLayoutMB'
import { DangXuatLayout } from '../../DangXuatLayout'
import { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function MenuMB ({ activemenu, setactivemenu }) {
  const [isOpenDangNhap, setIsOpenDangNhap] = useState(false)
  const [isOpenDangKy, setIsOpenDangKy] = useState(false)

  const [isModalDangXuat, setIsOpenDangXuat] = useState(false)

  const [visible, setVisible] = useState(false)
  const [visiblmethod, setvisiblemethod] = useState(false)
  const [imageusd, setimageusd] = useState('/images/vnd.webp')

  const [isSang, setisSang] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ? false : true
  })
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
    if (isSang) {
      // Chế độ sáng
      document.documentElement.style.setProperty('--standard-color', '#2a2d34')
      document.documentElement.style.setProperty('--title-color', '#fff')
      document.documentElement.style.setProperty(
        '--background-color',
        '#1c1e22'
      )
      document.documentElement.style.setProperty('--shadow-color', '#111415')
      document.documentElement.style.setProperty('--page-shadow', '#111415')
      document.documentElement.style.setProperty(
        '--bg-menu-home',
        'radial-gradient(circle, #6a6a6a 0%, #373737 59.26%, #262626 100%)'
      )

      // Lưu vào localStorage
      localStorage.setItem('theme', 'light')
    } else {
      // Chế độ tối
      document.documentElement.style.setProperty('--standard-color', '#ffffff')
      document.documentElement.style.setProperty('--title-color', '#2a2d34')
      document.documentElement.style.setProperty('--page-shadow', '#dddfe7')
      document.documentElement.style.setProperty(
        '--bg-menu-home',
        'radial-gradient(51.88% 64.84% at 50% 35.16%,#fff 0%,#e2e6e7 52.73%,#bac5c9 100%)'
      )
      document.documentElement.style.setProperty(
        '--background-color',
        '#f6f7fa'
      )
      document.documentElement.style.setProperty('--shadow-color', '#eaecf3')
      document.documentElement.style.setProperty(
        '--icon-menu-active-3',
        '#dddfe7'
      )

      // Lưu vào localStorage
      localStorage.setItem('theme', 'dark')
    }
  }, [isSang])

  return (
    <>
      <div className={`menumb_container ${activemenu ? 'active' : ''}`}>
        <div className='headermb_header'>
          <div className='headermb'>
            <div className='headermb_groupcontrol'>
              <div className='headermb_control_left'>
                <a href='/'>
                  <img
                    src='/images/logo.webp'
                    alt=''
                    width={100}
                    height={40}
                    className='imglogo_mb'
                  />
                </a>
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
                        <img
                          src={`${imageusd}`}
                          alt=''
                          width={22}
                          height={22}
                        />
                        <span class='GroupLogged_coin__cQg_b' id='coin'>
                          0
                        </span>
                      </div>
                    </Tippy>

                    <a
                      href='/thongtin2?tab=Nạp tiền'
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
                  </div>
                </div>
              ) : (
                <div className='headermb_control_right'>
                  <div className='headermb_groupbtn'>
                    <div className='Button_container__By3IT Button_maxContent__29WwM'>
                      <div className='Button_textLight__bOO84 Button_bold__oPRj9 Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU'>
                        <div
                          className='Button_text__FcN3u'
                          onClick={() => setIsOpenDangNhap(true)}
                        >
                          Đăng nhập
                        </div>
                      </div>
                    </div>
                    <div className='Button_container__By3IT Button_maxContent__29WwM'>
                      <div className='Button_bold__oPRj9 Button_primaryLight__xb5yf Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_p_8_8__lQMC1 Button_btn__z_3IU'>
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
        </div>
        <div className='menumb_header_tong'>
          <div className='menumb_header'>
            <div>
              <div className='divTieng'>
                <i>
                  <img src='/images/vn.webp' alt='' width={24} height={24} />
                </i>
                Tiếng Việt
              </div>
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

            <div className='Button_container__By3IT'>
              <div className='Button_hight_light__1zxVb Button_rounded_4__aAM9e Button_p_8_12___NQEY Button_w_fit__CkozB Button_btn__z_3IU'>
                <div className='Button_text__FcN3u'>
                  <i>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 512 512'
                      height='20'
                      width='20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M256 112a56 56 0 1 0-56-56 56 56 0 0 0 56 56zm176 336H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm72.87-263.84l-28.51-15.92c-7.44-5-16.91-2.46-22.29 4.68a47.59 47.59 0 0 1-47.23 18.23C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49a47.5 47.5 0 0 1-41.54-19.15c-5.28-7.09-14.73-9.45-22.09-4.54l-28.57 16a16 16 0 0 0-5.44 20.47L104.24 416h303.52l102.55-211.37a16 16 0 0 0-5.44-20.47z'></path>
                    </svg>
                  </i>
                  <p className='MenuMobile_text_color__DIsiN'>VIP Club</p>
                </div>
              </div>
            </div>
            <div className='Button_container__By3IT'>
              <div className='Button_hight_light__1zxVb Button_rounded_4__aAM9e Button_p_8_12___NQEY Button_w_fit__CkozB Button_btn__z_3IU'>
                <div className='Button_text__FcN3u'>
                  <i>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.1191 13.3643L11.126 13.7607H12.9443V13.4805C12.9443 12.8311 13.1973 12.4893 14.1064 11.9629C15.0703 11.3955 15.5693 10.6777 15.5693 9.65234V9.64551C15.5693 8.08008 14.2705 7 12.3223 7C10.2236 7 9.05469 8.18262 9 9.78906V9.85742H10.8525L10.8594 9.80273C10.9004 9.09863 11.4131 8.58594 12.1992 8.58594C12.9717 8.58594 13.498 9.05078 13.498 9.70703V9.71387C13.498 10.3496 13.2314 10.6914 12.3496 11.2178C11.4062 11.7715 11.0508 12.3936 11.1191 13.3643ZM10.9482 15.9619C10.9482 16.5635 11.4473 17.0352 12.0625 17.0352C12.6846 17.0352 13.1836 16.5635 13.1836 15.9619C13.1836 15.3604 12.6846 14.8887 12.0625 14.8887C11.4473 14.8887 10.9482 15.3604 10.9482 15.9619Z'
                        fill='#FF7E1E'
                      ></path>
                      <path
                        d='M11.126 13.7607L11.1191 13.3643C11.0508 12.3936 11.4062 11.7715 12.3496 11.2178C13.2314 10.6914 13.498 10.3496 13.498 9.71387V9.70703C13.498 9.05078 12.9717 8.58594 12.1992 8.58594C11.4131 8.58594 10.9004 9.09863 10.8594 9.80273L10.8525 9.85742H9V9.78906C9.05469 8.18262 10.2236 7 12.3223 7C14.2705 7 15.5693 8.08008 15.5693 9.64551V9.65234C15.5693 10.6777 15.0703 11.3955 14.1064 11.9629C13.1973 12.4893 12.9443 12.8311 12.9443 13.4805V13.7607H11.126ZM12.0625 17.0352C11.4473 17.0352 10.9482 16.5635 10.9482 15.9619C10.9482 15.3604 11.4473 14.8887 12.0625 14.8887C12.6846 14.8887 13.1836 15.3604 13.1836 15.9619C13.1836 16.5635 12.6846 17.0352 12.0625 17.0352Z'
                        fill='white'
                      ></path>
                    </svg>
                  </i>
                  <p className='MenuMobile_text_color__DIsiN'>Về FNK88</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='menumb_gamecontainer'>
          <div className='grid wide'>
            <div className='menumb_game'>
              <a href='/thethao' className='menumb_game_item'></a>
              <a href='/casino' className='menumb_game_item1'></a>
              <a href='/nohu' className='menumb_game_item2'></a>
              <a href='/banca' className='menumb_game_item3'></a>
              <a href='/daga' className='menumb_game_item4'></a>

            </div>
          </div>
        </div>
      </div>
      <DangNhapLayoutMB
        isOpen={isOpenDangNhap}
        onClose={() => setIsOpenDangNhap(false)}
      />
      <DangKyLayoutMB
        isOpen={isOpenDangKy}
        onClose={() => setIsOpenDangKy(false)}
      />
      <DangXuatLayout
        isOpen={isModalDangXuat}
        onClose={() => setIsOpenDangXuat(false)}
      />
    </>
  )
}

export default MenuMB
