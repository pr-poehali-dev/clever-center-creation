import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type TestimonialProps = {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  avatar?: string;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'fill-clever-yellow text-clever-yellow' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, role, testimonial, rating, avatar }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4 mb-2">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </CardHeader>
      <CardContent>
        <p className="italic text-muted-foreground">"{testimonial}"</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Елена Смирнова",
      role: "Мама Артёма, 6 лет",
      testimonial: "Мой сын занимается в центре 'Clever' уже полгода, и я вижу потрясающие результаты. Он научился читать, считать и стал намного увереннее в себе. Спасибо замечательным педагогам!",
      rating: 5,
    },
    {
      name: "Дмитрий Козлов",
      role: "Папа Софии, 5 лет",
      testimonial: "Очень довольны подготовкой к школе в центре 'Clever'. Дочка с радостью ходит на занятия и постоянно делится новыми знаниями. Педагоги находят подход к каждому ребенку.",
      rating: 5,
    },
    {
      name: "Анна Петрова",
      role: "Мама Максима, 6 лет",
      testimonial: "Благодаря занятиям в 'Clever' сын не только приобрел необходимые знания для школы, но и полюбил сам процесс обучения. Отдельное спасибо за внимательное отношение к детям!",
      rating: 4,
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы родителей</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы гордимся тем, что родители доверяют нам своих детей, и стремимся оправдать их ожидания.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;