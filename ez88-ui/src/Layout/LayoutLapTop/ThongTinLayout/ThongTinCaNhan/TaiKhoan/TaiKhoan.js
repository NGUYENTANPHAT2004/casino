import './TaiKhoan.scss'
import { useState } from 'react'
function TaiKhoan () {
  const [isSuaEmail, setIsSuaEmail] = useState(false)
  const [isSuaTelegram, setIsSuaTelegram] = useState(false)
  return (
    <div className='taikhoancn_container'>
      <div className='taikhoancn_header'>
        Cập nhật thông tin ngày sinh giúp bạn nhận được nhiều phần quà hấp dẫn
        từ hệ thống vào dịp sinh nhật. Ngày sinh chỉ cập nhật lần đầu và không
        thể thay đổi,
      </div>
      <div className='taikhoancn_item'>
        <span>Username</span>
        <span>tentoila99</span>
      </div>
      <div className='taikhoancn_item'>
        <span>Số điện thoại</span>
      </div>
      <div className='taikhoancn_item'>
        <span>Email</span>
        <span>petworldstore27@gmail.com</span>
      </div>
      {/* <div className='taikhoancn_item'>
        <span className='sinhnhat'>
          Sinh nhật
          <input type='date' />
        </span>
        <span className='btnthuchien'>
          <button>Thực hiện</button>
        </span>
      </div>
      <h3>Mạng xã hội</h3>
      <div className='taikhoancn_item'>
        <span className='spanemail'>
          <div className = 'divspanemail'>Email:</div>
          <input type='text' readOnly={!isSuaEmail} />
        </span>
        <span className='btnthuchien'>
          {isSuaEmail && <button className='btnhuysua' onClick={() => setIsSuaEmail(false)}>Hủy</button>}

          <button onClick={() => setIsSuaEmail(true)}>
            {isSuaEmail ? 'Đồng ý' : 'Sửa'}
          </button>
        </span>
      </div>
      <div className='taikhoancn_item'>
        <span className='spanemail'>
          <div className='divspanemail'>Telegram:</div>
          <input type='text' readOnly={!isSuaTelegram} />
        </span>
        <span className='btnthuchien'>
          {isSuaTelegram && <button className='btnhuysua' onClick={() => setIsSuaTelegram(false)}>Hủy</button>}
          <button onClick={() => setIsSuaTelegram(true)}>
            {isSuaTelegram ? 'Đồng ý' : 'Sửa'}
          </button>
        </span>
      </div> */}
    </div>
  )
}

export default TaiKhoan
