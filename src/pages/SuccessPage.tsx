import { useRef } from "react";
import HeartConfetti from "@/components/HeartConfetti";
import djImage from "@/assets/valentine-dj.jpg";

const SuccessPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Happy Valentine's Day!",
          text: "I said YES to being your Valentine! 💕",
          url: window.location.href,
        });
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard! 💕");
      } catch {
        alert("Share this page: " + window.location.href);
      }
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden px-4 py-8"
    >
      <HeartConfetti />

      <div className="z-10 flex flex-col items-center gap-6 text-center max-w-lg w-full">
        <div className="text-6xl animate-pulse-heart">💖</div>

        <h1 className="font-handwritten text-5xl md:text-7xl text-primary leading-tight">
          Happy Valentine's Day Casey!!
        </h1>

        <p className="font-handwritten text-3xl md:text-4xl text-valentine-peach">
          Love 💕
        </p>

        {/* Skeleton DJ Valentine Image */}
        <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30 hover:scale-[1.02] transition-transform duration-500">
          <img
            src={djImage}
            alt="Valentine's Day Boiler Room — Skeleton DJs"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-0 right-0 text-center font-handwritten text-lg text-white drop-shadow-lg">
            Our Valentine's Boiler Room 🎧💀
          </p>
        </div>

        {/* Spotify Embed */}
        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://open.spotify.com/embed/playlist/0pgTio9az7iaCofpdCpNzK?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title="Valentine's Day Playlist"
          />
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="bg-primary text-primary-foreground font-body font-bold rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4"
        >
          Share this moment 📸
        </button>

        <p className="font-handwritten text-lg text-muted-foreground">
          Forever & always 💕
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
