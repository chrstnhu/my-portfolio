import HeroIntro from "../components/home/HeroIntro";
import HighlightCarousel from "../components/home/HighlightCarousel";

function Home() {
  return (
    <section id="home">
      <div
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-white
          transition-colors
          duration-300
          dark:bg-slate-950
        "
      >
        {/* Background */}
        <img
          src="/assets/background/paysage.jpg"
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-20
            dark:opacity-15
          "
        />

        {/* Background overlay */}
        <div
          className="
            absolute
            inset-0
            bg-white/80
            transition-colors
            duration-300
            dark:bg-slate-950/80
          "
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
          <div className="w-full">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px]">
              <HeroIntro />
              <HighlightCarousel />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => {
            window.location.hash = "about";
          }}
          aria-label="Go to About section"
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            text-sm
            text-slate-400
            transition-colors
            duration-200
            hover:text-blue-600
            dark:text-slate-500
            dark:hover:text-blue-400
          "
        >
          ↓
        </button>
      </div>
    </section>
  );
}

export default Home;
