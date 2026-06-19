export default function Hero(){

return (

<section
id="home"
className="h-screen flex items-center justify-center bg-cover bg-center"
style={{
backgroundImage:
"url('/images/salon.jpg')"
}}
>


<div className="bg-black/40 p-10 rounded-xl text-center text-white">


<h1 className="text-5xl font-bold">
Feel Beautiful,
Feel Confident
</h1>


<p className="mt-5 text-xl">
Professional hair, makeup and nail services
</p>



<a

href="#contact"

className="inline-block mt-8 bg-pink-500 px-8 py-3 rounded-full"

>

Book Appointment

</a>


</div>


</section>

)

}