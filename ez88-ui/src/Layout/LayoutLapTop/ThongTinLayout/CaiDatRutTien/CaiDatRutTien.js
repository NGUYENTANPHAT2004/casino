import { useState } from 'react'
import './CaiDatRutTien.scss'
import { NganHang } from './NganHang'
import { CaiDatVi } from './CaiDatVi'
function CaiDatRutTien () {
  const [inputmethod, setInputmethod] = useState(true)
  return (
    <div className='caidatruttien_container'>
      <div className='caidatruttien_header'>
        <h3>Chọn loại rút tiền</h3>
        <div className='divinputloairt_container'>
          <div className='divinputloairt'>
            <input
              type='radio'
              checked={inputmethod}
              onClick={() => setInputmethod(true)}
            />
            <label htmlFor=''>Ngân hàng</label>
          </div>
          <div className='divinputloairt'>
            <input
              type='radio'
              checked={!inputmethod}
              onClick={() => setInputmethod(false)}
            />
            <label htmlFor=''>Địa chỉ ví</label>
          </div>
        </div>
      </div>
      {inputmethod ? <NganHang /> : <CaiDatVi />}
    </div>
  )
}

export default CaiDatRutTien
