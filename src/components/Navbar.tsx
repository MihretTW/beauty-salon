"use client";

export default function Navbar(){

return (

<nav className="fixed top-0 w-full z-50 bg-[#fff8f3]/90 backdrop-blur shadow-sm border-b border-pink-200">


<div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-5">


<h1 className="text-2xl font-bold text-[#e8a0b0]">
Eden Beauty
</h1>



<div className="hidden md:flex gap-8 text-[#5c4033] font-medium">


<a href="#home" className="hover:text-[#e8a0b0] transition-colors">
Home
</a>


<a href="#services" className="hover:text-[#e8a0b0] transition-colors">
Services
</a>


<a href="#gallery" className="hover:text-[#e8a0b0] transition-colors">
Gallery
</a>


<a href="#contact" className="hover:text-[#e8a0b0] transition-colors">
Contact
</a>


</div>



</div>


</nav>

)

}