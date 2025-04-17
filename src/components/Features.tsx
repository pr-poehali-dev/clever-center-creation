import { Award, Sparkles, Clock, Users, BookOpen, HeartHandshake } from "lucide-react";

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md">
      <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему родители выбирают нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Детский центр "Clever" объединяет лучшие методики обучения и профессиональных педагогов, 
            чтобы обеспечить качественную подготовку к школе.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem 
            icon={<Award className="h-6 w-6" />}
            title="Опытные педагоги"
            description="Наши преподаватели имеют высшее педагогическое образование и многолетний опыт работы с детьми дошкольного возраста."
          />
          
          <FeatureItem 
            icon={<Sparkles className="h-6 w-6" />}
            title="Современные методики"
            description="Используем прогрессивные методы обучения, которые делают процесс подготовки к школе увлекательным и эффективным."
          />
          
          <FeatureItem 
            icon={<Clock className="h-6 w-6" />}
            title="Гибкий график"
            description="Предлагаем удобное расписание занятий в утреннее и вечернее время, чтобы вы могли выбрать наиболее подходящее."
          />
          
          <FeatureItem 
            icon={<Users className="h-6 w-6" />}
            title="Малые группы"
            description="Занятия проводятся в малых группах до 8 человек, что позволяет уделить внимание каждому ребенку."
          />
          
          <FeatureItem 
            icon={<BookOpen className="h-6 w-6" />}
            title="Комплексный подход"
            description="Развиваем все необходимые навыки: чтение, письмо, счет, логику, внимание, память и социальные навыки."
          />
          
          <FeatureItem 
            icon={<HeartHandshake className="h-6 w-6" />}
            title="Индивидуальный подход"
            description="Учитываем особенности каждого ребенка и адаптируем программу под его потребности и темп развития."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;