import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true); // navbar visible
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // scroll down → hide
    } else {
      setShow(true); // scroll up → show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4">
        <img
          src="../public/logo.jpg"
          alt="Logo"
          className="h-10 md:h-16 w-auto mb-4 md:mb-0"
        />
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-bold text-amber-950">
          <li className="cursor-pointer hover:text-yellow-500">
            <a href="#home">HOME</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <a href="#about">ABOUT</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <a href="#services">SERVICES</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


const Hero = () => {
  return (
    <section section id="home" className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-10 py-16 pt-35">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-300 p-5 mb-20 font-extrabold text-6xl">
          BUILD YOUR LEGACY
        </p>
        <p className="text-gray-300 p-5 mb-20">
          Elite Coaching, Premium Facilities and a Community Built on Grit.
        </p>
        <button className="bg-yellow-600 text-black px-6 py-2 rounded font-semibold cursor-pointer">
          <a href="#services">View Our Services</a>
        </button>
      </div>

      <div className="mt-10 md:mt-0 ">
        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center mr-20">
          <img src="./public/logo.jpg" alt="logo" className="w-full h-full rounded-full"/>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section section id="about" className="bg-white px-10 py-16 flex flex-col md:flex-row items-center gap-10">
      <img src="./public/logo.jpg" alt="logo" className="w-60 rounded-full" />

      <div>
        <p className="text-5xl font-bold text-yellow-600 pb-6">
          FITNESS SPORTS CENTER
        </p>
        <p className="text-amber-950 text-lg leading-relaxed">
          <b>Fitness Sports Center</b> is your ultimate destination for strength, performance, and transformation. We combine elite coaching, modern equipment, and a motivating environment to help you push limits, build confidence, and achieve your fitness goals.
          <br></br><br></br>
          Our programs are designed for individuals of all fitness levels, whether you're just starting your journey or striving to reach peak performance. With personalized training plans, expert guidance, and a supportive community, we ensure every member stays motivated, consistent, and focused on long-term success.
          </p>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      desc: "One-on-one coaching designed to help you achieve your specific fitness goals faster and more effectively.",
      img: "./public/personal.jpg", 
    },
    {
      title: "Group Classes",
      desc: "High-energy workout sessions in a motivating group environment that keeps you engaged and consistent.",
      img: "./public/group.jpg",
    },
    {
      title: "Cardio Training",
      desc: "Intense training sessions that improve endurance, burn calories, and boost overall fitness.",
      img: "./public/cardio.jpg",
    },
  ];

  return (
    <section section id="services" className="bg-black text-white px-10 py-16 text-center">
      <p className="text-5xl font-bold text-white pb-12">
        OUR SERVICES
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-yellow-500 rounded-lg p-6 hover:scale-105 transition"
          >
            <img src={service.img} alt={service.title} className="w-20 h-15 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section section id="contact" className="bg-white px-10 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <p className="text-2xl font-bold text-amber-950 pb-4">
          CONTACT US
        </p>
        <p className="text-amber-950 text-sm mb-2">
          Call us: <span className="text-yellow-600 font-bold">+94 123456789</span>
        </p>
        <p className="text-sm mb-2 text-amber-950">Mail: <b>info@fitnesssports.com</b></p>
        <p className="text-sm mb-6 text-amber-950">Address: <b>13A, High Level Road, Nugegoda</b></p>

        <p className="text-2xl font-bold text-amber-950 pt-9 pb-4">
          OPENING HOURS
        </p>
        <p className="text-sm text-amber-950">
          Monday to Saturday: <b>6:00AM - 10:00PM</b><br />
          Sunday: <b>8:00AM - 8:00PM</b>
        </p>
      </div>

      <div>
        <p className="text-2xl font-bold text-amber-950 pb-4 pr-10">
          FOR INQUIRIES
        </p>

        <form className="flex flex-col gap-4 pr-10">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="border p-2 rounded h-24"
          ></textarea>

          <button className="bg-yellow-500 text-black py-2 rounded font-semibold cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 text-xs">
      Copyright © Fitness Sports Center 2025
    </footer>
  );
};

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
