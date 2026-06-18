import { supabase } from "@/lib/supabase";


export default async function Gallery() {


  const { data: images } = await supabase
    .from("gallery")
    .select("*")
    .order("id", { ascending: false });



  return (

    <section className="py-20 px-10 bg-[#fff8f3]">


      <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4033]">
        Our Gallery
      </h2>



      <div className="grid md:grid-cols-4 gap-6">


        {images?.map((image)=>(


          <div
          key={image.id}
          className="rounded-xl overflow-hidden shadow-lg"
          >


            <img

              src={image.image_url}

              alt={image.title || "Salon image"}

              className="w-full h-72 object-cover hover:scale-110 transition"

            />



            {image.title && (

              <p className="p-3 text-center">
                {image.title}
              </p>

            )}


          </div>


        ))}



      </div>


    </section>

  );

}