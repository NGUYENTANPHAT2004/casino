/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './ThongTinLayoutMB.scss'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { DangXuatLayout } from '../DangXuatLayout'
import { CucTele } from '../../LayoutLapTop/CucTele'

function ThongTinLayoutMB () {
  const [searchParams] = useSearchParams()
  const tabFromUrl = searchParams.get('tab') || 'Thông tin cá nhân'
  const [isModalDangXuat, setIsOpenDangXuat] = useState(false)

  const [activeTab, setActiveTab] = useState(tabFromUrl || 'Thông tin cá nhân')

  const wallet = [
    {
      img: '/images/vitien.svg',
      name: 'Ví tiền',
      link: '/vitien'
    },
    {
      img: '/images/naptien.svg',
      name: 'Nạp tiền',
      link: '/naptien'
    },
    {
      img: '/images/ruttien.svg',
      name: 'Rút tiền',
      link: '/ruttien'
    }
  ]
  const tabs = [
    {
      img: '/images/thongtincn.svg',
      name: 'Thông tin cá nhân',
      link: '/thongtincanhan'
    },
    {
      img: '/images/lichsucuoc.svg',
      name: 'Lịch sử cược',
      link: '/lichsucuoc'
    },
    {
      img: '/images/lichsucuoc.svg',
      name: 'Lịch sử nạp rút',
      link: '/lichsunaprut'
    },
    {
      img: '/images/caidatruttien.svg',
      name: 'Cài đặt rút tiền',
      link: '/caidatruttien'
    }
  ]

  return (
    <div className='thongtinmb_container'>
      <CucTele />
      <div className='grid wide'>
        <div className='menuprofile_main'>
          <div className='menuprofile_menu'>
            <div className='menuprofile_sidebar'>
              <div className='menuprofile_info'>
                <div>
                  <div className='avatar_container'>
                    <span>
                      <img src='/images/avatar.webp' alt='' />
                    </span>
                  </div>
                </div>
                <div className='menuprofile_grouptext'>
                  <span>tentoila99</span>
                  <div className='menuprofile_vip'>
                    <div className='menuprofile_vip_item'>
                      <i>
                        <img
                          src='/images/hang.png'
                          alt=''
                          width={24}
                          height={24}
                        />
                      </i>
                      VIP 0
                    </div>
                  </div>
                </div>
              </div>
              <div className='menuprofile_wallet'>
                {wallet.map((item, index) => (
                  <a
                    href={`/thongtin2?tab=${item.name}`}
                    className={`menuprofile_wallet_item ${
                      activeTab === item.name
                        ? 'menuprofile_wallet_item_active'
                        : ''
                    }`}
                    key={index}
                  >
                    <img src={`${item.img}`} alt='' width={20} height={20} />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div></div>
            <div className='menuprofile_list'>
              {tabs.map((tab, index) => (
                <a href={tab.link}>
                  <div
                    className={`menulist_item`}
                    key={index}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    <img
                      src={`${tab.img}`}
                      alt=''
                      width={20}
                      height={20}
                      style={{ color: 'transparent' }}
                    />
                    <span>{tab.name}</span>
                  </div>
                </a>
              ))}
              {/* <a href='/hoahong'>
                <div className={`menulist_item`}>
                  <img
                    src='/images/khuyenmai.webp'
                    alt=''
                    width={20}
                    height={20}
                    style={{ color: 'transparent' }}
                  />
                  <span>Hoa hồng</span>
                </div>
              </a> */}
              <div
                className={`menulist_item `}
                onClick={() => setIsOpenDangXuat(true)}
              >
                <img
                  src='/images/dangxuat.svg'
                  alt=''
                  width={20}
                  height={20}
                  style={{ color: 'transparent' }}
                />
                <span>Đăng xuất</span>
              </div>
            </div>
            <div>
              <div className='menuprofile_footer'>
                <div>
                  <div className='mainsupport_social'>
                    <a href=''>
                      <i>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          stroke-width='0'
                          viewBox='0 0 496 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z'></path>
                        </svg>
                      </i>
                      <span>Telegram 24/7</span>
                    </a>
                    <a href=''>
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
                          <path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'></path>
                        </svg>
                      </i>
                      <span>Facebook</span>
                    </a>
                  </div>
                  {/* <div className='mainsupport_FNK88'>
                    <i>
                      <img src='/images/cskh.webp' alt='' />
                    </i>
                    <div>
                      <p>Chat với chúng tôi ngay!</p>
                      <span>Live Chat CSKH 24/7</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DangXuatLayout
        isOpen={isModalDangXuat}
        onClose={() => setIsOpenDangXuat(false)}
      />
    </div>
  )
}

export default ThongTinLayoutMB
