import { supabase } from "../lib/supabase";


export default async function ServicesSection() {


  const { data: services } = await supabase
    .from("services")
    .select("*");


  return (

    <section className="py-20 px-10 bg-[#fff8f3]">


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
transition"
          >

            {service.image && (

<img src={service.image}
className="h-48 w-full object-cover rounded-xl"/>

)}


            <h3 className="text-2xl font-semibold">
              {service.name}
            </h3>


            <p className="mt-3 text-gray-600">
              {service.description}
            </p>


            <p className="mt-5 font-bold text-pink-600">
              {service.price} ETB
            </p>


          </div>

        ))}


      </div>


    </section>

  );
}