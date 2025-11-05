import KnowAboutMe from "@/Pages/LandingPage/KnowAboutMe/KnowAboutMe";
import { DraggableCardBody } from "../../../Components/ui/draggable-card";

const items = [
  {
    title: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-20 left-[15%] rotate-[-5deg]",
  },
  {
    title: "React & Next.js",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-40 left-[20%] rotate-[-7deg]",
  },
  {
    title: "Backend Development",
    image:
      "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-10 left-[40%] rotate-[8deg]",
  },
  {
    title: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-32 left-[50%] rotate-[10deg]",
  },
  {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-20 right-[25%] rotate-[2deg]",
  },
  {
    title: "Problem Solving",
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2681&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-24 left-[35%] rotate-[-7deg]",
  },
  {
    title: "Software Architecture",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3",
    className: "absolute top-8 left-[25%] rotate-[4deg]",
  },
];

const HeroSection = () => {
  return (
    <section className="w-full h-full mt-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 py-12 gap-10">
      <div className="w-full lg:w-1/2">
        <KnowAboutMe hide={true} />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[200px]">
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-60 w-60 object-cover"
            />
            <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
