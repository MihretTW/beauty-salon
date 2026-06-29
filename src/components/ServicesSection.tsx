import { supabase } from "../lib/supabase";


export default async function ServicesSection() {


  const { data: services } = await supabase
    .from("services")
    .select("*");


  return (

    <section className="py-20 px-10 bg-gradient-to-b from-[#fff8f3] to-[#fce4ec]">


      <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4033]">
        Our Services
      </h2>


      <div className="grid md:grid-cols-3 gap-8">


        {services?.map((service) => (

          <div
            key={service.id}
            className="bg-white
rounded-2xl
shadow-lg
p-6
hover:-translate-y-2
transition
border-2 border-pink-100
hover:border-pink-300"
          >

            {service.image && (

<img src={service.image}
className="h-48 w-full object-cover rounded-xl border-2 border-pink-200"/>

)}


            <h3 className="text-2xl font-semibold text-[#5c4033]">
              {service.name}
            </h3>


            <p className="mt-3 text-[#8b6f5c]">
              {service.description}
            </p>


            <p className="mt-5 font-bold text-[#e8a0b0] text-xl">
              {service.price} ETB
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}