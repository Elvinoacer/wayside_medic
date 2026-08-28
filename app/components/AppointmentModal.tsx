"use client";

import { useEffect, useState } from "react";
import {
  IconClose,
  IconCalendar,
  IconUser,
  IconPhone,
  IconStethoscope,
  IconCheck,
  IconArrowRight,
  IconShield,
  IconClock,
} from "./icons";

const DEPARTMENTS = [
  { id: "general", label: "General Outpatient" },
  { id: "dental", label: "Dental Surgery" },
  { id: "anc", label: "Antenatal / OBGYN" },
  { id: "chest", label: "Chest Specialist" },
  { id: "skin", label: "Skin Specialist" },
  { id: "lab", label: "Laboratory Tests" },
  { id: "minor-surgery", label: "Minor Surgery" },
];

const TIME_SLOTS = [
  "08:00", "09:00", "10:00", "11:00",
  "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
];

interface AppointmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ open, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    department: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  /* Reset the flow each time the dialog opens — adjusted during render
     (the React-recommended alternative to setState-in-effect). */
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setStep(1);
      setForm({ department: "", date: "", time: "", name: "", phone: "", notes: "" });
    }
  }

  const today = new Date().toISOString().split("T")[0];
  const canProceedStep1 = form.department && form.date && form.time;
  const canProceedStep2 = form.name.trim().length >= 2 && /^[\d\s+()-]{10,}$/.test(form.phone);

  return (
    <div
      className={`modal-backdrop fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-2 sm:p-4 ${open ? "" : "pointer-events-none"}`}
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      <div className="backdrop-bg" onClick={onClose} aria-hidden="true" />

      <div className="modal-panel relative flex w-full max-w-2xl flex-col max-h-[calc(100dvh-1rem)] sm:max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="shrink-0 px-4 pt-5 pb-4 sm:px-8 sm:pt-7 sm:pb-5 border-b-2 border-ink/10">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="kicker"><IconCalendar className="w-3.5 h-3.5" /> Book appointment</p>
              <h3 className="mt-2 font-display font-semibold tracking-tight text-ink text-[1.6rem] sm:text-3xl leading-tight">
                {step === 3 ? "Request received." : "Schedule your visit."}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close booking dialog"
              className="grid place-items-center w-10 h-10 rounded-full bg-sun-tint border-2 border-ink text-ink hover:bg-coral-tint transition-colors shrink-0"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>

          {step < 3 && (
            <div className="mt-5">
              <div className="step-bar" role="progressbar" aria-valuemin={1} aria-valuemax={2} aria-valuenow={step} aria-label={`Booking step ${step} of 2`}>
                <i style={{ width: step === 1 ? "50%" : "100%" }} />
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-extrabold uppercase tracking-wider text-ink-faint">
                <span className={step === 1 ? "text-leaf-deep" : ""}>1 · When &amp; what</span>
                <span className={step === 2 ? "text-leaf-deep" : ""}>2 · Who you are</span>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-8 sm:py-7">
          {step === 1 && (
            <div className="space-y-5 sm:space-y-6 animate-[hero-in_.4s_ease_both]">
              <div>
                <p className="field-label"><IconStethoscope className="w-4 h-4 text-leaf" /> Choose department</p>
                <div className="grid grid-cols-2 gap-2">
                  {DEPARTMENTS.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      aria-pressed={form.department === d.id}
                      onClick={() => setForm((f) => ({ ...f, department: d.id }))}
                      className="opt-btn"
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <div>
                  <label htmlFor="bk-date" className="field-label"><IconCalendar className="w-4 h-4 text-leaf" /> Preferred date</label>
                  <input
                    id="bk-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="field-input"
                  />
                </div>

                <div>
                  <p className="field-label"><IconClock className="w-4 h-4 text-leaf" /> Preferred time</p>
                  <div className="grid grid-cols-5 gap-1.5" role="group" aria-label="Choose a time slot">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={form.time === t}
                        onClick={() => setForm((f) => ({ ...f, time: t }))}
                        className="opt-btn !px-1 text-center !min-h-10 !text-[11px] sm:!text-xs"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="rounded-xl border-2 border-sun/50 bg-sun-tint p-3 text-xs leading-relaxed text-ink-soft">
                Sunday bookings are reserved for emergency consults only.
              </p>

              <div className="flex justify-end pt-1">
                <button
                  disabled={!canProceedStep1}
                  onClick={() => setStep(2)}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Continue <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-[hero-in_.4s_ease_both]">
              <div>
                <label htmlFor="bk-name" className="field-label"><IconUser className="w-4 h-4 text-leaf" /> Full name</label>
                <input
                  id="bk-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Jane Wanjiru"
                  autoComplete="name"
                  className="field-input"
                />
              </div>

              <div>
                <label htmlFor="bk-phone" className="field-label"><IconPhone className="w-4 h-4 text-leaf" /> Phone number</label>
                <input
                  id="bk-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="e.g. +254 7XX XXX XXX"
                  autoComplete="tel"
                  inputMode="tel"
                  className="field-input"
                />
                <p className="mt-1.5 text-[11px] text-ink-faint">We&apos;ll only use this to confirm your appointment by call or SMS.</p>
              </div>

              <div>
                <label htmlFor="bk-notes" className="field-label">
                  Anything we should know? <span className="text-ink-faint font-semibold">(optional)</span>
                </label>
                <textarea
                  id="bk-notes"
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  rows={4}
                  placeholder="e.g. First ANC visit, persistent cough, or medication refill…"
                  className="field-input resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 p-3.5 rounded-xl border-2 border-leaf/30 bg-leaf-tint cursor-pointer">
                <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 accent-[var(--color-leaf)] shrink-0" />
                <span className="text-[11px] text-ink-soft leading-snug">
                  I consent to Wayside processing this intake data under the Data Protection Act (2019) &amp; Digital Health Act for the purpose of scheduling and clinical record continuity.
                </span>
              </label>

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <button
                  onClick={() => setStep(1)}
                  className="min-h-11 px-4 text-sm font-bold text-ink-soft hover:text-ink transition-colors"
                >
                  ← Back
                </button>
                <button
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Submit request <IconCheck className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 sm:py-6 animate-[hero-in_.4s_ease_both]">
              <div className="relative inline-grid place-items-center w-20 h-20 rounded-full bg-leaf-tint border-2 border-ink text-leaf-deep mb-5">
                <IconCheck className="w-10 h-10" strokeWidth={2.2} />
                <span className="absolute inset-0 rounded-full border-2 border-leaf animate-[dot-pulse_1.8s_ease-out_infinite]" aria-hidden="true" />
              </div>
              <h4 className="font-display font-semibold text-ink text-2xl leading-tight">
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
              </h4>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-md mx-auto">
                Your appointment request for{" "}
                <span className="font-bold text-ink">{DEPARTMENTS.find((d) => d.id === form.department)?.label || "your visit"}</span>{" "}
                on <span className="font-bold text-ink">{form.date || "your chosen date"} at {form.time}</span> has been received. Our reception team will call <span className="font-bold text-ink">{form.phone}</span> shortly to confirm.
              </p>

              <div className="mt-6 card p-4 text-left text-sm space-y-2 max-w-sm mx-auto">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink-faint">Department</span>
                  <span className="font-bold text-ink text-right">{DEPARTMENTS.find((d) => d.id === form.department)?.label || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink-faint">Date</span>
                  <span className="font-bold text-ink">{form.date || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink-faint">Time</span>
                  <span className="font-bold text-ink">{form.time || "—"}</span>
                </div>
              </div>

              <p className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-faint">
                <IconShield className="w-3.5 h-3.5 text-leaf shrink-0" />
                Records retained securely for 20 years under the Digital Health Act.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={onClose} className="btn btn-primary w-full sm:w-auto">
                  Done <IconCheck className="w-4 h-4" />
                </button>
                <a href="tel:+254700000000" className="btn btn-ghost w-full sm:w-auto">
                  <IconPhone className="w-4 h-4 text-leaf" /> Call reception instead
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
