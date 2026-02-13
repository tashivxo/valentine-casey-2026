import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

const AreYouSurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden px-4">
      <FloatingHearts count={10} />

      <div className="z-10 flex flex-col items-center gap-8 text-center">
        <div className="text-6xl">😢</div>

        <h1 className="font-handwritten text-4xl md:text-5xl text-primary">
          Are you sure?
        </h1>

        <p className="font-body text-muted-foreground text-lg max-w-md">
          You're about to break a heart on Valentine's Day... Think carefully! 💔
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-primary text-primary-foreground font-body font-bold rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            No, take me back 💕
          </button>

          <button
            onClick={() => navigate("/404-love")}
            className="bg-muted text-muted-foreground font-body rounded-full px-8 py-3 shadow transition-all duration-300 hover:scale-95 text-sm"
          >
            Yes, I'm sure 😐
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreYouSurePage;
