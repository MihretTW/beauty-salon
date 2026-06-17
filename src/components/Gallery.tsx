export default function Gallery() {

  const images = [
    "/images/hair1.jpg",
    "/images/hair2.jpg",
    "/images/hair3.jpg",
    "/images/hair4.jpg",
    "/images/hair5.jpg",
    "/images/makeup1.jpg",
    "/images/makeup2.jpg",
    "/images/makeup3.jpg",
    "/images/nails1.jpg",
    "/images/nails2.jpg",
    "/images/nails3.jpg",
    "/images/salon.jpg",
  ];


  return (

    <section className="py-20 px-10 bg-[#fff8f3]">


      <h2 className="text-4xl font-bold text-center mb-12 text-[#5c4033]">
        Our Gallery
      </h2>



      <div className="grid md:grid-cols-4 gap-6">


        {images.map((image, index)=>(

          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg"
          >

            <img
              src={image}
              alt="Salon work"
              className="w-full h-72 object-cover hover:scale-110 transition"
            />

          </div>

        ))}


      </div>


    </section>

  );
}