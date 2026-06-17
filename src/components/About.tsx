export default function About() {
  return (
    <section className="py-20 px-10 bg-white">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        {/* image */}
        <div>
          <img
            src="/images/salon.jpg"
            alt="Beauty salon"
            className="rounded-2xl shadow-lg"
          />
        </div>



        {/* text */}
        <div>

          <h2 className="text-4xl font-bold text-[#5c4033]">
            About Eden Beauty
          </h2>


          <p className="mt-5 text-gray-600 leading-8">

            We believe beauty is about confidence.
            Our professional team provides high quality
            hair, makeup and nail services using modern
            techniques and products.

          </p>


          <button className="mt-6 px-7 py-3 rounded-full bg-pink-500 text-white">

            Learn More

          </button>


        </div>


      </div>


    </section>
  );
}