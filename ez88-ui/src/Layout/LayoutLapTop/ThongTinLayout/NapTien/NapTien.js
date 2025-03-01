import { useState } from 'react'
import './NapTien.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import VietNamDong from './VietNamDong'

function NapTien () {
  const [ismethod, setismethod] = useState(true)
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
    <div className='naptien_container'>
      <div className='naptien_header'>
        <h4>Phương thức nạp:</h4>
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
      </div>
      {ismethod ? (
        <VietNamDong />
      ) : (
        <div className='naptien_body'>
          <div className='qr_naptien'>
            <svg height='200' width='200' viewBox='0 0 29 29'>
              <path
                fill='#FFFFFFFF'
                d='M0,0 h29v29H0z'
                shape-rendering='crispEdges'
              ></path>
              <path
                fill='#000000'
                d='M0 0h7v1H0zM10 0h1v1H10zM12 0h1v1H12zM15 0h2v1H15zM19 0h2v1H19zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM9 1h1v1H9zM11 1h2v1H11zM14 1h2v1H14zM17 1h1v1H17zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM9 2h1v1H9zM12 2h1v1H12zM14 2h1v1H14zM16 2h3v1H16zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM9 3h2v1H9zM15 3h2v1H15zM18 3h2v1H18zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM12 4h2v1H12zM15 4h1v1H15zM18 4h1v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h3v1H8zM12 5h2v1H12zM15 5h1v1H15zM19 5h2v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM9 7h4v1H9zM14 7h5v1H14zM20 7h1v1H20zM0 8h1v1H0zM3 8h1v1H3zM5 8h2v1H5zM8 8h2v1H8zM13 8h1v1H13zM15 8h1v1H15zM21 8h1v1H21zM23 8h1v1H23zM0 9h5v1H0zM9 9h2v1H9zM13 9h2v1H13zM17 9h1v1H17zM20 9h3v1H20zM25 9h1v1H25zM27,9 h2v1H27zM0 10h2v1H0zM4 10h4v1H4zM10 10h2v1H10zM16 10h2v1H16zM19 10h1v1H19zM23 10h3v1H23zM27 10h1v1H27zM0 11h6v1H0zM8 11h2v1H8zM13 11h1v1H13zM15 11h2v1H15zM19 11h1v1H19zM22 11h2v1H22zM25,11 h4v1H25zM2 12h1v1H2zM4 12h4v1H4zM9 12h2v1H9zM12 12h3v1H12zM16 12h3v1H16zM21 12h2v1H21zM25 12h1v1H25zM27,12 h2v1H27zM0 13h1v1H0zM5 13h1v1H5zM8 13h2v1H8zM13 13h2v1H13zM17 13h3v1H17zM21 13h1v1H21zM27 13h1v1H27zM0 14h3v1H0zM4 14h3v1H4zM12 14h1v1H12zM16 14h2v1H16zM22 14h2v1H22zM25 14h1v1H25zM27,14 h2v1H27zM0 15h2v1H0zM3 15h2v1H3zM7 15h1v1H7zM13 15h1v1H13zM16 15h4v1H16zM25 15h1v1H25zM27 15h1v1H27zM1 16h1v1H1zM4 16h3v1H4zM8 16h3v1H8zM12 16h1v1H12zM17 16h1v1H17zM19 16h1v1H19zM21 16h1v1H21zM23 16h1v1H23zM28,16 h1v1H28zM1 17h2v1H1zM4 17h1v1H4zM7 17h3v1H7zM13 17h2v1H13zM16 17h1v1H16zM20 17h3v1H20zM26 17h1v1H26zM28,17 h1v1H28zM0 18h1v1H0zM2 18h2v1H2zM6 18h1v1H6zM8 18h3v1H8zM20 18h1v1H20zM22 18h1v1H22zM25,18 h4v1H25zM3 19h1v1H3zM9 19h1v1H9zM11 19h2v1H11zM15 19h3v1H15zM20 19h2v1H20zM23 19h1v1H23zM27,19 h2v1H27zM0 20h1v1H0zM2 20h3v1H2zM6 20h4v1H6zM12 20h2v1H12zM20 20h7v1H20zM28,20 h1v1H28zM8 21h1v1H8zM10 21h2v1H10zM13 21h2v1H13zM17 21h1v1H17zM19 21h2v1H19zM24 21h2v1H24zM28,21 h1v1H28zM0 22h7v1H0zM11 22h4v1H11zM16 22h3v1H16zM20 22h1v1H20zM22 22h1v1H22zM24 22h3v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM11 23h1v1H11zM13 23h1v1H13zM15 23h2v1H15zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM26,23 h3v1H26zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM10 24h3v1H10zM14 24h1v1H14zM16 24h2v1H16zM20 24h5v1H20zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h3v1H8zM13 25h1v1H13zM17 25h1v1H17zM19 25h4v1H19zM24 25h1v1H24zM27 25h1v1H27zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM9 26h3v1H9zM18 26h1v1H18zM21 26h1v1H21zM23 26h3v1H23zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM9 27h1v1H9zM11 27h3v1H11zM17 27h1v1H17zM20 27h3v1H20zM25 27h1v1H25zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM10 28h1v1H10zM12 28h1v1H12zM14 28h1v1H14zM17 28h1v1H17zM19 28h3v1H19zM24 28h1v1H24zM27 28h1v1H27z'
                shape-rendering='crispEdges'
              ></path>
            </svg>
          </div>
          <div className='diachivi'>
            <span>Địa chỉ ví USDT-BEP20:</span>
            <div className='divlinklienketvi'>
              <span>0xfb150a126ecab93d05dd0af5dcbce1fe815578d1</span>
              <div
                onClick={() =>
                  handleCopy('0xfb150a126ecab93d05dd0af5dcbce1fe815578d1')
                }
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  stroke-width='0'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6ZM6.9998 11V13H12.9998V11H6.9998ZM6.9998 15V17H12.9998V15H6.9998Z'></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='divvitienchuy'>
        <span>Quy định:</span>
        <ul>
          <li>Giới hạn số tiền tùy theo ngân hàng đang sử dụng</li>
          <li>Mỗi lần giao dịch chỉ được thực hiện 1 lần duy nhất</li>
          <li>Giao dịch trong thời gian quy định</li>
          <li>Trong trường hợp khác ngân hàng chỉ nhận giao dịch nhanh 24/7</li>
          <li>Phí người chuyển trả</li>

          <li>
            Kiểm tra đúng số tài khoản, nội dung, số tiền trước khi giao dịch
          </li>

          <li>Các giao dịch sai thông tin sẽ không được hoàn trả</li>
        </ul>
      </div>
    </div>
  )
}

export default NapTien
