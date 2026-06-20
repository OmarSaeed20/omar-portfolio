const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none overflow-hidden">
      {/* Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Central Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-blue-600/15 blur-[120px] rounded-full animate-pulse-slow" />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black opacity-90" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
