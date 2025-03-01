import './ViTien.scss'

function ViTien () {
  return (
    <div className='vitien_container'>
      <div className='vitien_header'>
        <div className='vitien_body'>
          <img src='/images/vnd.webp' alt='' width={24} height={24}></img>
          <div className='vitien_text'>VND</div>
          <div className='vitien_tien'>0</div>
        </div>
        <div className='vitien_body'>
          <img src='/images/usdt.svg' alt=''></img>
          <div className='vitien_text'>USD</div>
          <div className='vitien_tien'>$0</div>
        </div>
      </div>
      <div className='divvitienchuy'>
        <span>Chú ý:</span>
        <ul>
          <li>Hệ thống không thu phí khi chuyển tiền giữa các ví.</li>
          <li>Sử dụng chức năng Rút hết về ví chính để rút toàn bộ các ví game về ví chính</li>
          <li>Mỗi ví game sẽ có tỷ giá quy đổi khác nhau.</li>
          <li>Hội viên vui lòng liên hệ CSKH để được hỗ trợ</li>
        </ul>
      </div>
    </div>
  )
}

export default ViTien
