import Logo from '../../img/Group.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LOGO → HOME */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Evrasiya logo"
              className="h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex gap-16 font-medium text-gray-700">
          <Link to="/resorts" className="hover:text-blue-600 transition">
            Курорт
          </Link>
          <Link to="/accommodation" className="hover:text-blue-600 transition">
            Проживание
          </Link>
          <Link to="/events" className="hover:text-blue-600 transition">
            Афиша
          </Link>
          <Link to="/business" className="hover:text-blue-600 transition">
            Мероприатие
          </Link>
          <Link to="/buy-online" className="hover:text-blue-600 transition">
            Купить онлайн
          </Link>
          <Link to="/signin" className="hover:text-blue-600 transition">
            Регистрация
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;
