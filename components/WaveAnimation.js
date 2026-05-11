export default function WaveAnimation() {
  return (
    <div className="flex items-center gap-[3.5px] h-[22px]">
      <div className="wave-stroke w-[2.8px] bg-white/90 rounded-[4px] animate-wave h-[7px]"></div>
      <div className="wave-stroke w-[2.8px] bg-white/90 rounded-[4px] animate-wave h-[12px] [animation-delay:0.1s]"></div>
      <div className="wave-stroke w-[2.8px] bg-white/90 rounded-[4px] animate-wave h-[9px] [animation-delay:0.25s]"></div>
      <div className="wave-stroke w-[2.8px] bg-white/90 rounded-[4px] animate-wave h-[15px] [animation-delay:0.05s]"></div>
      <div className="wave-stroke w-[2.8px] bg-white/90 rounded-[4px] animate-wave h-[8px] [animation-delay:0.2s]"></div>
      
      <style jsx>{`
        @keyframes waveDynamic {
          0%, 100% { transform: scaleY(0.55); opacity: 0.6; }
          50% { transform: scaleY(1); opacity: 1; }
        }
        .animate-wave {
          animation: waveDynamic 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}