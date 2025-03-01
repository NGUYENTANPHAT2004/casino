function CasinoMB () {
  const games = [
    {
      img: '/images/aesexy.webp',
      name: 'AE Sexy'
    },
    {
      img: '/images/agassia.webp',
      name: 'AG Asia'
    },
    {
      img: '/images/evolution.webp',
      name: 'Evolution'
    },
    {
      img: '/images/sagaming.webp',
      name: 'WM Casino'
    },
    {
      img: '/images/dreamgaming.webp',
      name: 'Dream Gaming'
    }
  ]
  return (
    <div className='thethaomenumb_container'>
      <div className='mainlivethethao_container'>
        <div className='mainlivethethao'>
          <div>
            <div className='mainlivethethao_list'>
              <div className='GridColumn_container__QbIKO GridColumn_col_5__H4lCj GridColumn_sm__eo_P2 GridColumn_px_0__CR9zN'>
                {games.map((game, index) => (
                  <div className='GotoGame_container__azuAM' key={index}>
                    <div className='CardGame_container__NneKf'>
                      <img src={`${game.img}`} alt='' width={600} height={100} />
                    </div>
                    <div className='texthethaomb'>{game.name}</div>
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

export default CasinoMB
