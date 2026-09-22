function HobbyIcon({ hobby }) {
  const isDrawing = hobby.key === "hobbyList.drawing";
  const isTraveling = hobby.key === "hobbyList.traveling";
  const isPuzzle = hobby.key === "hobbyList.puzzles";
  const isMusic = hobby.key === "hobbyList.listeningMusic";
  const isGaming = hobby.key === "hobbyList.playingGames";

  return (
    <div className="relative flex items-center justify-center">
      {/* =========================
          MAIN EMOJI
      ========================== */}
      <span
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {hobby.emoji}
      </span>

      {/* =========================
          🎨 DRAWING: CAT
      ========================== */}
      {isDrawing && (
        <svg
          viewBox="0 0 80 65"
          fill="none"
          className="
            pointer-events-none
            absolute
            left-12
            top-1/2
            h-14
            w-16
            -translate-y-1/2
            overflow-visible
            text-pink-500
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
          aria-hidden="true"
        >
          {/* Head + ears */}
          <path
            d="
              M19 27
              L15 12
              C14 9 17 8 19 10
              L29 17
              C34 15 41 15 46 17
              L57 10
              C59 8 62 10 61 13
              L57 28
              C61 33 61 40 58 45
              C54 52 47 56 38 56
              C29 56 22 52 18 45
              C15 40 15 33 19 27
            "
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="
              [stroke-dasharray:145]
              [stroke-dashoffset:145]
              transition-[stroke-dashoffset]
              duration-1000
              ease-out
              group-hover:[stroke-dashoffset:0]
            "
          />

          {/* Left eye */}
          <circle
            cx="29"
            cy="31"
            r="2"
            fill="currentColor"
            className="
              opacity-0
              transition-opacity
              delay-700
              duration-200
              group-hover:opacity-100
            "
          />

          {/* Right eye */}
          <circle
            cx="47"
            cy="31"
            r="2"
            fill="currentColor"
            className="
              opacity-0
              transition-opacity
              delay-700
              duration-200
              group-hover:opacity-100
            "
          />

          {/* Nose + whiskers */}
          <path
            d="
              M36 37
              L38 39
              L40 37

              M31 37
              C25 35 21 34 17 34

              M31 40
              C25 40 21 41 17 43

              M45 37
              C51 35 55 34 59 34

              M45 40
              C51 40 55 41 59 43
            "
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* =========================
          ✈️ TRAVELING
          Arrow:
          bottom → loop → bottom
      ========================== */}
      {isTraveling && (
        <svg
          viewBox="0 0 110 60"
          fill="none"
          className="
            pointer-events-none
            absolute
            left-10
            top-1/2
            h-12
            w-24
            -translate-y-1/2
            overflow-visible
            text-blue-500
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
          aria-hidden="true"
        >
          {/* Wavy dotted path */}
          <path
            d="
              M5 45
              C15 15 25 15 35 35
              C45 55 55 55 65 30
              C75 8 88 8 105 20
            "
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            strokeLinecap="round"
            className="opacity-50"
          />

          {/* Plane following the path */}
          <text
            x="0"
            y="0"
            fontSize="12"
            className="
              fill-current
              text-blue-600
              opacity-0
              group-hover:opacity-100
              group-hover:animate-[followTravelPath_3s_ease-in-out_infinite]
            "
          >
            ✈️
          </text>
        </svg>
      )}

      {/* =========================
          🧩 PUZZLES: SUDOKU
      ========================== */}
      {isPuzzle && (
        <svg
          viewBox="0 0 60 60"
          fill="none"
          className="
            pointer-events-none
            absolute
            left-11
            top-1/2
            h-12
            w-12
            -translate-y-1/2
            overflow-visible
            text-violet-500
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
          aria-hidden="true"
        >
          {/* Background */}
          <rect
            x="8"
            y="8"
            width="44"
            height="44"
            rx="3"
            fill="white"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Grid */}
          <path
            d="
              M23 8 V52
              M37 8 V52
              M8 23 H52
              M8 37 H52
            "
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.7"
          />

          {/* Centered numbers */}
          <g
            fill="currentColor"
            fontSize="7"
            fontWeight="600"
            textAnchor="middle"
            dominantBaseline="middle"
            className="
              opacity-0
              transition-opacity
              delay-300
              duration-500
              group-hover:opacity-100
            "
          >
            {/* Row 1 */}
            <text x="15.5" y="15.5">
              5
            </text>

            <text x="30" y="15.5">
              3
            </text>

            <text x="44.5" y="15.5">
              7
            </text>

            {/* Row 2 */}
            <text x="15.5" y="30">
              6
            </text>

            <text x="30" y="30">
              1
            </text>

            <text x="44.5" y="30">
              9
            </text>

            {/* Row 3 */}
            <text x="15.5" y="44.5">
              8
            </text>

            <text x="30" y="44.5">
              2
            </text>

            <text x="44.5" y="44.5">
              4
            </text>
          </g>

          {/* Small pencil */}
          <path
            d="
              M49 5
              L56 12
              L53 15
              L46 8
              Z
            "
            fill="currentColor"
            className="
              opacity-0
              transition-opacity
              delay-700
              duration-300
              group-hover:opacity-100
            "
          />
        </svg>
      )}

      {/* =========================
          🎵 MUSIC: WAVEFORM
      ========================== */}
      {isMusic && (
        <div
          className="
            pointer-events-none
            absolute
            left-11
            top-1/2
            flex
            h-7
            -translate-y-1/2
            items-center
            gap-[2px]
            opacity-0
            group-hover:opacity-100
          "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
            <span
              key={bar}
              className="
                w-[2px]
                rounded-full
                bg-amber-500
                group-hover:animate-[soundWave_0.7s_ease-in-out_infinite]
              "
              style={{
                height: `${8 + (bar % 4) * 4}px`,
                animationDelay: `${bar * 80}ms`,
              }}
            />
          ))}
        </div>
      )}

      {/* =========================
          🎮 GAMING: TWO-CAR RACE
      ========================== */}
      {isGaming && (
        <div
          className="
            pointer-events-none
            absolute
            left-10
            top-1/2
            h-14
            w-28
            -translate-y-1/2
            overflow-visible
            opacity-0
            transition-opacity
            duration-200
            group-hover:opacity-100
          "
        >
          {/* Top lane */}
          <div
            className="
              absolute
              left-0
              top-1
              h-px
              w-[94px]
              border-t
              border-dashed
              border-emerald-200
            "
          />

          {/* Center lane */}
          <div
            className="
              absolute
              left-0
              top-1/2
              h-px
              w-[94px]
              -translate-y-1/2
              border-t
              border-dashed
              border-emerald-200
            "
          />

          {/* Bottom lane */}
          <div
            className="
              absolute
              bottom-1
              left-0
              h-px
              w-[94px]
              border-t
              border-dashed
              border-emerald-200
            "
          />

          {/* 🏎️ Top car */}
          <span
            className="
              absolute
              left-0
              top-[7px]
              z-10
              inline-block
              text-sm
              leading-none
              group-hover:animate-[raceTop_2.5s_ease-in-out_infinite]
            "
          >
            🏎️
          </span>

          {/* 🏎️ Bottom car — winner */}
          <span
            className="
              absolute
              bottom-[7px]
              left-0
              z-10
              inline-block
              text-sm
              leading-none
              group-hover:animate-[raceBottom_2s_ease-in-out_infinite]
            "
          >
            🏎️
          </span>

          {/* Finish line */}
          <div
            className="
              absolute
              right-[5px]
              top-0
              h-full
              w-[2px]
              bg-emerald-400
            "
          />

          {/* Checkered flag */}
          <span
            className="
              absolute
              right-0
              top-[-7px]
              z-20
              text-sm
              leading-none
            "
          >
            🏁
          </span>
        </div>
      )}
    </div>
  );
}

export default HobbyIcon;
