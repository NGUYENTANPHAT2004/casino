import './TheThaoMB.scss'
function TheThaoMB () {
  const games = [

    {
      img: '/images/bti2.jpg',
      name: 'BTI Sports'
    },
        {
      img: '/images/saba2.jpg',
      name: 'SABA Sports'
    },
        {
      img: '/images/afb2.jpg',
      name: 'AFB Sports'
    }
  ]
  return (
    <div className='thethaomenumb_container'>
      <div className='mainlivethethao_container'>
        <div className='mainlivethethao'>
          <div>
            <div className='mainlivethethao_list'>
              <div className='GridColumn_container__QbIKO GridColumn_col_5__H4lCj GridColumn_sm__eo_P2 GridColumn_px_0__CR9zN Grid_thethao'>
                {games.map((game, index) => (
                  <div className='GotoGame_container__azuAM' key={index}>
                    <div className='CardGame_container__NneKf'>
                      <img src={`${game.img}`} alt='' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheThaoMB
