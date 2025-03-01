/* eslint-disable jsx-a11y/anchor-is-valid */
import './TrangChuLayout.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CucTele } from '../CucTele'

function TrangChuLayout () {
  const settings = {
    dots: true, // Hiển thị chấm điều hướng
    infinite: true, // Chạy lặp vô tận
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 3, // Hiển thị 3 ảnh trên cùng 1 hàng
    slidesToScroll: 1, // Cuộn từng ảnh một
    autoplay: true, // Tự động chạy
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Khi màn hình nhỏ hơn 1024px thì hiển thị 2 ảnh
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Khi màn hình nhỏ hơn 768px thì hiển thị 1 ảnh
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <main className='baselayout_main'>
      <CucTele />
      <div className='mainhome_container'>
        <div className='layout_wrapper_container'>
          <div>
            <div className='banner_container'>
              <Slider {...settings}>
                <div className='banner_item'>
                  <img src='/images/banner1.png' alt='Banner 1' />
                </div>
                <div className='banner_item'>
                  <img src='/images/banner2.png' alt='Banner 2' />
                </div>
                <div className='banner_item'>
                  <img src='/images/banner3.png' alt='Banner 3' />
                </div>
                <div className='banner_item'>
                  <img src='/images/banner4.webp' alt='Banner 3' />
                </div>
              </Slider>
            </div>
          </div>
          <div className='mainhome_mb'>
            <div className='gamecontainer-row gameinfo-row'>
              <a
                href='/casino'
                className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_3__yol49 GameInfo_col_6__8nO0O'
              >
                <div className='GameInfo_img_game__kyl3x'>
                  <img
                    src='/images/back_casino.webp'
                    alt=''
                    className='img-full'
                  />
                </div>
                <div className='GameInfo_nameProvider__Z_KsX'>
                  <div className='GameInfo_logo__k8eFM'>
                    <img
                      src='/images/icon_casino.webp'
                      alt=''
                      className='img-full'
                    />
                  </div>
                  <p>CASINO</p>
                </div>
              </a>

              <a
                href='/thethao'
                className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_3__yol49 GameInfo_col_6__8nO0O'
              >
                <div className='GameInfo_img_game__kyl3x'>
                  <img
                    src='/images/back_thethao.webp'
                    alt=''
                    className='img-full'
                  />
                </div>
                <div className='GameInfo_nameProvider__Z_KsX'>
                  <div className='GameInfo_logo__k8eFM'>
                    <img
                      src='/images/icon_thethao.webp'
                      alt=''
                      className='img-full'
                    />
                  </div>
                  <p>THỂ THAO</p>
                </div>
              </a>
              <div className='GameInfo_col__Gj7YL GameInfo_col_md_6__fVYEq GameInfo_col_12__oLS15 GameInfo_mobi_padding__HvS2T'>
                <div className='GameInfo_row__2NqhN GameInfo_h_100__60W_4 GameInfo_row_gap_10__QpOsg'>
                  <a
                    href='/nohu'
                    className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_6__fVYEq GameInfo_col_6__8nO0O'
                  >
                    <div className='GameInfo_img_game__kyl3x'>
                      <img
                        src='/images/back_slot.webp'
                        alt=''
                        className='img-full'
                      />
                    </div>
                    <div className='GameInfo_nameProvider__Z_KsX'>
                      <div className='GameInfo_logo__k8eFM'>
                        <img
                          src='/images/icon_slot.webp'
                          alt=''
                          className='img-full'
                        />
                      </div>
                      <p>NỔ HŨ</p>
                    </div>
                  </a>
                  <a
                    href='/banca'
                    className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_6__fVYEq GameInfo_col_6__8nO0O'
                  >
                    <div className='GameInfo_img_game__kyl3x'>
                      <img
                        src='/images/back_banca.webp'
                        alt=''
                        className='img-full'
                      />
                    </div>
                    <div className='GameInfo_nameProvider__Z_KsX'>
                      <div className='GameInfo_logo__k8eFM'>
                        <img
                          src='/images/icon_banca.webp'
                          alt=''
                          className='img-full'
                        />
                      </div>
                      <p>BẮN CÁ</p>
                    </div>
                  </a>
                  <div className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_6__fVYEq GameInfo_col_6__8nO0O'>
                    <div className='GameInfo_img_game__kyl3x'>
                      <img
                        src='/images/back_gamebai.webp'
                        alt=''
                        className='img-full'
                      />
                    </div>
                    <div className='GameInfo_nameProvider__Z_KsX'>
                      <div className='GameInfo_logo__k8eFM'>
                        <img
                          src='/images/icon_gamebai.webp'
                          alt=''
                          className='img-full'
                        />
                      </div>
                      <p>GAME BÀI</p>
                    </div>
                  </div>
                  <div className='GameInfo_providerGame__fsnbd GameInfo_col__Gj7YL GameInfo_col_md_6__fVYEq GameInfo_col_6__8nO0O'>
                    <div className='GameInfo_img_game__kyl3x'>
                      <img
                        src='/images/back_xoso.webp'
                        alt=''
                        className='img-full'
                      />
                    </div>
                    <div className='GameInfo_nameProvider__Z_KsX'>
                      <div className='GameInfo_logo__k8eFM'>
                        <img
                          src='/images/icon_xoso.webp'
                          alt=''
                          className='img-full'
                        />
                      </div>
                      <p>XỔ SỐ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TrangChuLayout
