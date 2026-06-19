"use client";

export default function Navbar(){

return (

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">


<div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">


<h1 className="text-2xl font-bold text-pink-600">
Eden Beauty
</h1>



<div className="hidden md:flex gap-8 text-gray-700">


<a href="#home">
Home
</a>


<a href="#services">
Services
</a>


<a href="#gallery">
Gallery
</a>


<a href="#contact">
Contact
</a>


</div>



</div>


</nav>

)

}