import { supabase } from "../lib/supabase";


export default async function ServicesSection() {


  const { data: services } = await supabase
    .from("services")
    .select("*");


  return (

    <section className="py-20 md:py-32 px-6 md:px-10 bg-gradient-cream">


      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#5c4033]">
        Our Services
      </h2>

      <div className="decorative-line"></div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">


        {services?.map((service) => (

          <div
            key={service.id}
            className="bg-white rounded-3xl shadow-xl p-6 hover-card group"
          >

            {service.image && (

<img src={service.image}
alt={service.name}
className="h-48 w-full object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"/>

)}


            <h3 className="text-2xl font-semibold text-gray-800">
              {service.name}
            </h3>


            <p className="mt-3 text-gray-600 leading-relaxed">
              {service.description}
            </p>


            <p className="mt-5 font-bold text-pink-600 text-xl">
              {service.price} ETB
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}