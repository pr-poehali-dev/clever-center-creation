import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Users, Clock, BookText, Calculator, Lightbulb } from "lucide-react";
import CTASection from "@/components/CTASection";

const ProgramCard = ({ 
  title, 
  description, 
  icon, 
  age, 
  duration,
  sessions,
  price,
  color = "blue"
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  age: string; 
  duration: string;
  sessions: string;
  price: string;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
}) => {
  const colorClasses = {
    blue: "border-clever-blue hover:border-clever-blue/80 hover:shadow-clever-blue/10",
    green: "border-clever-green hover:border-clever-green/80 hover:shadow-clever-green/10",
    yellow: "border-clever-yellow hover:border-clever-yellow/80 hover:shadow-clever-yellow/10",
    red: "border-clever-red hover:border-clever-red/80 hover:shadow-clever-red/10",
    purple: "border-clever-purple hover:border-clever-purple/80 hover:shadow-clever-purple/10",
  };

  return (
    <Card className={`border-2 transition-all duration-300 hover:shadow-lg ${colorClasses[color]}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className={`text-white p-2 rounded-full bg-clever-${color}`}>
            {icon}
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>Возраст: {age}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>Длительность занятия: {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <span>Количество занятий: {sessions}</span>
          </div>
          <div className="mt-2 font-medium text-lg">
            Стоимость: {price}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Записаться</Button>
      </CardFooter>
    </Card>
  );
};

const Programs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Образовательные программы</h1>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Образовательный центр "Clever" разработал уникальные программы для всестороннего развития детей
              и эффективной подготовки к школьной жизни.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProgramCard 
                title="Комплексная подготовка к школе" 
                description="Эффективная методика, охватывающая все ключевые аспекты развития: чтение, письмо, счёт и логика."
                icon={<BookOpen className="h-5 w-5" />}
                age="5-7 лет"
                duration="45 минут"
                sessions="24 занятия (2 раза в неделю)"
                price="8 000 ₽/месяц"
                color="blue"
              />
              
              <ProgramCard 
                title="Развитие речи и общения" 
                description="Профессиональная методика по обогащению словарного запаса, развитию речи и навыков коммуникации."
                icon={<Users className="h-5 w-5" />}
                age="4-6 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 000 ₽/месяц"
                color="green"
              />
              
              <ProgramCard 
                title="Развитие логики и мышления" 
                description="Интерактивный курс для развития интеллекта, внимания, памяти и творческого мышления."
                icon={<Brain className="h-5 w-5" />}
                age="5-7 лет"
                duration="45 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 500 ₽/месяц"
                color="yellow"
              />
              
              <ProgramCard 
                title="Быстрое чтение" 
                description="Авторская методика, которая научит вашего ребенка читать быстро, понимая и запоминая прочитанное."
                icon={<BookText className="h-5 w-5" />}
                age="4-7 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 500 ₽/месяц"
                color="red"
              />
              
              <ProgramCard 
                title="Занимательная математика" 
                description="Увлекательный курс математики с игровыми элементами для формирования прочных основ счета и логики."
                icon={<Calculator className="h-5 w-5" />}
                age="5-7 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 000 ₽/месяц"
                color="purple"
              />
              
              <ProgramCard 
                title="Креативное развитие" 
                description="Уникальный курс, совмещающий творчество, познание окружающего мира и развитие социальных навыков."
                icon={<Lightbulb className="h-5 w-5" />}
                age="4-6 лет"
                duration="45 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 000 ₽/месяц"
                color="green"
              />
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-background">
          <div className="container">
            <h2 className="text-2xl font-bold mb-6">Форматы обучения</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Групповые занятия</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Небольшие группы до 8 детей</li>
                  <li>Развитие коммуникативных навыков и социализации</li>
                  <li>Выгодные тарифы</li>
                  <li>Продолжительность: 45 минут</li>
                  <li>Расписание на выбор</li>
                </ul>
                <div className="mt-6">
                  <Button>Записаться в группу</Button>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Индивидуальные занятия</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>100% внимания педагога</li>
                  <li>Адаптация темпа под ребенка</li>
                  <li>Персонализированный подход</li>
                  <li>Продолжительность: 40 минут</li>
                  <li>Гибкое расписание</li>
                </ul>
                <div className="mt-6">
                  <Button>Записаться на персональное занятие</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;