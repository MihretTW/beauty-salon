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

<section className="py-20 px-10 bg-pink-50">


<h2 className="text-4xl font-bold text-center mb-10">
Latest Offers
</h2>



<div className="grid md:grid-cols-3 gap-8">



{data?.map((item)=>(


<div

key={item.id}

className="bg-white rounded-xl shadow p-6"

>


<h3 className="text-2xl font-bold">
{item.title}
</h3>


<p className="mt-3">
{item.description}
</p>


</div>


))}



</div>


</section>

)

}