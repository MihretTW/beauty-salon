"use client";

export default function Navbar(){

return (

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-pink-100">


<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-8 md:py-5">


<h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
Eden Beauty
</h1>



<div className="hidden md:flex gap-8 text-gray-700 font-medium">



<a href="#home" className="hover:text-pink-600 hover:scale-105 transition-transform">
Home
</a>


<a href="#about" className="hover:text-pink-600 hover:scale-105 transition-transform">
About
</a>


<a href="#services" className="hover:text-pink-600 hover:scale-105 transition-transform">
Services
</a>


<a href="#gallery" className="hover:text-pink-600 hover:scale-105 transition-transform">
Gallery
</a>


<a href="#promotions" className="hover:text-pink-600 hover:scale-105 transition-transform">
Offers
</a>


<a href="#contact" className="hover:text-pink-600 hover:scale-105 transition-transform">
Contact
</a>


</div>



</div>


</nav>

)

}