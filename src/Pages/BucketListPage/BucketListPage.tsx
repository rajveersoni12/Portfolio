import { Button } from "../../Components/ui/button";
import { cn } from "../../lib/utils";

interface BucketListItem {
  id: number;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  icon: string;
}

const BucketListPage = () => {
  const bucketList: BucketListItem[] = [
    {
      id: 1,
      title: "Build a Travel SaaS for India",
      description:
        "Create a revolutionary travel platform connecting adventurers across India with hidden gems and authentic experiences",
      category: "Business",
      completed: false,
      priority: "high",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Travel 50+ Countries",
      description:
        "Explore diverse cultures, cuisines, and landscapes across the globe. Each country a new story, a new adventure",
      category: "Travel",
      completed: false,
      priority: "high",
      icon: "🌍",
    },
    {
      id: 3,
      title: "Digital Nomad Life - 1 Month Per Country",
      description:
        "Work remotely while living in different countries for a month each. Perfect blend of work and wanderlust",
      category: "Lifestyle",
      completed: false,
      priority: "high",
      icon: "💻",
    },
    {
      id: 4,
      title: "Deep Sea Diving",
      description:
        "Explore the mysterious underwater world, swim with sharks, and discover hidden coral reefs in crystal blue waters",
      category: "Adventure",
      completed: false,
      priority: "high",
      icon: "🤿",
    },
    {
      id: 5,
      title: "Paragliding in Swiss Alps",
      description:
        "Soar through the clouds above snow-capped mountains and experience the ultimate freedom of flight",
      category: "Adventure",
      completed: false,
      priority: "high",
      icon: "🪂",
    },
    {
      id: 6,
      title: "Skydiving from 15,000 feet",
      description:
        "Feel the adrenaline rush of free-falling through the sky and witness the world from a bird's eye view",
      category: "Adventure",
      completed: false,
      priority: "high",
      icon: "🪂",
    },
    {
      id: 7,
      title: "Complete a Full Marathon",
      description:
        "Push physical and mental limits by running 42.195 km in some of the world's most scenic marathon routes",
      category: "Fitness",
      completed: false,
      priority: "medium",
      icon: "🏃‍♂️",
    },
    {
      id: 8,
      title: "Climb Mount Everest Base Camp",
      description:
        "Trek to the base camp of the world's highest peak and witness the majesty of the Himalayas",
      category: "Adventure",
      completed: false,
      priority: "high",
      icon: "🏔️",
    },
    {
      id: 9,
      title: "Find the Love of My Life",
      description:
        "Meet someone special who shares the passion for adventure and build a life full of love and exploration together",
      category: "Personal",
      completed: false,
      priority: "high",
      icon: "❤️",
    },
    {
      id: 10,
      title: "₹1 Lakh Profit in Single Stock Trade",
      description:
        "Master the art of trading and make a significant profit from a single well-researched stock investment",
      category: "Finance",
      completed: false,
      priority: "medium",
      icon: "📈",
    },
    {
      id: 11,
      title: "Build a Million-Dollar Portfolio",
      description:
        "Create a diversified investment portfolio worth $1M through smart investments and compound growth",
      category: "Finance",
      completed: false,
      priority: "high",
      icon: "💰",
    },
    {
      id: 12,
      title: "Build Dream House",
      description:
        "Design and build a stunning modern home with smart technology, infinity pool, and mountain views",
      category: "Lifestyle",
      completed: false,
      priority: "high",
      icon: "🏡",
    },
    {
      id: 13,
      title: "Own a Ferrari",
      description:
        "Drive the iconic Ferrari - the ultimate symbol of speed, luxury, and Italian craftsmanship",
      category: "Lifestyle",
      completed: false,
      priority: "medium",
      icon: "🏎️",
    },
    {
      id: 14,
      title: "Ducati Panigale Superbike",
      description:
        "Own the most beautiful and powerful superbike on the planet - pure adrenaline on two wheels",
      category: "Lifestyle",
      completed: false,
      priority: "medium",
      icon: "🏍️",
    },
    {
      id: 15,
      title: "Complete Basic Education",
      description:
        "Finished formal education and built a strong foundation for lifelong learning",
      category: "Education",
      completed: true,
      priority: "high",
      icon: "🎓",
    },
    {
      id: 16,
      title: "Master 5 Programming Languages",
      description:
        "Become proficient in Python, JavaScript, Go, Rust, and Swift to build amazing software products",
      category: "Skills",
      completed: false,
      priority: "medium",
      icon: "💻",
    },
    {
      id: 17,
      title: "Safari in African Wilderness",
      description:
        "Experience the raw beauty of African wildlife - lions, elephants, and rhinos in their natural habitat",
      category: "Adventure",
      completed: false,
      priority: "medium",
      icon: "🦁",
    },
    {
      id: 18,
      title: "Northern Lights in Iceland",
      description:
        "Witness the magical Aurora Borealis dancing across the Arctic sky in complete wilderness",
      category: "Travel",
      completed: false,
      priority: "medium",
      icon: "🌌",
    },
    {
      id: 19,
      title: "Learn Kitesurfing",
      description:
        "Master the art of kitesurfing and ride the waves powered by wind across tropical waters",
      category: "Adventure",
      completed: false,
      priority: "medium",
      icon: "🏄‍♂️",
    },
    {
      id: 20,
      title: "Start a Charity Foundation",
      description:
        "Give back to society by starting a foundation focused on education and adventure opportunities for underprivileged youth",
      category: "Impact",
      completed: false,
      priority: "high",
      icon: "🤝",
    },
  ];

  const completedItems = bucketList.filter((item) => item.completed);
  const pendingItems = bucketList.filter((item) => !item.completed);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />

      <div className="relative z-10 container mx-auto px-4 mt-20 py-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
            My Bucket List
          </h1>
          <p className="text-xl text-gray-300">
            Life's greatest adventures await ✨
          </p>
        </div>

        {completedItems.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-green-400">Completed</h2>
              <Button
                variant="secondary"
                size="sm"
                className="bg-green-900/20 text-green-400 border-green-500/30"
              >
                {completedItems.length} done
              </Button>
            </div>
            <div className="space-y-4">
              {completedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-6 rounded-lg bg-green-900/10 border border-green-500/20"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-400 line-through mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-green-400 text-xl">✓</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-white">Goals Ahead</h2>
            <Button
              variant="secondary"
              size="sm"
              className="bg-blue-900/20 text-blue-400 border-blue-500/30"
            >
              {pendingItems.length} to go
            </Button>
          </div>
          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex items-start gap-4 p-6 rounded-lg border transition-all duration-200 hover:border-purple-500/40",
                  "bg-gray-900/30 border-gray-700/50"
                )}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full",
                      item.priority === "high" && "bg-red-500",
                      item.priority === "medium" && "bg-yellow-500",
                      item.priority === "low" && "bg-green-500"
                    )}
                  />
                  <div className="text-2xl">{item.icon}</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 py-8">
          <blockquote className="text-2xl font-light text-gray-300 italic">
            "The biggest adventure you can take is to live the life of your
            dreams"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default BucketListPage;
