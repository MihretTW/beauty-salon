import { supabase } from "../lib/supabase";


export default async function ServicesSection() {


  const { data: services } = await supabase
    .from("services")
    .select("*");


  return (

<<<<<<< HEAD
    <section className="py-20 px-10 bg-gradient-to-b from-[#fff8f3] to-[#fce4ec]">
=======
    <section className="py-20 md:py-32 px-6 md:px-10 bg-gradient-cream">
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06


      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#5c4033]">
        Our Services
      </h2>

      <div className="decorative-line"></div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">


        {services?.map((service) => (

          <div
            key={service.id}
<<<<<<< HEAD
            className="bg-white
rounded-2xl
shadow-lg
p-6
hover:-translate-y-2
transition
border-2 border-pink-100
hover:border-pink-300"
=======
            className="bg-white rounded-3xl shadow-xl p-6 hover-card group"
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06
          >

            {service.image && (

<img src={service.image}
<<<<<<< HEAD
className="h-48 w-full object-cover rounded-xl border-2 border-pink-200"/>
=======
alt={service.name}
className="h-48 w-full object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"/>
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06

)}


<<<<<<< HEAD
            <h3 className="text-2xl font-semibold text-[#5c4033]">
=======
            <h3 className="text-2xl font-semibold text-gray-800">
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06
              {service.name}
            </h3>


<<<<<<< HEAD
            <p className="mt-3 text-[#8b6f5c]">
=======
            <p className="mt-3 text-gray-600 leading-relaxed">
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06
              {service.description}
            </p>


<<<<<<< HEAD
            <p className="mt-5 font-bold text-[#e8a0b0] text-xl">
=======
            <p className="mt-5 font-bold text-pink-600 text-xl">
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06
              {service.price} ETB
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}