export default function Hero(){

return (

<section
id="home"
className="h-screen flex items-center justify-center bg-cover bg-center relative"
style={{
backgroundImage:
"url('/images/salon.jpg')"
}}
>


<div className="absolute inset-0 bg-gradient-to-b from-[#f7c8d8]/30 to-[#fff8f3]/50"></div>

<div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-2xl text-center shadow-xl border-2 border-pink-200 max-w-2xl mx-4">


<h1 className="text-5xl font-bold text-[#5c4033]">
Feel Beautiful,
Feel Confident
</h1>


<p className="mt-5 text-xl text-[#8b6f5c]">
Professional hair, makeup and nail services
</p>



<a

href="#contact"

className="inline-block mt-8 bg-[#e8a0b0] hover:bg-[#f7c8d8] text-white px-8 py-3 rounded-full transition-colors shadow-md"

>

Book Appointment

</a>


</div>


</section>

)

}