import './LichSuLayout.scss'
import { useState } from 'react'
function LichSuLayout () {
  const today = new Date().toISOString().split('T')[0]

  const [date, setDate] = useState(today)
  const [enddate, setendDate] = useState(today)

  return (
    <div className='divtongquan_container'>
      <div className='tongquan_header'>
        <div className='tongquan_title'>
          <img src='/images/hoahongls.png' alt='' width={24} height={24} />
          <div>Lịch sử</div>
        </div>
        <div className='tongquan_descreption'>
          Note: Lịch sử hoa hồng ghi nhận khoản tiền nhận được dưới dạng hoa
          hồng và tính bằng USDT.
        </div>
      </div>
      <div className='lichsu_body'>
        <div className='lichsu_header'>
          <img src='/images/headertongquan.png' alt='' width={24} height={24} />
          <div>Thống kê tuần qua</div>
        </div>
        <div className='lichsu_tien'>0</div>
        <div className='lichsu_footer'>
          <div className='divhinhthuc'>
            <span>Hình thức</span>
            <div className='divinputdate'>
              <input
                type='date'
                value={date}
                onChange={e => setDate(e.target.value)}
                pattern='\d{2}/\d{2}/\d{4}'
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
                  <th>Doanh số nhóm</th>
                  <th>Hoa hồng</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>không có dữ liệu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LichSuLayout
