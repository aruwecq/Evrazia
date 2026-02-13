import { Trash2, Plus, Minus, ShoppingBag, CreditCard, ShieldCheck, ArrowRight, Truck } from 'lucide-react';

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Смарт-часы Pro Series", price: 12000, quantity: 1, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
    { id: 2, name: "Беспроводные наушники", price: 5500, quantity: 2, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-4 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Заголовок - Ортого жылдырылды жана түсү өзгөрдү */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-4">
<h1 className="text-4xl font-black text-blue-950 tracking-tight italic uppercase">
  Корзина
</h1>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Список товаров */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="group relative flex flex-col sm:flex-row items-center justify-between p-5 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-500">
                <div className="flex items-center gap-6 w-full">
                  {/* Изображение с эффектом */}
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-50 w-28 h-28 flex-shrink-0 border border-slate-50">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Premium</span>
                      <p className="text-slate-400 text-xs">Арт: 00{item.id}42</p>
                    </div>
                    <p className="text-2xl font-black text-blue-700 mt-2 italic">{item.price.toLocaleString()} <span className="text-sm font-bold opacity-70">СОМ</span></p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto mt-6 sm:mt-0 px-2">
                  {/* Управление количеством - стильный дизайн */}
                  <div className="flex items-center bg-slate-50 rounded-2xl p-1.5 border border-slate-100 shadow-inner">
                    <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-90 text-slate-400"><Minus size={18} strokeWidth={3} /></button>
                    <span className="px-5 font-black text-lg text-slate-800">{item.quantity}</span>
                    <button className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-90 text-slate-400"><Plus size={18} strokeWidth={3} /></button>
                  </div>
                  
                  {/* Удаление */}
                  <button className="group/btn p-4 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all duration-300">
                    <Trash2 size={24} strokeWidth={2.5} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {/* Доп инфо */}
            <div className="flex items-center gap-6 p-6 border-2 border-dashed border-slate-200 rounded-[2rem] opacity-60">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <Truck size={20} /> Бесплатная доставка
                </div>
                <div className="h-4 w-[1px] bg-slate-300"></div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <ShieldCheck size={20} /> Гарантия 12 месяцев
                </div>
            </div>
          </div>

          {/* Панель оформления заказа */}
          <div className="relative">
            <div className="sticky top-10 bg-white p-8 rounded-[3rem] shadow-2xl shadow-blue-100 border border-blue-50 overflow-hidden">
              {/* Декоративный элемент фона */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
              
              <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center justify-between relative">
                Итого
                <span className="text-xs bg-slate-100 text-slate-400 px-3 py-1 rounded-full uppercase tracking-tighter font-bold">Счет №442</span>
              </h2>
              
              <div className="space-y-5 mb-10 relative">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Товары ({cartItems.length})</span>
                  <span className="text-slate-800 font-bold">23 000 сом</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Скидка</span>
                  <span className="text-green-500 font-bold">- 0 сом</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Доставка</span>
                  <span className="text-blue-600 font-bold italic uppercase text-xs">Free</span>
                </div>
                
                <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">К оплате</span>
                  <div className="text-right">
                    <p className="text-4xl font-black text-blue-700 leading-none italic">23 000</p>
                    <p className="text-sm font-bold text-blue-400 uppercase mt-1 tracking-tighter">кыргыз сом</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 relative">
                <button className="w-full bg-blue-600 hover:bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                  <CreditCard size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="uppercase tracking-widest text-sm">Оформить заказ</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <div className="flex items-center justify-center gap-2 py-4">
                    <ShieldCheck size={16} className="text-green-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Безопасная оплата SSL</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}