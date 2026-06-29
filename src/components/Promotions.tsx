import { supabase } from "../lib/supabase";

export default async function Promotions() {
  const { data, error } = await supabase
    .from("promotions")
    .select("*")
    .order("id", { ascending: false })
    .limit(3);

  if (error) {
    return null;
  }

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-pink-50 via-white to-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.36em] text-pink-500 mb-4">
            Special Deals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Latest Offers
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Treat yourself with our current salon promotions. Save on hair, makeup, and nail services for a limited time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {data?.map((item) => (
            <article
              key={item.id}
              className="group bg-white border border-pink-100 rounded-[2rem] p-8 shadow-[0_24px_80px_rgba(231,185,201,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(231,185,201,0.28)]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                Promotion
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======



return (

<section className="py-20 md:py-32 px-6 md:px-10 bg-gradient-pink">


<h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#5c4033]">
Latest Offers
</h2>

<div className="decorative-line"></div>



<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">



{data?.map((item)=>(


<div

key={item.id}

className="bg-white rounded-3xl shadow-xl p-8 hover-card border-2 border-pink-100"

>


<h3 className="text-2xl font-bold text-gray-800">
{item.title}
</h3>


<p className="mt-4 text-gray-600 leading-relaxed">
{item.description}
</p>


</div>


))}



</div>


</section>

)

}
>>>>>>> f27b241819771c371e30b0eab833e450f90b3e06
