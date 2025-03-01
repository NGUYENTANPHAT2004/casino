import './GioiThieuLayout.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function GioiThieuLayout () {
  const handleCopy = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Sao chép thành công!', {
          position: 'top-center',
          autoClose: 2000 // Ẩn sau 2 giây
        })
      })
      .catch(() => {
        toast.error('Sao chép thất bại, vui lòng thử lại!')
      })
  }

  return (
    <div className='divtongquan_container'>
      <div className='tongquan_header'>
        <div className='tongquan_title'>
          <img src='/images/hoahonggt.png' alt='' width={24} height={24} />
          <div>Giới thiệu</div>
        </div>
        <div className='tongquan_descreption'>
          Note: Mỗi người được mời chỉ được giới thiệu qua một hình thức giới
          thiệu duy nhất.
        </div>
      </div>
      <div className='gioithieu_body'>
        <div className='header_gioithieu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M7.93974 15.2602C7.84974 15.2602 7.76973 15.2502 7.67973 15.2102C6.86973 14.9102 6.18973 14.3202 5.75973 13.5502C4.75973 11.7502 5.37974 9.40017 7.12974 8.31017L9.46974 6.86015C10.3297 6.33015 11.3397 6.17018 12.2997 6.42018C13.2597 6.67018 14.0697 7.30016 14.5597 8.18016C15.5597 9.98016 14.9397 12.3302 13.1897 13.4202L12.9297 13.6102C12.5897 13.8502 12.1197 13.7702 11.8797 13.4402C11.6397 13.1002 11.7197 12.6302 12.0497 12.3902L12.3597 12.1702C13.4797 11.4702 13.8597 10.0202 13.2497 8.91017C12.9597 8.39017 12.4897 8.02016 11.9297 7.87016C11.3697 7.72016 10.7797 7.82017 10.2697 8.13017L7.92973 9.58016C6.84973 10.2502 6.46974 11.7002 7.07974 12.8202C7.32974 13.2702 7.72974 13.6202 8.20974 13.8002C8.59974 13.9402 8.79973 14.3702 8.64973 14.7602C8.53973 15.0702 8.24974 15.2602 7.93974 15.2602Z'
              fill='#292D32'
            ></path>
            <path
              d='M12.66 17.6491C12.36 17.6491 12.05 17.6091 11.75 17.5291C10.79 17.2791 9.97997 16.6491 9.49997 15.7691C8.49997 13.9691 9.11996 11.6191 10.87 10.5291L11.13 10.3391C11.47 10.0991 11.94 10.1791 12.18 10.5091C12.42 10.8491 12.34 11.3191 12.01 11.5591L11.7 11.7791C10.58 12.4791 10.2 13.9291 10.81 15.0391C11.1 15.5591 11.57 15.9291 12.13 16.0791C12.69 16.2291 13.28 16.1291 13.79 15.8191L16.13 14.3691C17.21 13.6991 17.59 12.2491 16.98 11.1291C16.73 10.6791 16.33 10.3291 15.85 10.1491C15.46 10.0091 15.26 9.57914 15.41 9.18914C15.55 8.79914 15.98 8.59914 16.37 8.74914C17.18 9.04914 17.86 9.63914 18.29 10.4091C19.29 12.2091 18.67 14.5591 16.92 15.6491L14.58 17.0991C13.99 17.4591 13.33 17.6491 12.66 17.6491Z'
              fill='#292D32'
            ></path>
            <path
              d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
              fill='#292D32'
            ></path>
          </svg>
          <span>Liên kết giới thiệu</span>
        </div>
        <div className='formgioithieu'>
          <label htmlFor=''>Mã giới thiệu</label>
          <div className='formgioithieu_input'>
            <input type='text' value={'SGF93IWV'} readOnly />
            <span onClick={() => handleCopy('SGF93IWV')}>Sao chép</span>
          </div>
        </div>
        <div className='formgioithieu'>
          <label htmlFor=''>Liên kết giới thiệu</label>
          <div className='formgioithieu_input'>
            <input
              type='text'
              value={'https://www.fnk88.club/auth/register?reff=SGF93IWV'}
              readOnly
            />
            <span onClick={() => handleCopy('https://www.fnk88.club/auth/register?reff=SGF93IWV')}>Sao chép link</span>
          </div>
        </div>
        <div className='formgioithieu_button'>
          <button>Chia sẻ link website</button>
          <div className='formgioithieu_button_icon'>
            <svg height='40' width='40' viewBox='0 0 29 29'>
              <path
                fill='#FFFFFFFF'
                d='M0,0 h29v29H0z'
                shape-rendering='crispEdges'
              ></path>
              <path
                fill='#000000'
                d='M0 0h7v1H0zM9 0h2v1H9zM12 0h2v1H12zM15 0h6v1H15zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM11 1h1v1H11zM13 1h4v1H13zM18 1h1v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM14 2h4v1H14zM19 2h1v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h4v1H9zM14 3h3v1H14zM18 3h2v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM13 4h1v1H13zM15 4h2v1H15zM18 4h1v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM12 5h1v1H12zM14 5h3v1H14zM19 5h1v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h2v1H8zM12 7h1v1H12zM15 7h1v1H15zM17 7h2v1H17zM20 7h1v1H20zM0 8h2v1H0zM3 8h1v1H3zM6 8h2v1H6zM10 8h2v1H10zM13 8h2v1H13zM16 8h1v1H16zM20 8h1v1H20zM22 8h3v1H22zM26 8h2v1H26zM3 9h2v1H3zM8 9h1v1H8zM10 9h4v1H10zM16 9h3v1H16zM20 9h3v1H20zM25 9h1v1H25zM28,9 h1v1H28zM0 10h3v1H0zM4 10h3v1H4zM9 10h2v1H9zM13 10h1v1H13zM19 10h3v1H19zM25 10h3v1H25zM1 11h1v1H1zM3 11h3v1H3zM7 11h2v1H7zM13 11h1v1H13zM15 11h2v1H15zM18 11h2v1H18zM21 11h4v1H21zM26 11h2v1H26zM1 12h1v1H1zM6 12h1v1H6zM11 12h3v1H11zM17 12h1v1H17zM19 12h4v1H19zM25 12h1v1H25zM27,12 h2v1H27zM2 13h2v1H2zM8 13h5v1H8zM17 13h5v1H17zM23 13h1v1H23zM2 14h1v1H2zM5 14h2v1H5zM9 14h3v1H9zM13 14h2v1H13zM17 14h1v1H17zM20 14h2v1H20zM25,14 h4v1H25zM0 15h1v1H0zM8 15h3v1H8zM13 15h1v1H13zM17 15h1v1H17zM21 15h2v1H21zM25 15h1v1H25zM27 15h1v1H27zM3 16h1v1H3zM5 16h4v1H5zM16 16h2v1H16zM19 16h3v1H19zM23 16h1v1H23zM27 16h1v1H27zM11 17h1v1H11zM13 17h2v1H13zM16 17h2v1H16zM21 17h3v1H21zM25 17h1v1H25zM28,17 h1v1H28zM0 18h1v1H0zM2 18h7v1H2zM10 18h1v1H10zM13 18h1v1H13zM18 18h1v1H18zM20 18h1v1H20zM23 18h1v1H23zM27,18 h2v1H27zM2 19h2v1H2zM7 19h1v1H7zM11 19h1v1H11zM15 19h3v1H15zM19 19h2v1H19zM27,19 h2v1H27zM0 20h1v1H0zM5 20h4v1H5zM13 20h1v1H13zM15 20h2v1H15zM18 20h7v1H18zM26 20h1v1H26zM8 21h2v1H8zM14 21h1v1H14zM16 21h1v1H16zM19 21h2v1H19zM24 21h1v1H24zM26,21 h3v1H26zM0 22h7v1H0zM8 22h3v1H8zM12 22h2v1H12zM16 22h2v1H16zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM27 22h1v1H27zM0 23h1v1H0zM6 23h1v1H6zM9 23h1v1H9zM11 23h3v1H11zM16 23h1v1H16zM18 23h3v1H18zM24,23 h5v1H24zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM10 24h1v1H10zM12 24h1v1H12zM16 24h2v1H16zM20 24h5v1H20zM28,24 h1v1H28zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM10 25h3v1H10zM14 25h1v1H14zM17 25h2v1H17zM21 25h2v1H21zM24 25h3v1H24zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h2v1H10zM13 26h1v1H13zM18 26h1v1H18zM20 26h2v1H20zM24 26h3v1H24zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h1v1H8zM12 27h6v1H12zM20 27h3v1H20zM24 27h1v1H24zM27 27h1v1H27zM0 28h7v1H0zM8 28h3v1H8zM12 28h2v1H12zM17 28h1v1H17zM19 28h2v1H19zM23 28h2v1H23zM27 28h1v1H27z'
                shape-rendering='crispEdges'
              ></path>
            </svg>
          </div>
        </div>
        {/* <div className='formgioithieu'>
          <label htmlFor=''>Liên kết Telegram Bot</label>
          <div className='formgioithieu_input'>
            <input
              type='text'
              value={'https://t.me/fnk88_play_bot?start=reff=SGF93IWV'}
              readOnly
            />
            <span onClick={() => handleCopy('https://t.me/fnk88_play_bot?start=reff=SGF93IWV')}>Sao chép link</span>
          </div>
        </div>
        <div className='formgioithieu_button'>
          <button>Chia sẻ link giới thiệu</button>
          <div className='formgioithieu_button_icon'>
            <svg height='40' width='40' viewBox='0 0 29 29'>
              <path
                fill='#FFFFFFFF'
                d='M0,0 h29v29H0z'
                shape-rendering='crispEdges'
              ></path>
              <path
                fill='#000000'
                d='M0 0h7v1H0zM9 0h3v1H9zM13 0h2v1H13zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM11 1h4v1H11zM16 1h1v1H16zM18 1h1v1H18zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h3v1H9zM15 2h2v1H15zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM10 3h2v1H10zM13 3h1v1H13zM16 3h1v1H16zM20 3h1v1H20zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1H10zM12 4h1v1H12zM16 4h2v1H16zM19 4h2v1H19zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM9 5h2v1H9zM13 5h2v1H13zM17 5h1v1H17zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM9 7h1v1H9zM12 7h1v1H12zM15 7h1v1H15zM20 7h1v1H20zM0 8h2v1H0zM5 8h3v1H5zM9 8h2v1H9zM12 8h2v1H12zM15 8h3v1H15zM19 8h1v1H19zM24 8h2v1H24zM1 9h1v1H1zM3 9h3v1H3zM10 9h1v1H10zM13 9h1v1H13zM15 9h1v1H15zM18 9h2v1H18zM24 9h1v1H24zM26 9h2v1H26zM1 10h1v1H1zM3 10h2v1H3zM6 10h2v1H6zM9 10h1v1H9zM11 10h2v1H11zM14 10h5v1H14zM22 10h3v1H22zM4 11h2v1H4zM8 11h1v1H8zM10 11h2v1H10zM14 11h1v1H14zM16 11h1v1H16zM18 11h1v1H18zM21 11h5v1H21zM2 12h1v1H2zM5 12h6v1H5zM12 12h2v1H12zM19 12h1v1H19zM22 12h2v1H22zM28,12 h1v1H28zM4 13h2v1H4zM10 13h1v1H10zM12 13h1v1H12zM14 13h2v1H14zM17 13h4v1H17zM22 13h3v1H22zM27,13 h2v1H27zM1 14h2v1H1zM4 14h3v1H4zM9 14h1v1H9zM12 14h2v1H12zM15 14h1v1H15zM17 14h1v1H17zM20 14h1v1H20zM23 14h4v1H23zM0 15h4v1H0zM5 15h1v1H5zM7 15h1v1H7zM9 15h1v1H9zM11 15h1v1H11zM19 15h1v1H19zM23 15h1v1H23zM26 15h1v1H26zM28,15 h1v1H28zM1 16h2v1H1zM4 16h1v1H4zM6 16h2v1H6zM14 16h4v1H14zM19 16h2v1H19zM25 16h2v1H25zM0 17h2v1H0zM4 17h2v1H4zM8 17h2v1H8zM15 17h2v1H15zM20 17h1v1H20zM22 17h3v1H22zM26,17 h3v1H26zM0 18h2v1H0zM3 18h1v1H3zM6 18h1v1H6zM8 18h4v1H8zM15 18h3v1H15zM19 18h2v1H19zM23 18h1v1H23zM25 18h1v1H25zM28,18 h1v1H28zM0 19h1v1H0zM5 19h1v1H5zM8 19h1v1H8zM10 19h2v1H10zM14 19h2v1H14zM18 19h1v1H18zM22 19h2v1H22zM0 20h1v1H0zM2 20h1v1H2zM5 20h2v1H5zM14 20h11v1H14zM26,20 h3v1H26zM8 21h1v1H8zM14 21h2v1H14zM17 21h1v1H17zM19 21h2v1H19zM24 21h2v1H24zM0 22h7v1H0zM8 22h2v1H8zM13 22h5v1H13zM19 22h2v1H19zM22 22h1v1H22zM24 22h3v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM10 23h1v1H10zM12 23h1v1H12zM20 23h1v1H20zM24 23h1v1H24zM27,23 h2v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM9 24h1v1H9zM12 24h1v1H12zM14 24h3v1H14zM19 24h7v1H19zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM9 25h1v1H9zM13 25h4v1H13zM21 25h1v1H21zM25 25h2v1H25zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h1v1H10zM15 26h1v1H15zM17 26h2v1H17zM20 26h3v1H20zM24 26h4v1H24zM0 27h1v1H0zM6 27h1v1H6zM8 27h5v1H8zM19 27h1v1H19zM24 27h3v1H24zM28,27 h1v1H28zM0 28h7v1H0zM8 28h1v1H8zM10 28h1v1H10zM13 28h1v1H13zM15 28h3v1H15zM22 28h5v1H22z'
                shape-rendering='crispEdges'
              ></path>
            </svg>
          </div>
        </div> */}
      </div>
      <div className='gioithieu_footer'></div>
    </div>
  )
}

export default GioiThieuLayout
