import './DangXuatLayout.scss'
function DangXuatLayout ({ isOpen, onClose }) {
  if (!isOpen) return null
  return (
    <div className='modaldangnhap'>
      <div className='modaldangnhap_overlay' onClick={onClose}></div>
      <div className='modaldangnhap_main'>
        <div className='Dialog_popup__VKsaz'>
          <div className='Dialog_iconWarn__MskkG'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 256 256'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z'></path>
            </svg>
          </div>
          <h4 className='Dialog_titlePopup__3iBru'>Đăng xuất tài khoản?</h4>
          <p className='Dialog_note__kz7NT'>
            Tài khoản của bạn sẽ bị đăng xuất khỏi thiết bị này.
          </p>
          <div className='Dialog_groupBtnPopup__SHV_R'>
            <div className='Button_container__By3IT Button_maxContent__29WwM'>
              <div className='Button_grey__1tZKm Button_rounded_6__tsqKR Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU click'>
                <div className='Button_text__FcN3u' onClick={onClose}>
                  Huỷ
                </div>
              </div>
            </div>
            <div className='Button_container__By3IT Button_maxContent__29WwM'>
              <div className='Button_primary__8ZICM Button_rounded_6__tsqKR Button_maxContent__29WwM Button_small__ZiSjz Button_btn__z_3IU click'>
                <div
                  className='Button_text__FcN3u'
                  onClick={() => {
                    sessionStorage.clear()
                    window.location.href = '/'
                  }}
                >
                  Xác nhận
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DangXuatLayout
