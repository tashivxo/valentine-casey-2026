import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import CountdownTimer from "@/components/CountdownTimer";

const LandingPage = () => {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState<{ x?: number; y?: number }>({});
  const [attempts, setAttempts] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const moveNoButton = useCallback(() => {
    if (timedOut) return; // stop dodging after 30s
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 50);
    setNoPos({ x, y });
    setAttempts((a) => a + 1);
    setYesScale((s) => Math.min(s + 0.15, 3));
  }, [timedOut]);

  const noSize = Math.max(1 - attempts * 0.08, 0.3);
  const isNoAbsolute = noPos.x !== undefined;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden px-4">
      <FloatingHearts />

      <div className="absolute top-6 left-0 right-0 z-10">
        <CountdownTimer />
      </div>

      <div className="z-10 flex flex-col items-center gap-8 mt-16">
        <div className="animate-pulse-heart text-6xl md:text-8xl">💕</div>

        <h1 className="font-handwritten text-4xl md:text-6xl text-primary text-center leading-tight">
          Will you be my Valentine?
        </h1>

        <div className="flex gap-4 items-center relative">
          <button
            onClick={() => navigate("/yes")}
            className="bg-primary text-primary-foreground font-body font-bold rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110"
            style={{ transform: `scale(${yesScale})` }}
          >
            Yes 💖
          </button>

          {!isNoAbsolute && (
            <button
              onMouseEnter={timedOut ? undefined : moveNoButton}
              onClick={timedOut ? () => navigate("/are-you-sure") : moveNoButton}
              className="bg-secondary text-secondary-foreground font-body font-bold rounded-full px-8 py-3 shadow transition-all duration-300"
              style={{ transform: `scale(${timedOut ? 1 : noSize})` }}
            >
              No 💔
            </button>
          )}
        </div>

        {attempts > 0 && (
          <p className="font-handwritten text-lg text-muted-foreground animate-bounce-gentle">
            {attempts < 3
              ? "Are you sure? 🥺"
              : attempts < 6
              ? "Please reconsider! 😢"
              : "You can't escape love! 😏"}
          </p>
        )}
      </div>

      {isNoAbsolute && (
        <button
          onMouseEnter={timedOut ? undefined : moveNoButton}
          onClick={() => navigate("/are-you-sure")}
          className="fixed bg-secondary text-secondary-foreground font-body font-bold rounded-full px-6 py-2 shadow transition-all duration-100 z-50"
          style={{
            left: noPos.x,
            top: noPos.y,
            transform: `scale(${timedOut ? 1 : noSize})`,
          }}
        >
          No 💔
        </button>
      )}
    </div>
  );
};

export default LandingPage;
