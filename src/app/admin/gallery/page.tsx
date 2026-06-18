"use client";

import {useState} from "react";
import {supabase} from "../../../lib/supabase";


export default function GalleryAdmin(){


const [file,setFile]=useState<File|null>(null);
const [title,setTitle]=useState("");



async function uploadImage(){


if(!file) return;



const filename =
Date.now()+"-"+file.name;



const { error } = await supabase.storage
  .from("gallery")
  .upload(filename, file, {
    cacheControl: "3600",
    upsert: false,
  });


if(error){
  console.log(error);
  alert(error.message);
  return;
}



const {data}=supabase.storage
.from("gallery")
.getPublicUrl(filename);



await supabase
.from("gallery")
.insert({

image_url:data.publicUrl,
title

});



alert("Uploaded");


}



return (

<div className="p-10">


<h1 className="text-3xl font-bold">
Upload Gallery Image
</h1>



<input

type="file"

className="mt-5"

onChange={(e)=>
setFile(e.target.files?.[0] || null)
}

/>



<input

className="border p-3 block mt-5"

placeholder="Image title"

onChange={(e)=>setTitle(e.target.value)}

/>



<button

onClick={uploadImage}

className="mt-5 bg-pink-500 text-white px-6 py-3 rounded"

>

Upload

</button>


</div>

)

}