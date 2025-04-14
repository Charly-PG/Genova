const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Innovación que impulsa <span className="text-blue-300">tu negocio</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          Soluciones tecnológicas a medida para empresas que buscan destacar en la era digital
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all transform hover:scale-105">
            Conoce más
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 rounded-lg font-medium transition-all">
            Contacto
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <svg className="animate-bounce w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;