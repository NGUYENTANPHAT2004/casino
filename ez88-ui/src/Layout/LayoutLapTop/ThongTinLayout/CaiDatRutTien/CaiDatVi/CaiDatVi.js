function CaiDatVi () {
  return (
    <div className='nganhang_container'>

      <div className='nganhang_body'>
        <label htmlFor=''>Địa chỉ ví</label>
        <div className='divinputnhapsotien'>
          <input type='text' placeholder='Nhập địa chỉ' />
        </div>
      </div>

      <div className='nganhang_body'>
        <p>
          Xin lưu ý rằng thông tin thanh toán sẽ chỉ được ghi lại một lần và
          không thể chỉnh sửa. Vui lòng kiểm tra cẩn thận trước khi lưu.
        </p>
      </div>
      <div className='nganhang_body'>
        <button class='btnruttien'>Thực hiện</button>
      </div>
    </div>
  )
}

export default CaiDatVi
