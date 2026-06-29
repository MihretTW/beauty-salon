export default function Contact(){

return (

<section className="py-20 px-10 bg-gradient-to-b from-white to-[#fff8f3]">


<h2 className="text-4xl font-bold text-center mb-10 text-[#5c4033]">
Contact Us
</h2>



<div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">


<div className="space-y-6 text-lg bg-white p-8 rounded-2xl shadow-lg border-2 border-pink-200">


<div>

<h3 className="font-bold text-[#5c4033] text-xl">
📍 Address
</h3>

<p className="text-[#8b6f5c] mt-2">
Sululta, Ethiopia
</p>

</div>



<div>

<h3 className="font-bold text-[#5c4033] text-xl">
📞 Phone
</h3>

<p className="text-[#8b6f5c] mt-2">
+251 992552389
</p>

</div>



<div>

<h3 className="font-bold text-[#5c4033] text-xl">
🕒 Opening Hours
</h3>

<p className="text-[#8b6f5c] mt-2">
Mon - Sat: 7:00 AM - 7:00 PM
</p>

</div>


</div>





<div>

<iframe

className="w-full h-80 rounded-xl border-4 border-pink-200 shadow-lg"

src="https://www.google.com/maps/embed"

loading="lazy"

/>

</div>


</div>


</section>

)

}