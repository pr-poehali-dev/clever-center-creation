import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-clever-blue/20 via-clever-green/20 to-clever-yellow/20">
      <div className="container">
        <div className="bg-background p-8 md:p-12 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Готовы начать подготовку к школе?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Запишитесь на бесплатное пробное занятие, чтобы ознакомиться с нашим центром,
            познакомиться с преподавателями и оценить программу обучения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Записаться на пробное занятие</Button>
            <Button size="lg" variant="outline">Задать вопрос</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;