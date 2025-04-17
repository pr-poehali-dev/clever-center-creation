import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted/30" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовы записать ребенка на занятия или у вас есть вопросы? Заполните форму, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Форма обратной связи</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Напишите ваше сообщение..." rows={4} />
              </div>
              
              <Button type="submit" className="w-full">Отправить</Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <span>ул. Школьная, 15, г. Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@clever-center.ru" className="hover:underline">info@clever-center.ru</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 text-primary" />
                  <div>
                    <p>Пн-Пт: 9:00 - 19:00</p>
                    <p>Сб: 10:00 - 16:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Как нас найти</h3>
              <div className="bg-muted h-64 rounded-lg">
                {/* Здесь можно добавить карту или другую информацию о местоположении */}
                <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg border">
                  <p className="text-muted-foreground">Карта местоположения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;