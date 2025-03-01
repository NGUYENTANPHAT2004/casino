function NoHuMB () {
  const games = [
    {
      img: '/images/pramaticplay.webp',
      name: 'PragmaticPlay'
    },
    {
      img: '/images/cq9gaming.webp',
      name: 'CQ9'
    },
    {
      img: '/images/microgaming.webp',
      name: 'MicroGaming'
    },
    {
      img: '/images/tcgaming.webp',
      name: 'TCGaming'
    },
    {
      img: '/images/afbgaming.webp',
      name: 'AFBGaming'
    }
    ,
    {
      img: '/images/jiligaming.webp',
      name: 'JiLiGaming'
    }
    ,
    {
      img: '/images/rich88.webp',
      name: 'Rich88'
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
                      <img src={`${game.img}`} alt='' width={600} height={90} />
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

export default NoHuMB
