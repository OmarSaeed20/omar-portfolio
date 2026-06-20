const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[var(--background)] pointer-events-none overflow-hidden transition-colors duration-300">
      {/* Technical Grid Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, var(--grid-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 1
        }} 
      />
      
      {/* Central Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-blue-600/15 blur-[120px] rounded-full animate-pulse-slow" />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 opacity-90" style={{ background: 'radial-gradient(circle at center, var(--vignette-from), var(--vignette-via), var(--vignette-to))' }} />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
