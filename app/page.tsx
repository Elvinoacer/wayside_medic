"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Care from "./components/Care";
import VisitJourney from "./components/VisitJourney";
import PlanVisit from "./components/PlanVisit";
import FindUs from "./components/FindUs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import { IconPhone, IconCalendar } from "./components/icons";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar onBook={openBooking} />
      <main id="main" className="flex-1">
        <Hero onBook={openBooking} />
        <Ticker />
        <Care onBook={openBooking} />
        <VisitJourney />
        <PlanVisit onBook={openBooking} />
        <FindUs />
        <Faq onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <div className="mobile-dock" aria-label="Quick actions">
        <a className="call" href="tel:+254700000000"><IconPhone className="w-4 h-4" /> Call</a>
        <button className="book" onClick={openBooking}><IconCalendar className="w-4 h-4" /> Book</button>
      </div>
      <AppointmentModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
}
