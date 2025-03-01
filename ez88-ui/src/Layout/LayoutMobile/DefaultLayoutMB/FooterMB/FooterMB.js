/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './FooterMB.scss'
import { DangNhapLayoutMB } from '../../DangNhapLayoutMB'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function FooterMB ({ activemenu, setactivemenu }) {
  const location = useLocation()
  const [isOpenDangNhap, setIsOpenDangNhap] = useState(false)

  const menus = [
    {
      name: 'Trang chủ',
      img1: '/images/trangchu.webp',
      img2: '/images/trangchu2.webp',
      link: '/'
    },
    {
      name: 'Hoa hồng',
      img1: '/images/khuyenmai.webp',
      img2: '/images/khuyenmai3.webp',
      link: '/hoahong',
      requiresLogin: true // Đánh dấu trang cần đăng nhập
    },
    {
      name: 'Cá nhân',
      img1: '/images/canhan.webp',
      img2: '/images/canhan2.webp',
      link: '/thongtin',
      requiresLogin: true
    }
  ]

  const handleNavigation = menu => {
    const isdangnhap = sessionStorage.getItem('isDangNhap') === 'true'
    if (menu.requiresLogin && !isdangnhap) {
      setIsOpenDangNhap(true)
      return
    }
    window.location.href = menu.link
  }

  return (
    <>
      <div className='footermb_container'>
        <div
          className={`footermb_item ${activemenu ? 'activefooter' : ''}`}
          onClick={() => setactivemenu(!activemenu)}
        >
          <img
            src={activemenu ? '/images/close.webp' : '/images/menumb.webp'}
            alt=''
            width={22}
            height={22}
          />
          <span>{activemenu ? 'Đóng' : 'Menu'}</span>
        </div>
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`footermb_item ${
              location.pathname === menu.link ? 'activefooter' : ''
            }`}
            onClick={() => handleNavigation(menu)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={
                location.pathname === menu.link
                  ? `${menu.img2}`
                  : `${menu.img1}`
              }
              alt=''
              width={22}
              height={22}
            />
            <span>{menu.name}</span>
          </div>
        ))}
      </div>

      <DangNhapLayoutMB
        isOpen={isOpenDangNhap}
        onClose={() => setIsOpenDangNhap(false)}
      />
    </>
  )
}

export default FooterMB
