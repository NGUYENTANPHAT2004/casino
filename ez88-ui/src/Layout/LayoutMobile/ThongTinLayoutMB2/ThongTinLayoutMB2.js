import { useSearchParams } from 'react-router-dom'
import { TongQuatTien } from '../TongQuatTien'

function ThongTinLayoutMB2 () {
  const [searchParams] = useSearchParams()

  const tabFromUrl = searchParams.get('tab') || 'Thông tin cá nhân'

  return (
    <div>
      {['Nạp tiền', 'Rút tiền', 'Ví tiền'].includes(tabFromUrl) && (
        <TongQuatTien name={tabFromUrl} />
      )}
    </div>
  )
}

export default ThongTinLayoutMB2
