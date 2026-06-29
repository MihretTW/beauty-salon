export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">


        {/* image */}
        <div className="relative">
          <img
            src="/images/salon.jpg"
            alt="Beauty salon"
            className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-200 rounded-full -z-10"></div>
        </div>



        {/* text */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#5c4033] mb-4">
            About Eden Beauty
          </h2>

          <div className="decorative-line !ml-0"></div>

          <p className="mt-6 text-gray-600 leading-8 text-lg">

            We believe beauty is about confidence.
            Our professional team provides high quality
            hair, makeup and nail services using modern
            techniques and products.

          </p>


          <button className="mt-8 btn-secondary">

            Learn More

          </button>


        </div>


      </div>


    </section>
  );
}