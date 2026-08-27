"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Preparation from "./components/Preparation";
import Hours from "./components/Hours";
import Payments from "./components/Payments";
import Triage from "./components/Triage";
import Location from "./components/Location";
import Privacy from "./components/Privacy";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import { IconCalendar, IconPhone } from "./components/icons";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="wayside-shell min-h-screen flex flex-col relative">
      <Navbar onBook={openBooking} />
      <main className="flex-1">
        <Hero onBook={openBooking} />
        <About />
        <Services onBook={openBooking} />
        <Preparation />
        <Hours onBook={openBooking} />
        <Payments />
        <Triage />
        <Location />
        <Privacy />
        <FAQ onBook={openBooking} />
        <Contact onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <div className="mobile-dock" aria-label="Quick actions">
        <a className="call" href="tel:+254700000000"><IconPhone className="w-4 h-4" /> Call</a>
        <button className="book" onClick={openBooking}><IconCalendar className="w-4 h-4" /> Book</button>
      </div>
      <AppointmentModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
}
