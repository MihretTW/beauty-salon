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
    <section className="py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Our Gallery
      </h2>


      <div className="grid md:grid-cols-3 gap-6">

        {data?.map((item)=>(

          <div key={item.id}>

            <img
              src={item.image_url}
              alt={item.title}
              className="rounded-xl h-80 w-full object-cover"
            />

            <p className="text-center mt-2">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}