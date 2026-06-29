export default function Footer(){

return (

<footer className="bg-gradient-to-br from-[#5c4033] to-[#7a5a4a] text-white p-8 md:p-12 text-center">


<h2 className="text-3xl md:text-4xl font-bold mb-4">
Eden Beauty
</h2>

<div className="decorative-line !bg-gradient-to-r from-gold to-pink-300"></div>


<p className="mt-6 text-gray-200">
© 2026 Eden Beauty. All rights reserved.
</p>

<div className="mt-6 flex justify-center gap-6 text-sm text-gray-300">
<a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
<a href="#services" className="hover:text-pink-300 transition-colors">Services</a>
<a href="#gallery" className="hover:text-pink-300 transition-colors">Gallery</a>
<a href="#contact" className="hover:text-pink-300 transition-colors">Contact</a>
</div>


</footer>

)

}