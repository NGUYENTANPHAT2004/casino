function VietNamRutTien () {
  const isMobile = window.innerWidth <= 768

  return (
    <>
      <div className='divsodu'>
        <h4>Số dư ước tính</h4>
        <div className='sodutong'>
          <div className='phuongthuc_sodu'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 19.4323C16.1048 19.4323 19.4323 16.1048 19.4323 12C19.4323 7.89525 16.1048 4.56769 12 4.56769C7.89525 4.56769 4.56769 7.89525 4.56769 12C4.56769 16.1048 7.89525 19.4323 12 19.4323ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9904 17.5189 17.5189 21.9904 12 22ZM12 3.31004C7.17655 3.31004 3.26638 7.22022 3.26638 12.0437C3.26638 16.8671 7.17655 20.7773 12 20.7773C16.8234 20.7773 20.7336 16.8671 20.7336 12.0437C20.7336 9.72736 19.8135 7.50593 18.1756 5.86806C16.5377 4.23019 14.3163 3.31004 12 3.31004Z'
                fill='#BE1515'
              ></path>
              <path
                d='M14.2379 7.72931H15V8.55961H14.2379V14.8541H12.9715V14.0463C12.4908 14.6858 11.8107 15 10.9196 15C10.1106 15 9.43049 14.7195 8.85595 14.1473C8.28141 13.575 8 12.8682 8 12.0491C8 11.2188 8.28141 10.5231 8.85595 9.95091C9.43049 9.37868 10.1106 9.09818 10.9196 9.09818C11.8107 9.09818 12.4908 9.41234 12.9715 10.0407V8.55961H11.072V7.72931H12.9715V7H14.2379V7.72931ZM9.79397 13.3394C10.1457 13.676 10.5913 13.8443 11.1189 13.8443C11.6466 13.8443 12.0921 13.676 12.4439 13.3394C12.7956 12.9916 12.9715 12.5652 12.9715 12.0491C12.9715 11.533 12.7956 11.1066 12.4439 10.77C12.0921 10.4222 11.6466 10.2539 11.1189 10.2539C10.5913 10.2539 10.1457 10.4222 9.79397 10.77C9.44221 11.1066 9.26633 11.533 9.26633 12.0491C9.26633 12.5652 9.44221 12.9916 9.79397 13.3394Z'
                fill='white'
              ></path>
            </svg>

            <span>VND</span>
          </div>
          <span>0.00</span>
        </div>
      </div>
      <div className='divchonmangluoi'>
        <h4>Rút tiền bằng</h4>
        <div className='divinputmangluoi'>
          <input type='radio' checked />
          <img src='/images/nganhang.png' alt='' width={24} height={24} />
          <span>Ngân hàng</span>
        </div>
      </div>
      <a  href={isMobile ? '/caidatruttien' : '/thongtin?tab=Cài đặt rút tiền'}>
        <div
          style={{
            color: 'red',
            marginTop: '20px'
          }}
        >
          <h4>Thiết lập địa chỉ ví</h4>
        </div>
      </a>
      <div className='divchonnganhang'>
        <div className='divtienrutra'>
          <h4>Số tiền rút ra</h4>
          <span>Phí: 1$</span>
        </div>
        <div className='divinputnhapsotien'>
          <input type='text' placeholder='Nhập số tiền' />
          <span>VNĐ</span>
        </div>
        <div className='chonganhangfooter'>
          <span>1USDT = 25,500VNĐ</span>
          <span>~0VNĐ</span>
        </div>
      </div>

      <button className='btnruttien'>Thực hiện</button>
    </>
  )
}

export default VietNamRutTien
