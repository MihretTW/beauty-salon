export default function Contact(){

return (

<section className="py-20 px-10 bg-[#fff7f2]">


<h2 className="text-4xl font-bold text-center mb-10">
Contact Us
</h2>



<div className="grid md:grid-cols-2 gap-10">


<div className="space-y-5 text-lg">


<div>

<h3 className="font-bold">
📍 Address
</h3>

<p>
Sululta, Ethiopia
</p>

</div>



<div>

<h3 className="font-bold">
📞 Phone
</h3>

<p>
+251 992552389
</p>

</div>



<div>

<h3 className="font-bold">
🕒 Opening Hours
</h3>

<p>
Mon - Sat: 7:00 AM - 7:00 PM
</p>

</div>


</div>





<div>

<iframe

className="w-full h-80 rounded-xl"

src="https://www.google.com/maps/embed"

loading="lazy"

/>

</div>


</div>


</section>

)

}