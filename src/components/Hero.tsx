import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Готовим к <span className="text-clever-blue">школе</span> с любовью и вниманием
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Детский центр "Clever" помогает детям освоить навыки чтения, письма, счета
              и развить социальные навыки для успешного старта школьной жизни.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/programs">Наши программы</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Счастливые дети в детском центре Clever" 
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;