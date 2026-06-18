"use client";

import {useState} from "react";
import {supabase} from "../../../lib/supabase";


export default function Promotions(){


const [title,setTitle]=useState("");
const [description,setDescription]=useState("");



async function addPromotion(){


const {error}=await supabase
.from("promotions")
.insert({

title,
description

});


if(error){

alert(error.message);

}
else{

alert("Promotion added");

setTitle("");
setDescription("");

}


}



return (

<div className="p-10">


<h1 className="text-3xl font-bold">
Add Promotion
</h1>


<input

className="border p-3 block mt-5"

placeholder="Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>



<textarea

className="border p-3 block mt-5"

placeholder="Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>



<button

onClick={addPromotion}

className="mt-5 bg-pink-500 text-white px-6 py-3 rounded"

>

Add

</button>


</div>

)

}