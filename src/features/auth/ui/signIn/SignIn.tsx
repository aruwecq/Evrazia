import React, { useState } from 'react'; 
import { Eye, EyeOff } from 'lucide-react'; 
import bort from '../../../../assets/B3-1.jpg'
import { Link } from "react-router-dom";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full">
      <div
        className="mb-12 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative min-h-[650px] flex items-start justify-center pt-16"
        style={{
          backgroundImage: `url(${bort})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >     
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[6px]"></div>
        <div className="relative z-10 bg-black/40 backdrop-blur-[15px] p-6 rounded-[2rem] w-full max-w-[420px] border-2 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)]">  
          <h2 className="text-white text-[24px] font-black text-center mb-4 tracking-[0.05em] uppercase drop-shadow-md">
            Регистрация
          </h2>
          <form className="flex flex-col gap-3" autoComplete="off">
            
            <input
              type="text"
              name="user_full_name"
              placeholder="ФИО"
              defaultValue=""
              autoComplete="none"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              defaultValue=""
              autoComplete="new-email"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Пароль"
                defaultValue=""
                autoComplete="new-password"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="Подтвердите пароль"
                defaultValue=""
                autoComplete="new-password"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link to="/forgot-password" 
                    className="text-[10px] text-gray-400 hover:text-sky-400 transition-colors">
                Забыли пароль?
              </Link>
            </div>

            <button 
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-black py-2.5 rounded-xl uppercase transition-all active:scale-95"
            >
              Регистрация
            </button>
          </form>

          <div className="text-center mt-5 text-sm font-bold text-gray-200">
            Уже есть аккаунт?{" "}
            <Link to="/signup" className="text-sky-400 hover:underline">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
