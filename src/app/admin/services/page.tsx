"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";


export default function AdminServices() {


  const [services, setServices] = useState<any[]>([]);

  const [editing, setEditing] = useState<any>(null);



  async function getServices(){

    const {data,error}=await supabase
      .from("services")
      .select("*")
      .order("id");


    if(!error){
      setServices(data);
    }

  }



  async function deleteService(id:number){

    const {error}=await supabase
      .from("services")
      .delete()
      .eq("id",id);


    if(error){

      alert(error.message);

    }else{

      getServices();

    }

  }




  async function updateService(){


    const {error}=await supabase
      .from("services")
      .update({

        name: editing.name,
        description: editing.description,
        price: editing.price

      })
      .eq("id", editing.id);



    if(error){

      alert(error.message);

    }else{

      alert("Updated");

      setEditing(null);

      getServices();

    }

  }




  useEffect(()=>{

    getServices();

  },[]);



return (

<div className="p-10">


<h1 className="text-3xl font-bold">
Manage Services
</h1>



<div className="mt-10 space-y-5">


{services.map((service)=>(


<div
key={service.id}
className="border p-5 rounded-xl flex justify-between"
>


<div>

<h2 className="text-xl font-bold">
{service.name}
</h2>


<p>
{service.description}
</p>


<p>
{service.price} ETB
</p>


</div>



<div className="space-x-3">


<button

onClick={()=>setEditing(service)}

className="bg-blue-500 text-white px-4 py-2 rounded"

>

Edit

</button>



<button

onClick={()=>deleteService(service.id)}

className="bg-red-500 text-white px-4 py-2 rounded"

>

Delete

</button>


</div>


</div>


))}


</div>





{editing && (

<div className="mt-10 border p-6 rounded-xl">


<h2 className="text-2xl font-bold">
Edit Service
</h2>



<input

className="border p-3 block mt-3"

value={editing.name}

onChange={(e)=>

setEditing({
...editing,
name:e.target.value
})

}

/>



<textarea

className="border p-3 block mt-3"

value={editing.description}

onChange={(e)=>

setEditing({
...editing,
description:e.target.value
})

}

/>



<input

className="border p-3 block mt-3"

value={editing.price}

onChange={(e)=>

setEditing({
...editing,
price:e.target.value
})

}

/>



<button

onClick={updateService}

className="mt-5 bg-green-500 text-white px-6 py-3 rounded"

>

Save Changes

</button>



</div>

)}



</div>

)

}