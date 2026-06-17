export default function Contact() {

  return (

    <section className="py-20 px-10 bg-white">


      <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4033]">
        Contact Us
      </h2>



      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">


        {/* contact info */}

        <div className="space-y-5">


          <div>

            <h3 className="font-bold text-xl">
              Address
            </h3>

            <p className="text-gray-600">
              Sululta, Ethiopia
            </p>

          </div>



          <div>

            <h3 className="font-bold text-xl">
              Phone
            </h3>

            <p className="text-gray-600">
              +251 900 000 000
            </p>

          </div>



          <div>

            <h3 className="font-bold text-xl">
              Opening Hours
            </h3>

            <p className="text-gray-600">
              Monday - Saturday
              <br />
              9:00 AM - 7:00 PM
            </p>

          </div>



          <button className="px-8 py-3 bg-pink-500 text-white rounded-full">

            Book Appointment

          </button>


        </div>




        {/* map */}

        <div className="rounded-xl overflow-hidden shadow">


          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed"
            loading="lazy"
          >
          </iframe>


        </div>


      </div>


    </section>

  );
}