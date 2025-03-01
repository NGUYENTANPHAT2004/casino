import { CucTele } from '../CucTele'

function CasinoLayout () {
  return (
    <div className='bestgame_container'>
      <CucTele />
      <div className='titlesection_container'>
        <p className='titlesection_name'>Casino</p>
      </div>
      <div className='gridcolumn_container gridcolumn_col6 gridcolumn_sm'>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/aesexy.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>AE Sexy</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/agassia.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>AG Asia</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/evolution.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>Evolution</div>
          </div>
        </div>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/sagaming.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>SA Gaming</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/wmcasino.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>WM Casino</div>
          </div>
        </div>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/dreamgaming.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>Dream Gaming</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasinoLayout
