/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './HeaderMB.scss'
import { DangKyLayoutMB } from '../../DangKyLayoutMB'
import { DangNhapLayoutMB } from '../../DangNhapLayoutMB'
import { DangXuatLayout } from '../../DangXuatLayout'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function HeaderMB () {
  const [isModalDangnhap, setisOpenModalDangNhap] = useState(false)
  const [isModalDangKy, setIsOpenDangKy] = useState(false)
  const [isModalDangXuat, setIsOpenDangXuat] = useState(false)

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

  return (
    <header className='headermb_container'>
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
                      <img src={`${imageusd}`} alt='' width={22} height={22} />
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
                        onClick={() => setisOpenModalDangNhap(true)}
                      >
                        Đăng nhập
                      </div>
                    </div>
                  </div>
                  <div class='Button_container__By3IT Button_maxContent__29WwM'>
                    <div class='Button_bold__oPRj9 Button_primaryLight__xb5yf Button_rounded_4__aAM9e Button_maxContent__29WwM Button_small__ZiSjz Button_p_8_8__lQMC1 Button_btn__z_3IU'>
                      <div
                        class='Button_text__FcN3u'
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
          </div>
        </div>
      </div>
      <DangNhapLayoutMB
        isOpen={isModalDangnhap}
        onClose={() => setisOpenModalDangNhap(false)}
      />
      <DangKyLayoutMB
        isOpen={isModalDangKy}
        onClose={() => setIsOpenDangKy(false)}
      />
      <DangXuatLayout
        isOpen={isModalDangXuat}
        onClose={() => setIsOpenDangXuat(false)}
      />
    </header>
  )
}

export default HeaderMB
