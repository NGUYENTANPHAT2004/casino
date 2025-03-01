import { CucTele } from '../CucTele'

function BanCaLayout () {
  return (
    <div className='bestgame_container'>
      <CucTele />
      <div className='titlesection_container'>
        <p className='titlesection_name'>Bắn cá</p>
      </div>
      <div className='gridcolumn_container gridcolumn_col6 gridcolumn_sm'>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/cq9gaming.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>CQ9 Gaming</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BanCaLayout
