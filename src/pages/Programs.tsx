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
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Программы обучения</h1>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Детский центр "Clever" предлагает широкий выбор программ подготовки к школе, 
              которые помогут вашему ребенку приобрести необходимые знания и навыки.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProgramCard 
                title="Полная подготовка к школе" 
                description="Комплексная программа, включающая обучение чтению, письму, математике и развитие логики."
                icon={<BookOpen className="h-5 w-5" />}
                age="5-7 лет"
                duration="45 минут"
                sessions="24 занятия (2 раза в неделю)"
                price="8 000 ₽/месяц"
                color="blue"
              />
              
              <ProgramCard 
                title="Развитие речи" 
                description="Программа, направленная на развитие речи, пополнение словарного запаса и формирование навыков общения."
                icon={<Users className="h-5 w-5" />}
                age="4-6 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 000 ₽/месяц"
                color="green"
              />
              
              <ProgramCard 
                title="Логика и мышление" 
                description="Развитие логического мышления, внимания, памяти и пространственного воображения."
                icon={<Brain className="h-5 w-5" />}
                age="5-7 лет"
                duration="45 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 500 ₽/месяц"
                color="yellow"
              />
              
              <ProgramCard 
                title="Обучение чтению" 
                description="Специализированная программа для обучения ребенка навыкам чтения с использованием современных методик."
                icon={<BookText className="h-5 w-5" />}
                age="4-7 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 500 ₽/месяц"
                color="red"
              />
              
              <ProgramCard 
                title="Математика для дошкольников" 
                description="Изучение основ математики, счета, геометрических фигур и решения простых задач."
                icon={<Calculator className="h-5 w-5" />}
                age="5-7 лет"
                duration="40 минут"
                sessions="16 занятий (1-2 раза в неделю)"
                price="6 000 ₽/месяц"
                color="purple"
              />
              
              <ProgramCard 
                title="Общее развитие" 
                description="Программа для всестороннего развития ребенка, включающая элементы творчества, познания мира и социализации."
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
            <h2 className="text-2xl font-bold mb-6">Формат занятий</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Групповые занятия</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Максимум 8 детей в группе</li>
                  <li>Развитие навыков общения и командной работы</li>
                  <li>Доступная стоимость</li>
                  <li>Продолжительность: 45 минут</li>
                  <li>Возможность выбора удобного времени</li>
                </ul>
                <div className="mt-6">
                  <Button>Записаться на групповое занятие</Button>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Индивидуальные занятия</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>Персональное внимание преподавателя</li>
                  <li>Обучение в удобном для ребенка темпе</li>
                  <li>Учет индивидуальных особенностей</li>
                  <li>Продолжительность: 40 минут</li>
                  <li>Гибкий график занятий</li>
                </ul>
                <div className="mt-6">
                  <Button>Записаться на индивидуальное занятие</Button>
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