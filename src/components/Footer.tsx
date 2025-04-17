import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="font-bold text-2xl">Clever</span>
            </div>
            <p className="mb-4">
              Детский центр "Clever" помогает дошкольникам приобрести необходимые навыки и знания для успешного старта в школе.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-foreground">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-foreground">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-primary-foreground">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.35-1.77-1.22c-.24.6-.69 1.29-1.27 1.29-.58 0-1.04-.7-1.27-1.29L8 16.35V7.65l5.86 3.91c.37-.57.89-.93 1.5-.93s1.13.36 1.5.93l3.15-2.1v7.89z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:underline">Главная</Link>
              <Link to="/programs" className="hover:underline">Программы</Link>
              <Link to="/teachers" className="hover:underline">Преподаватели</Link>
              <Link to="/reviews" className="hover:underline">Отзывы</Link>
              <Link to="/contacts" className="hover:underline">Контакты</Link>
              <Link to="/about" className="hover:underline">О нас</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>ул. Школьная, 15, г. Москва</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@clever-center.ru" className="hover:underline">info@clever-center.ru</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Вс: выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-sm text-center">
          <p>© {new Date().getFullYear()} Детский центр "Clever". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;