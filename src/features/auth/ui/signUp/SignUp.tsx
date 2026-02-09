import React, { useState } from 'react'; 
import { Eye, EyeOff } from 'lucide-react'; 
import { Link } from "react-router-dom";
import bort from '../../../../assets/B3-1.jpg';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <div
        className="mb-12 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative min-h-[650px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bort})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.85)"
        }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[4px]"></div>
        <div className="relative z-10 bg-black/40 backdrop-blur-[12px] p-6 rounded-[2rem] w-full max-w-[420px] border-2 border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.5)] mx-4">
          
          <h2 className="text-white text-[24px] font-black text-center mb-5 tracking-[0.05em] uppercase drop-shadow-md">
            Войти
          </h2>

          <form className="flex flex-col gap-3" autoComplete="off">
            
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-2.5 text-white font-bold placeholder:text-gray-400 focus:outline-none focus:border-sky-400 transition-all duration-300 text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex justify-end px-1">
              <Link
                to="/forgot-password"
                className="text-gray-300 hover:text-sky-400 text-xs font-bold transition-colors hover:underline underline-offset-4"
              >
                Забыли пароль?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-black text-lg py-2.5 rounded-xl mt-1 transition-all duration-300 active:scale-[0.98] uppercase tracking-wider"
            >
              Войти
            </button>
          </form>

          <div className="text-center mt-5 text-sm font-bold text-gray-200">
            Нет аккаунта?{" "}
            <Link
              to="/signin"
              className="text-sky-400 hover:text-sky-300 hover:underline underline-offset-4 font-black pl-2"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
