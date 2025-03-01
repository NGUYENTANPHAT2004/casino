/* eslint-disable jsx-a11y/anchor-is-valid */
import './TheThaoLayout.scss'
import { CucTele } from '../CucTele'

function TheThaoLayout () {
  return (
    <div className='bestgame_container'>
      <CucTele />

      <div className='titlesection_container'>
        <p className='titlesection_name'>Thể thao</p>
      </div>
      <div className='gridcolumn_container gridcolumn_col6 gridcolumn_sm'>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/saba.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>SABA Sports</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/bti.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>AFB Sports</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/panda.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>BTI Sports</div>
          </div>
        </div>
        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/afb.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>PANDA Sports</div>
          </div>
        </div>

        <div className='gotogame_container'>
          <div className='cardgame_container'>
            <img
              width={200}
              height={200}
              src='/images/cockfight.webp'
              alt=''
              className='cardgame_img'
            />
            <div className='textthethao'>COCKFIGHT</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheThaoLayout
