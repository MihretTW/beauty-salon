export default function Contact(){

return (

<section className="py-20 md:py-32 px-6 md:px-10 bg-gradient-cream">


<h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#5c4033]">
Contact Us
</h2>

<div className="decorative-line"></div>



<div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto mt-12">


<div className="space-y-8 text-lg">


<div className="bg-white p-6 rounded-2xl shadow-lg hover-card">

<h3 className="font-bold text-xl text-gray-800 mb-2">
📍 Address
</h3>

<p className="text-gray-600">
Sululta, Ethiopia
</p>

</div>



<div className="bg-white p-6 rounded-2xl shadow-lg hover-card">

<h3 className="font-bold text-xl text-gray-800 mb-2">
📞 Phone
</h3>

<p className="text-gray-600">
+251 992552389
</p>

</div>



<div className="bg-white p-6 rounded-2xl shadow-lg hover-card">

<h3 className="font-bold text-xl text-gray-800 mb-2">
🕒 Opening Hours
</h3>

<p className="text-gray-600">
Mon - Sat: 7:00 AM - 7:00 PM
</p>

</div>


</div>





<div className="bg-white p-4 rounded-3xl shadow-xl">

<iframe

className="w-full h-80 md:h-96 rounded-2xl"

src="https://www.google.com/maps/embed"

loading="lazy"

/>

</div>


</div>


</section>

)

}