import { useState } from 'react'
import './QuyTacMoiLayout.scss'

function QuyTacMoiLayout () {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleSection = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const sections = [
    {
      id: '01',
      title: '6 cấp độ',
      colorClass: 'divvien',
      content: `
    <p>Xác định rằng quá trình mời bạn được chia thành 6 cấp độ như sau:</p>
    <ul>
      <li>Nếu A mời B, thì B là bạn cấp 1 của A.</li>
      <li>Nếu B mời C, thì C là bạn cấp 1 của B và cũng là bạn cấp 2 của A.</li>
      <li>Khi C mời D, thì D thuộc cấp 1 của C, cấp 2 của B, và cấp 3 của A.</li>
      <li>Nếu D mời E, thì E là bạn cấp 1 của D, cấp 2 của C, cấp 3 của B, và cấp 4 của A.</li>
      <li>Khi E mời F, thì F thuộc cấp 1 của E, cấp 2 của D, cấp 3 của C, cấp 4 của B, và cấp 5 của A.</li>
      <li>Nếu F mời G, thì G thuộc cấp 1 của F, cấp 2 của E, cấp 3 của D, cấp 4 của C, cấp 5 của B, và cấp 6 của A.</li>
    </ul>
  `
    },
    {
      id: '02',
      title: 'Liên kết',
      colorClass: 'divvien2',
      content:
        'Để khuyến khích một người bạn đăng ký, bạn cần chuyển liên kết được cung cấp bởi người mời hoặc nhập mã mời từ người mời theo cách thủ công. Thủ tục này sẽ giúp bạn trở thành bạn cấp 1 của người mới.'
    },
    {
      id: '03',
      title: 'Mã giới thiệu',
      colorClass: 'divvien3',
      content:
        'Nếu người được mời sử dụng ID giới thiệu của người mời để đăng ký và hoàn thành việc nạp tiền, hoa hồng sẽ được áp dụng ngay lập tức.'
    },
    {
      id: '04',
      title: 'Tỷ lệ hoàn tiền',
      colorClass: 'divvien4',
      content: `
    <p>Tỷ lệ hoàn trả được hưởng sẽ khác nhau tùy theo mức hoàn trả, được tính bằng đơn vị tiền tệ USDT.</p>
    <table className='rebate-table'>
      <thead>
        <tr>
          <th>Cấp độ</th>
          <th>Doanh thu</th>
          <th>Hoa hồng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Level 1</td>
          <td>0.1%</td>
          <td>20.000$</td>
        </tr>
        <tr>
          <td>Level 2</td>
          <td>0.2%</td>
          <td>60.000$</td>
        </tr>
        <tr>
          <td>Level 3</td>
          <td>0.3%</td>
          <td>200.000$</td>
        </tr>
        <tr>
          <td>Level 4</td>
          <td>0.4%</td>
          <td>1.000.000$</td>
        </tr>
        <tr>
          <td>Level 5</td>
          <td>0.5%</td>
          <td>3.000.000$</td>
        </tr>
        <tr>
          <td>Level 6</td>
          <td>0.6%</td>
          <td>10.000.000$</td>
        </tr>
      </tbody>
    </table>
  `
    },
    {
      id: '05',
      title: 'Top bảng xếp hạng',
      colorClass: 'divvien5',
      content:
        'Fnk88 sẽ ngẫu nhiên trao thưởng một khoản tiền thưởng đặc biệt cho những thành viên đứng đầu trong Bảng xếp hạng hoa hồng.'
    },
    {
      id: '06',
      title: 'Fnk88',
      colorClass: 'divvien6',
      content: 'Quyền giải thích cuối cùng về hoạt động này thuộc về Fnk88.'
    }
  ]

  return (
    <div className='divtongquan_container'>
      <div className='tongquan_header'>
        <div className='tongquan_title'>
          <img src='/images/hoahongquytac.png' alt='' width={24} height={24} />
          <div>Quy tắc mời</div>
        </div>
        <div className='tongquan_descreption'>
          Note: Kế hoạch hợp tác quảng bá mang lại hiệu quả bền vững trong thời
          gian dài.
        </div>
      </div>

      <div className='quytac_body'>
        {sections.map((section, index) => (
          <div key={section.id} className='divlevel'>
            {/* Tiêu đề và nút bấm */}
            <div className='divlevel1' onClick={() => toggleSection(index)}>
              <div className='divlevel2'>
                <div className={section.colorClass}></div>
                <span>{section.id}</span>
                <span>{section.title}</span>
              </div>
              <div className='divlevel3'>
                <svg
                  viewBox='64 64 896 896'
                  focusable='false'
                  data-icon='down'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                  className={openIndex === index ? 'rotate-down' : ''}
                >
                  <path d='M884 256h-75c-5.1 0-10.1 2-13.8 5.7L512 544 228.8 261.7c-3.7-3.7-8.7-5.7-13.8-5.7H140c-6.6 0-10.1 7.9-5.3 12.6L490.7 628c6.4 6.3 16.8 6.3 23.2 0L889.3 268.6c4.8-4.7 1.3-12.6-5.3-12.6z'></path>
                </svg>
              </div>
            </div>

            {/* Nội dung xổ xuống */}
            {openIndex === index && (
              <div
                className='divcontent'
                dangerouslySetInnerHTML={{ __html: section.content }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuyTacMoiLayout
