const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechSolutions",
      content: "Genova transformó completamente nuestra presencia digital. Su equipo profesional y dedicado superó todas nuestras expectativas.",
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      position: "Director de Marketing, InnovateCorp",
      content: "El trabajo realizado por Genova ha sido fundamental para nuestro crecimiento. Recomendamos sus servicios sin dudarlo.",
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      position: "Gerente General, DigitalPlus",
      content: "Excelente atención y resultados. Han sido un socio estratégico clave para nuestro desarrollo digital.",
      avatar: "AM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen <span className="text-blue-600">nuestros clientes</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas que han confiado en nosotros y han visto resultados excepcionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;