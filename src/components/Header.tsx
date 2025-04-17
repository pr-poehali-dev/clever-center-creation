import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-clever-blue" />
          <span className="font-bold text-2xl">
            <span className="text-clever-blue">Clever</span>
          </span>
        </Link>
        
        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-clever-blue transition-colors font-medium">
            Главная
          </Link>
          <Link to="/programs" className="text-foreground hover:text-clever-blue transition-colors font-medium">
            Программы
          </Link>
          <Link to="/teachers" className="text-foreground hover:text-clever-blue transition-colors font-medium">
            Преподаватели
          </Link>
          <Link to="/reviews" className="text-foreground hover:text-clever-blue transition-colors font-medium">
            Отзывы
          </Link>
          <Link to="/contacts" className="text-foreground hover:text-clever-blue transition-colors font-medium">
            Контакты
          </Link>
          <Button>Записаться</Button>
        </nav>
      </div>
      
      {/* Мобильное меню (развёрнутое) */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-clever-blue transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/programs" 
              className="text-foreground hover:text-clever-blue transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Программы
            </Link>
            <Link 
              to="/teachers" 
              className="text-foreground hover:text-clever-blue transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Преподаватели
            </Link>
            <Link 
              to="/reviews" 
              className="text-foreground hover:text-clever-blue transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link 
              to="/contacts" 
              className="text-foreground hover:text-clever-blue transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button className="w-full">Записаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;