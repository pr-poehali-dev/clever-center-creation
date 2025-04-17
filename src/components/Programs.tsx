import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Users, Clock } from "lucide-react";

const ProgramCard = ({ 
  title, 
  description, 
  icon, 
  age, 
  duration,
  sessions,
  color = "blue"
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  age: string; 
  duration: string;
  sessions: string;
  color?: "blue" | "green" | "yellow" | "red";
}) => {
  const colorClasses = {
    blue: "border-clever-blue hover:border-clever-blue/80 hover:shadow-clever-blue/10",
    green: "border-clever-green hover:border-clever-green/80 hover:shadow-clever-green/10",
    yellow: "border-clever-yellow hover:border-clever-yellow/80 hover:shadow-clever-yellow/10",
    red: "border-clever-red hover:border-clever-red/80 hover:shadow-clever-red/10",
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
    <section className="py-16" id="programs">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши программы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем разнообразные программы подготовки к школе для детей разного возраста, 
            учитывая их индивидуальные особенности и потребности.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProgramCard 
            title="Подготовка к школе" 
            description="Комплексная программа, включающая обучение чтению, письму, математике и развитие логики."
            icon={<BookOpen className="h-5 w-5" />}
            age="5-7 лет"
            duration="45 минут"
            sessions="24 занятия (2 раза в неделю)"
            color="blue"
          />
          
          <ProgramCard 
            title="Развитие речи" 
            description="Программа, направленная на развитие речи, пополнение словарного запаса и формирование навыков общения."
            icon={<Users className="h-5 w-5" />}
            age="4-6 лет"
            duration="40 минут"
            sessions="16 занятий (1-2 раза в неделю)"
            color="green"
          />
          
          <ProgramCard 
            title="Логика и мышление" 
            description="Развитие логического мышления, внимания, памяти и пространственного воображения."
            icon={<Brain className="h-5 w-5" />}
            age="5-7 лет"
            duration="45 минут"
            sessions="16 занятий (1-2 раза в неделю)"
            color="yellow"
          />
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" variant="outline" asChild>
            <a href="/programs">Все программы</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;