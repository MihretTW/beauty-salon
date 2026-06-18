import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow">
      <h1 className="text-2xl font-bold text-pink-600">Eden Beauty</h1>

      <div className="flex gap-8">
         <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="#promotions">Promotions</a>

        
      </div>
    </nav>
  );
}