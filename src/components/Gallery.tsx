import { supabase } from "../lib/supabase";

export default async function Gallery() {

  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("id", { ascending: false });


  if(error){
    return <p>Could not load gallery</p>;
  }


  return (
    <section className="py-20 px-10 bg-gradient-to-b from-[#fce4ec] to-white">

      <h2 className="text-4xl font-bold text-center mb-10 text-[#5c4033]">
        Our Gallery
      </h2>


      <div className="grid md:grid-cols-3 gap-6">

        {data?.map((item)=>(

          <div key={item.id} className="group">

            <img
              src={item.image_url}
              alt={item.title}
              className="rounded-xl h-80 w-full object-cover border-4 border-pink-200 shadow-lg group-hover:border-pink-300 transition-colors"
            />

            <p className="text-center mt-3 text-[#8b6f5c] font-medium">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}