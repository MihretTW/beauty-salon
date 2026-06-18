"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";


export default function Login(){


const router = useRouter();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



async function login(){


const {error}=await supabase.auth.signInWithPassword({

email,
password

});


if(error){

alert(error.message);

}
else{

router.push("/admin/services");

}


}



return (

<div className="min-h-screen flex items-center justify-center">


<div className="p-8 shadow rounded-xl">


<h1 className="text-3xl font-bold">
Admin Login
</h1>



<input

className="border p-3 block mt-5"

placeholder="Email"

onChange={(e)=>setEmail(e.target.value)}

/>



<input

className="border p-3 block mt-5"

placeholder="Password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>



<button

onClick={login}

className="mt-5 bg-pink-500 text-white px-6 py-3 rounded"

>

Login

</button>



</div>


</div>

)

}