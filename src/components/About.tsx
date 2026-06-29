export default function About() {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-white to-[#fff8f3]">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        {/* image */}
        <div>
          <img
            src="/images/salon.jpg"
            alt="Beauty salon"
            className="rounded-2xl shadow-xl border-4 border-pink-200"
          />
        </div>



        {/* text */}
        <div>

          <h2 className="text-4xl font-bold text-[#5c4033] mb-4">
            About Eden Beauty
          </h2>


          <p className="mt-5 text-[#8b6f5c] leading-8 text-lg">

            We believe beauty is about confidence.
            Our professional team provides high quality
            hair, makeup and nail services using modern
            techniques and products.

          </p>


          <button className="mt-6 px-7 py-3 rounded-full bg-[#e8a0b0] hover:bg-[#f7c8d8] text-white transition-colors shadow-md">

            Learn More

          </button>


        </div>


      </div>


    </section>
  );
}