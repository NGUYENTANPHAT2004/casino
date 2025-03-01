import { CucTele } from '../CucTele'

function DaGaLayout () {
  return (
    <div className='bestgame_container'>
      <CucTele />
      <div className='titlesection_container'>
        <p className='titlesection_name'>Đá gà</p>
      </div>
      <div className='gridcolumn_container gridcolumn_col6 gridcolumn_sm'>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/cockfight.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>CockFight</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaGaLayout
