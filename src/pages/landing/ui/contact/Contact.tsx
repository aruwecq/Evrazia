import fr1 from '../../img/icons8-yandex-zen-100 2.svg';
import fr2 from '../../img/icons8-вконтакте-144 2.svg';
import fr3 from '../../img/icons8-ютуб-100 2.svg';

export function Contact() {
  const contactData = [
    {
      title: 'Администрация',
      phones: ['+7 (3513)79-09-79 (код 1)', '+7 (922) 7-288-288'],
      mail: 'mail@euroasia.su',
    },
    {
      title: 'Заместитель управляющего по организационным вопросам',
      phones: ['+7(904)979-73-42'],
      mail: 'pro@euroasia.su',
    },
    {
      title: 'Бухгалтерия',
      phones: ['+7 (3513)79-09-79 (код 3)'],
      mail: 'buh@euroasia.su',
    },
  ];

  const scheduleData = [
    { day: 'Понедельник', t1: '09.00 - 18.00', t2: '09.00 - 18.00', t3: '09.00 - 18.00', t4: '10.00 - 17.00' },
    { day: 'Вторник', t1: '09.00 - 18.00', t2: '09.00 - 18.00', t3: '09.00 - 18.00', t4: '09.00 - 18.00' },
    { day: 'Среда', t1: '09.00 - 18.00', t2: '09.00 - 18.00', t3: '09.00 - 18.00', t4: '09.00 - 18.00' },
  ];

  const cafeSchedule = [
    { day: 'Понедельник', cafe: '09.00 - 19.00', grill: '09.00 - 20.00' },
    { day: 'Вторник', cafe: '09.00 - 19.00', grill: '09.00 - 20.00' },
    { day: 'Среда', cafe: '09.00 - 19.00', grill: '09.00 - 20.00' },
  ];

  const summerSchedule = [
    { day: 'Понедельник', cafe: '10.00 - 20.00' },
    { day: 'Вторник', cafe: '10.00 - 20.00' },
    { day: 'Среда', cafe: '10.00 - 20.00' },
  ];

  const tableHeaderStyle = { padding: '15px', fontWeight: 'normal', color: '#888', fontSize: '13px' };
  const cellStyle = { padding: '15px', color: '#666' };
  const dayCellStyle = { padding: '15px', display: 'flex', alignItems: 'center', gap: '15px', fontWeight: 'bold' };
  const circleStyle = { width: '40px', height: '40px', backgroundColor: '#add8e6', borderRadius: '50%' };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px 10%', color: '#333' }}>
      
      <h1 style={{ color: '#008cc9', fontSize: '36px', fontWeight: 'bold', textAlign: 'left', margin: '0 0 40px 0' }}>Контакты</h1>

      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#00aae4', fontSize: '14px', marginBottom: '10px' }}>Фактический адрес:</p>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '10px' }}>Челябинская область, г. Куса, ул. <br /> Олимпийская, д.75, стр. 1</h2>
        <p style={{ color: '#777', fontSize: '16px', marginBottom: '50px' }}>Координаты: N55°23.088' E59°24.058'</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {contactData.map((item, i) => (
            <div key={i} style={{ flex: '1', minWidth: '250px' }}>
              <div style={{ width: '45px', height: '45px', backgroundColor: '#add8e6', borderRadius: '50%', border: '4px solid #8fd1f5', margin: '0 auto 15px' }}></div>
              <h4 style={{ fontSize: '18px', marginBottom: '10px', height: '50px' }}>{item.title}</h4>
              {item.phones.map((p, idx) => (<p key={idx} style={{ fontSize: '14px', margin: '2px 0', color: '#666' }}>{p}</p>))}
              <p style={{ fontSize: '14px', marginTop: '10px' }}>E-mail: <a href={`mailto:${item.mail}`} style={{ color: '#008cc9', textDecoration: 'none', borderBottom: '1px solid #008cc9' }}>{item.mail}</a></p>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '14px', color: '#888', marginBottom: '40px' }}>
          <p style={{ color: '#00aae4', fontWeight: 'bold' }}>Реквизиты:</p>
          <p style={{ fontSize: '18px', color: '#555', margin: '10px 0' }}>ООО "Евразия Сервис"</p>
          <p>ИНН/ОГРН 7404060424/1127404002098 Юридический адрес: Челябинская область, <br /> г. Куса, ул. Олимпийская, д.75, стр. 1</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '80px' }}>
          {[fr2, fr3, fr1].map((icon, i) => (
            <div key={i} style={{ width: '50px', height: '50px', backgroundColor: '#008cc9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <img src={icon} alt="icon" style={{ width: '25px' }} />
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '60px 0' }} />
      <h1 style={{ color: '#008cc9', fontSize: '36px', fontWeight: 'bold', textAlign: 'left', margin: '0 0 30px 0' }}>Схема проезда</h1>
      <p style={{ color: '#777', lineHeight: '1.6', fontSize: '15px', textAlign: 'justify', marginBottom: '40px' }}>В наш современный и цифровой век многие пользуются навигаторами...</p>
      <div style={{ width: '100%', height: '450px', borderRadius: '12px', overflow: 'hidden', marginBottom: '60px' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.2!2d59.4!3d55.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDIzJzA1LjMiTiA1OcKwMjQnMDMuNSJF!5e0!3m2!1sru!2skg!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '60px 0' }} />
      <h1 style={{ color: '#008cc9', fontSize: '36px', fontWeight: 'bold', textAlign: 'left', margin: '0 0 20px 0' }}>График работы</h1>
      <h3 style={{ color: '#008cc9', fontSize: '18px', textAlign: 'left', marginBottom: '30px' }}>График работы горнолыжных трасс и службы проката снаряжения</h3>
      <div style={{ overflowX: 'auto', marginBottom: '60px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>День недели</th>
              <th style={tableHeaderStyle}>График работы трасс без освещения</th>
              <th style={tableHeaderStyle}>График работы трассы с освещением №1 и №2</th>
              <th style={tableHeaderStyle}>График работы учебного склона</th>
              <th style={tableHeaderStyle}>График работы службы проката и сервиса снаряжения</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fbfd' : 'white' }}>
                <td style={dayCellStyle}><div style={circleStyle}></div>{row.day}</td>
                <td style={cellStyle}>{row.t1}</td><td style={cellStyle}>{row.t2}</td><td style={cellStyle}>{row.t3}</td><td style={cellStyle}>{row.t4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '400px' }}>
          <h3 style={{ color: '#008cc9', fontSize: '18px', marginBottom: '25px' }}>График работы кафе и гриль-бара:</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>День недели</th>
                <th style={tableHeaderStyle}>Время работы кафе</th>
                <th style={tableHeaderStyle}>Время работы гриль-бара</th>
              </tr>
            </thead>
            <tbody>
              {cafeSchedule.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fbfd' : 'white' }}>
                  <td style={dayCellStyle}><div style={circleStyle}></div>{row.day}</td>
                  <td style={cellStyle}>{row.cafe}</td>
                  <td style={cellStyle}>{row.grill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ flex: 1, minWidth: '400px' }}>
          <h3 style={{ color: '#8db31a', fontSize: '18px', marginBottom: '25px' }}>График работы кафе и сервисного здания в летний период</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>День недели</th>
                <th style={tableHeaderStyle}>Время работы кафе</th>
              </tr>
            </thead>
            <tbody>
              {summerSchedule.map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fbfd' : 'white' }}>
                  <td style={dayCellStyle}><div style={circleStyle}></div>{row.day}</td>
                  <td style={cellStyle}>{row.cafe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}