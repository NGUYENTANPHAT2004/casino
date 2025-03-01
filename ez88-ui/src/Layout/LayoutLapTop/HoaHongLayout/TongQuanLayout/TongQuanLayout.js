import './TongQuanLayout.scss'
function TongQuanLayout () {
  return (
    <div className='divtongquan_container'>
      <div className='tongquan_header'>
        <div className='tongquan_title'>
          <img src='/images/headertongquan.png' alt='' width={24} height={24} />
          <div>Tổng quan</div>
        </div>
        <div className='tongquan_descreption'>
          Note: Cấp độ hiển thị là cấp độ hiện tại của bạn, được tính bằng đơn
          vị tiền tệ USDT
        </div>
      </div>
      <div className='tongquan_body'>
        <div className='tongquan_capdo'>
          <div className='divimgcapdo'>
            <img src='/images/stars.webp' alt='' width={24} height={24} />
          </div>
          <div className='divcapdo'>
            <h2>Cấp 0</h2>
            <p>18:52 thứ hai, 10/02/2025</p>
          </div>
        </div>
        <div className='tongquan_transaction'>
          <div className='divbalance'>
            <h3>0.00</h3>
            <p>Tổng giao dịch cá nhân</p>
          </div>
          <div className='divbalance2'>
            <h3>0.00</h3>
            <p>Tổng giao dịch nhóm</p>
          </div>
        </div>
      </div>
      <div className='tongquan_footer'>
        <h3>Tổng hoa hồng tích lũy</h3>
        <div className='tongquan_commisson'>
          <h3>0.00</h3>
          <button className='btnnhanngay'>Nhận ngay</button>
        </div>
      </div>
    </div>
  )
}

export default TongQuanLayout
