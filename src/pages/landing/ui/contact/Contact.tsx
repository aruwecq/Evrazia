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

  const tableHeaderStyle = '';

  return (
    <div className="font-sans px-4 sm:px-6 lg:px-8 py-10 text-gray-800">

      <h1 className="text-2xl sm:text-3xl md:text-4xl text-sky-600 font-bold text-left mb-6">Контакты</h1>

      <div className="text-center">
        <p className="text-sky-400 text-sm mb-2">Фактический адрес:</p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Челябинская область, г. Куса, ул. <br /> Олимпийская, д.75, стр. 1</h2>
        <p className="text-gray-600 text-base mb-8">Координаты: N55°23.088' E59°24.058'</p>

        <div className="flex justify-between gap-6 flex-wrap mb-12">
          {contactData.map((item, i) => (
            <div key={i} className="flex-1 min-w-[220px] max-w-[32rem]">
              <div className="w-11 h-11 bg-sky-200 rounded-full border-4 border-sky-300 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2 min-h-[42px]">{item.title}</h4>
              {item.phones.map((p, idx) => (<p key={idx} className="text-sm mb-1 text-gray-600">{p}</p>))}
              <p className="text-sm mt-2">E-mail: <a href={`mailto:${item.mail}`} className="text-sky-600 border-b border-sky-600">{item.mail}</a></p>
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-500 mb-8">
          <p className="text-sky-400 font-semibold">Реквизиты:</p>
          <p className="text-lg text-gray-700 my-2">ООО \"Евразия Сервис\"</p>
          <p className="text-gray-600">ИНН/ОГРН 7404060424/1127404002098 Юридический адрес: Челябинская область, <br /> г. Куса, ул. Олимпийская, д.75, стр. 1</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {[fr2, fr3, fr1].map((icon, i) => (
            <div key={i} className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center cursor-pointer">
              <img src={icon} alt="icon" className="w-6" />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-100 my-8" />
      <h2 className="text-2xl text-sky-600 font-bold mb-4">Схема проезда</h2>
      <p className="text-gray-600 leading-relaxed mb-6">В наш современный и цифровой век многие пользуются навигаторами...</p>
      <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.2!2d59.4!3d55.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDIzJzA1LjMiTiA1OcKwMjQnMDMuNSJF!5e0!3m2!1sru!2skg!4v1" width="100%" height="100%" className="border-0" allowFullScreen loading="lazy"></iframe>
      </div>

      <hr className="border-t border-gray-100 my-8" />
      <h2 className="text-2xl text-sky-600 font-bold mb-2">График работы</h2>
      <h3 className="text-sky-600 text-base mb-4">График работы горнолыжных трасс и службы проката снаряжения</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-100 table-auto">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm text-gray-500">День недели</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500">График работы трасс без освещения</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500">График работы трассы с освещением №1 и №2</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500">График работы учебного склона</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500">График работы службы проката и сервиса снаряжения</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-50">
            {scheduleData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-sky-50' : ''}>
                <td className="px-4 py-4 flex items-center gap-4 font-semibold"><div className="w-10 h-10 bg-sky-200 rounded-full border-4 border-sky-300" />{row.day}</td>
                <td className="px-4 py-4 text-gray-600">{row.t1}</td>
                <td className="px-4 py-4 text-gray-600">{row.t2}</td>
                <td className="px-4 py-4 text-gray-600">{row.t3}</td>
                <td className="px-4 py-4 text-gray-600">{row.t4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <h3 className="text-sky-600 text-lg mb-4">График работы кафе и гриль-бара:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm text-gray-500">День недели</th>
                  <th className="px-4 py-3 text-left text-sm text-gray-500">Время работы кафе</th>
                  <th className="px-4 py-3 text-left text-sm text-gray-500">Время работы гриль-бара</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cafeSchedule.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-sky-50' : ''}>
                    <td className="px-4 py-4 flex items-center gap-4 font-semibold"><div className="w-10 h-10 bg-sky-200 rounded-full border-4 border-sky-300" />{row.day}</td>
                    <td className="px-4 py-4 text-gray-600">{row.cafe}</td>
                    <td className="px-4 py-4 text-gray-600">{row.grill}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-emerald-600 text-lg mb-4">График работы кафе и сервисного здания в летний период</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm text-gray-500">День недели</th>
                  <th className="px-4 py-3 text-left text-sm text-gray-500">Время работы кафе</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {summerSchedule.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-sky-50' : ''}>
                    <td className="px-4 py-4 flex items-center gap-4 font-semibold"><div className="w-10 h-10 bg-sky-200 rounded-full border-4 border-sky-300" />{row.day}</td>
                    <td className="px-4 py-4 text-gray-600">{row.cafe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
