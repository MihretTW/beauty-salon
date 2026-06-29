export default function Hero(){

return (

<section
id="home"
className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
style={{
backgroundImage:
"url('/images/salon.jpg')"
}}
>


<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>


<div className="relative z-10 bg-white/95 backdrop-blur-sm p-10 md:p-16 rounded-3xl text-center max-w-3xl mx-4 shadow-2xl animate-fade-in">


<h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
Feel Beautiful,
Feel Confident
</h1>


<div className="decorative-line"></div>


<p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
Professional hair, makeup and nail services
</p>



<a

href="#contact"

className="inline-block mt-8 btn-primary text-lg"

>

Book Appointment

</a>


</div>


</section>

)

}