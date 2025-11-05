import { Marquee } from "@/Components/magicui/marquee";
import { useEffect, useState } from "react";

interface TestimonialCardProps {
  content: string;
  name: string;
  title: string;
  company: string;
  bgColor: string;
  image?: string;
}

const TestimonialCard = ({
  content,
  name,
  title,
  company,
  bgColor,
  image,
}: TestimonialCardProps) => {
  return (
    <div
      className={`${bgColor} rounded-2xl p-4 md:p-8 mx-2 md:mx-4 max-w-[280px] sm:min-w-[320px] md:min-w-[420px] flex flex-col justify-between`}
      style={{ height: "350px", maxHeight: "420px" }}
    >
      <p className="text-white/90 text-sm md:text-lg mb-4 md:mb-6 line-clamp-[9] md:line-clamp-[11]">
        {content}
      </p>
      <div className="flex items-center gap-2 md:gap-3 mt-auto">
        {image && (
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="text-white font-semibold text-base md:text-lg">
            {name}
          </h4>
          <p className="text-white/70 text-xs md:text-sm">
            {title} • {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    content:
      "Anshul delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
    name: "Ethan Parker",
    title: "Manager",
    company: "TechFusion",
    bgColor: "bg-[#4c21a0]",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    content:
      "Anshul is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He's proactive, reliable, and always willing to go the extra mile to ensure the success of our projects. It's been a pleasure working with him, and I look forward to future collaborations.",
    name: "Ryan Mitchell",
    title: "CTO",
    company: "Innovate Solutions",
    bgColor: "bg-[#0e5b84]",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content:
      "Anshul is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth. We're extremely happy with the results and would highly recommend him!",
    name: "Emily Thompson",
    title: "Creative Director",
    company: "H. Studios",
    bgColor: "bg-[#1a7d67]",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    content:
      "Anshul has an exceptional ability to transform vision into reality. His talent and dedication to creating delightful user experiences have greatly benefited our projects. His skills in frontend development are truly impressive, and he isn't afraid to tackle any challenge head-on.",
    name: "Lena Torres",
    title: "Product Lead",
    company: "DesignHub",
    bgColor: "bg-[#b83986]",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];

const ReviewsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-10">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="text-gray-400 uppercase tracking-wider text-xs md:text-sm mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Word on the street{" "}
            <span className="text-pink-500 italic">about me</span>
          </h2>
        </div>
      </div>

      {mounted && (
        <div className="w-full">
          <Marquee className="py-4" pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                bgColor={testimonial.bgColor}
                image={testimonial.image}
              />
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
