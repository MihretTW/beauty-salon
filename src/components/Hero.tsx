// src/components/Hero.tsx

export default function Hero() {
  return (
    <section
      className="h-[100%] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('../images/salon.jpg')",
      }}
    >

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>


      {/* content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">

        <div>

          <h1 className="text-6xl font-bold">
            Eden Beauty
          </h1>


          <p className="mt-5 text-xl">
            Where beauty meets confidence
          </p>


          <button className="mt-8 px-8 py-3 rounded-full bg-pink-500">
            Book Appointment
          </button>

        </div>

      </div>


    </section>
  );
}