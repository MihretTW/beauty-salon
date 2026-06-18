import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Promotions from "../components/Promotions";




export default function Home(){

return (

<main>

<Navbar />

<Hero/>

 <section id="about">
    <About/>
</section>

<section id="services">
    <ServicesSection />
</section>

 <section id="gallery">
    <Gallery />
</section>


<section id="promotions">
    <Promotions />
</section>

<section id="contact">
    <Contact />
</section>

<Footer/>

</main>

)

}