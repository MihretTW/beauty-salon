import { supabase } from "../lib/supabase";


export default async function Promotions(){


const {data, error} = await supabase
.from("promotions")
.select("*")
.order("id", {ascending:false})
.limit(3);



if(error){
 return null;
}



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