import FloatingHearts from "@/components/FloatingHearts";

const apps = [
  {
    name: "Tinder",
    emoji: "🔥",
    url: "https://tinder.com/app/download",
    color: "bg-gradient-to-r from-pink-500 to-orange-400",
  },
  {
    name: "Hinge",
    emoji: "💜",
    url: "https://hinge.co",
    color: "bg-gradient-to-r from-gray-800 to-gray-600",
  },
  {
    name: "Bumble",
    emoji: "🐝",
    url: "https://bumble.com/app",
    color: "bg-gradient-to-r from-yellow-400 to-yellow-500",
  },
];

const LoveNotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden px-4">
      <FloatingHearts count={6} />

      <div className="z-10 flex flex-col items-center gap-6 text-center max-w-lg">
        <div className="text-7xl font-bold text-primary font-body opacity-20">404</div>

        <h1 className="font-handwritten text-4xl md:text-5xl text-primary -mt-4">
          Valentine Not Found
        </h1>

        <p className="font-body text-muted-foreground text-lg">
          Oops! Love Connection Failed 💔
          <br />
          <span className="text-sm">
            Don't worry, there are plenty of fish in the sea... or on these apps:
          </span>
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${app.color} text-white font-body font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}
            >
              {app.emoji} Download {app.name}
            </a>
          ))}
        </div>

        <p className="font-handwritten text-xl text-muted-foreground mt-4">
          Good luck out there! 😅🤞
        </p>
      </div>
    </div>
  );
};

export default LoveNotFoundPage;
