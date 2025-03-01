import './LichSuCuoc.scss'
import { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
function LichSuCuoc () {
  const today = new Date().toISOString().split('T')[0]

  const [date, setDate] = useState(today)
  const [enddate, setendDate] = useState(today)

  const [visible, setVisible] = useState(false)
  const [method, setmethod] = useState('ALL')
  const methods = ['ALL', 'Casino', 'Thể thao', 'Nổ hũ', 'Bắn cá']

  const handlesetmethd = m => {
    setmethod(m)
    setVisible(false)
  }
  return (
    <div className='lichsucuoc_container'>
      <div className='lichsucuoc_header'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M21.75 12.0001C21.75 14.5859 20.7228 17.0659 18.8943 18.8944C17.0658 20.7228 14.5859 21.7501 12 21.7501C9.41414 21.7501 6.93419 20.7228 5.10571 18.8944C3.27723 17.0659 2.25 14.5859 2.25 12.0001C2.25 11.8011 2.32902 11.6104 2.46967 11.4697C2.61032 11.3291 2.80109 11.2501 3 11.2501C3.19891 11.2501 3.38968 11.3291 3.53033 11.4697C3.67098 11.6104 3.75 11.8011 3.75 12.0001C3.74336 13.9607 4.43281 15.86 5.69557 17.3598C6.95833 18.8596 8.71243 19.8625 10.6455 20.1899C12.5786 20.5174 14.5651 20.1481 16.2514 19.1478C17.9376 18.1476 19.2141 16.5813 19.8535 14.7279C20.493 12.8745 20.4538 10.8543 19.743 9.02707C19.0322 7.19984 17.696 5.68419 15.9723 4.75004C14.2485 3.81588 12.2491 3.52386 10.3302 3.92598C8.4113 4.3281 6.69739 5.39825 5.4937 6.94586H6.4692C6.66811 6.94586 6.85888 7.02488 6.99953 7.16553C7.14018 7.30618 7.2192 7.49695 7.2192 7.69586C7.2192 7.89477 7.14018 8.08554 6.99953 8.22619C6.85888 8.36684 6.66811 8.44586 6.4692 8.44586H3.5762C3.37729 8.44586 3.18652 8.36684 3.04587 8.22619C2.90522 8.08554 2.8262 7.89477 2.8262 7.69586V4.80326C2.8262 4.60435 2.90522 4.41358 3.04587 4.27293C3.18652 4.13228 3.37729 4.05326 3.5762 4.05326C3.77511 4.05326 3.96588 4.13228 4.10653 4.27293C4.24718 4.41358 4.3262 4.60435 4.3262 4.80326V6.00886C5.57272 4.4064 7.28891 3.23361 9.23477 2.65453C11.1806 2.07545 13.2588 2.11903 15.1787 2.77918C17.0985 3.43932 18.7641 4.68303 19.9423 6.33633C21.1205 7.98964 21.7526 9.96987 21.75 12.0001ZM9.4341 15.3585L12.6367 12.9093C12.7285 12.8394 12.8028 12.7493 12.854 12.646C12.9052 12.5426 12.9317 12.4289 12.9316 12.3136V6.56356C12.9316 6.36465 12.8526 6.17388 12.7119 6.03323C12.5713 5.89258 12.3805 5.81356 12.1816 5.81356C11.9827 5.81356 11.7919 5.89258 11.6513 6.03323C11.5106 6.17388 11.4316 6.36465 11.4316 6.56356V11.943L8.5229 14.1671C8.44344 14.2264 8.37655 14.301 8.32609 14.3864C8.27564 14.4718 8.24264 14.5664 8.22898 14.6646C8.21533 14.7629 8.22131 14.8629 8.24656 14.9588C8.27181 15.0547 8.31585 15.1447 8.37611 15.2235C8.43637 15.3023 8.51167 15.3683 8.59763 15.4178C8.6836 15.4673 8.77853 15.4993 8.87693 15.5118C8.97533 15.5244 9.07524 15.5173 9.17088 15.491C9.26652 15.4646 9.35598 15.4196 9.4341 15.3585Z'
            fill='#89eb34'
          ></path>
        </svg>
        <span>Tiền thắng/thua</span>
      </div>
      <div className='lichsucuoc_body'>
        <div className='lichsutien'>
          <span>Thắng</span>
          <span className='spanthanglai'>0</span>
        </div>
        <div className='lichsutien'>
          <span>Thua</span>
          <span className='spanthua'>0</span>
        </div>

        <div className='lichsutien'>
          <span>Tiền lãi ước tính</span>
          <span className='spanthanglai'>0</span>
        </div>
        <div className='divtablelichsu'>
          <h3>Hình thức</h3>
          <div className='divdatemethod'>
            <Tippy
              content={
                <div className='menu-container'>
                  <ul className='menu-list'>
                    {methods.map((item, index) => (
                      <li key={index} onClick={() => handlesetmethd(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              visible={visible}
              interactive={true}
              onClickOutside={() => setVisible(false)}
              placement='bottom'
            >
              <div
                className='wallet_method'
                onClick={() => setVisible(!visible)}
              >
                <span>{method}</span>
                <svg
                  viewBox='64 64 896 896'
                  focusable='false'
                  data-icon='down'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
                </svg>
              </div>
            </Tippy>

            <div className='divinputdate'>
              <input
                type='date'
                value={date}
                onChange={e => setDate(e.target.value)}
                pattern='d{2}/d{2}/d{4}'
                title='Định dạng: dd/mm/yyyy'
              />
              <svg
                viewBox='0 0 1024 1024'
                focusable='false'
                data-icon='swap-right'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z'></path>
              </svg>
              <input
                type='date'
                value={enddate}
                onChange={e => setendDate(e.target.value)}
                pattern='d{2}/d{2}/d{4}'
                title='Định dạng: dd/mm/yyyy'
              />
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='down'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
              </svg>
            </div>
          </div>
          <div>
            <table className='rebate-table'>
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Số lần cược</th>
                  <th>Số tiền đặt cược</th>
                  <th>Tiền cược hợp lệ</th>
                  <th>Thắng/thua</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>không có dữ liệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LichSuCuoc
