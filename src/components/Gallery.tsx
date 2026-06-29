import { supabase } from "../lib/supabase";

export default async function Gallery() {

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("id", { ascending: false });


  if(error){
    return <p className="text-center text-gray-600 py-20">Could not load gallery</p>;
  }


  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-white">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#5c4033]">
        Our Gallery
      </h2>

      <div className="decorative-line"></div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">

        {data?.map((item)=>(

          <div key={item.id} className="group">

            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              <img
                src={item.image_url}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <p className="text-center mt-4 text-lg font-medium text-gray-700">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}