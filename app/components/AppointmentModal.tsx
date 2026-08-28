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

  useEffect(() => {
    if (open) {
      setStep(1);
      setForm({ department: "", date: "", time: "", name: "", phone: "", notes: "" });
    }
  }, [open]);

  const today = new Date().toISOString().split("T")[0];
  const canProceedStep1 = form.department && form.date && form.time;
  const canProceedStep2 = form.name.trim().length >= 2 && /^[\d\s+()-]{10,}$/.test(form.phone);

  return (
    <div
      className={`modal-backdrop fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-2 sm:p-4 ${open ? "" : "pointer-events-none"}`}
      data-open={open}
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
    >
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-md" onClick={onClose} />

      <div
        className="modal-panel relative flex w-full max-w-2xl flex-col max-h-[calc(100dvh-0.5rem)] sm:max-h-[92vh] overflow-hidden glass-strong rounded-[1.5rem] sm:rounded-3xl shadow-2xl"
      >
        {/* Header */}
        <div className="shrink-0 px-4 pt-4 pb-3 sm:px-8 sm:pt-8 sm:pb-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-teal-700 uppercase tracking-wider">
                <IconCalendar className="w-3.5 h-3.5 shrink-0" />
                Book Appointment
              </div>
              <h3 className="mt-1 font-display font-extrabold tracking-tight text-ink text-[1.65rem] sm:text-3xl leading-tight">
                {step === 3 ? "Request received." : "Schedule your visit."}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-ink hover:bg-rose-500/10 hover:text-rose-500 transition-colors shrink-0 shadow-sm"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>

          {step < 3 && (
            <div className="flex items-center gap-2 mt-4 sm:mt-6">
              {[1, 2].map((s) => (
                <div key={s} className="flex-1">
                  <div className={`h-1.5 rounded-full transition-colors ${step >= s ? "bg-teal-500" : "bg-ink/10"}`} />
                  <div className={`mt-1.5 text-[10px] uppercase tracking-wider font-semibold ${step >= s ? "text-teal-700" : "text-ink/40"}`}>
                    Step {s}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 sm:px-8 sm:pb-8">
          {step === 1 && (
            <div className="space-y-5 sm:space-y-6 animate-fade-in">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink mb-2.5">
                  <IconStethoscope className="w-4 h-4 text-teal-700" /> Choose department
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DEPARTMENTS.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, department: d.id }))}
                      className={`min-h-11 text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border ${
                        form.department === d.id
                          ? "bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/20"
                          : "bg-white/60 text-ink/75 border-white/60 hover:border-teal-300"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-ink mb-2.5">
                    <IconCalendar className="w-4 h-4 text-teal-700" /> Preferred date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full min-h-12 px-4 py-3 rounded-xl bg-white/70 border border-white/80 text-ink text-sm focus:border-teal-400 focus:bg-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-ink mb-2.5">
                    <IconClock className="w-4 h-4 text-teal-700" /> Preferred time
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: t }))}
                        className={`min-h-10 px-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all border ${
                          form.time === t
                            ? "bg-teal-500 text-white border-teal-500"
                            : "bg-white/60 text-ink/75 border-white/60 hover:border-teal-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-teal-500/5 border border-teal-500/10 p-3">
                <p className="text-xs leading-relaxed text-ink/60">
                  Sunday bookings are reserved for emergency consults only.
                </p>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  disabled={!canProceedStep1}
                  onClick={() => setStep(2)}
                  className="btn-primary w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Continue
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink mb-2.5">
                  <IconUser className="w-4 h-4 text-teal-700" /> Full name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Jane Wanjiru"
                  autoComplete="name"
                  className="w-full min-h-12 px-4 py-3 rounded-xl bg-white/70 border border-white/80 text-ink text-sm focus:border-teal-400 focus:bg-white outline-none transition-colors placeholder:text-ink/40"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-ink mb-2.5">
                  <IconPhone className="w-4 h-4 text-teal-700" /> Phone number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="e.g. +254 7XX XXX XXX"
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full min-h-12 px-4 py-3 rounded-xl bg-white/70 border border-white/80 text-ink text-sm focus:border-teal-400 focus:bg-white outline-none transition-colors placeholder:text-ink/40"
                />
                <p className="mt-1.5 text-[11px] text-ink/50">We&apos;ll only use this to confirm your appointment by call or SMS.</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-ink mb-2.5 block">
                  Anything we should know? <span className="text-ink/40 font-normal">(optional)</span>
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  rows={4}
                  placeholder="e.g. First ANC visit, persistent cough, or medication refill…"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/80 text-ink text-sm focus:border-teal-400 focus:bg-white outline-none transition-colors placeholder:text-ink/40 resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 p-3.5 rounded-xl bg-teal-500/8 border border-teal-500/15">
                <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 accent-teal-600 shrink-0" />
                <span className="text-[11px] text-ink/70 leading-snug">
                  I consent to Wayside processing this intake data under the Data Protection Act (2019) &amp; Digital Health Act for the purpose of scheduling and clinical record continuity.
                </span>
              </label>

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <button
                  onClick={() => setStep(1)}
                  className="min-h-11 px-4 text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                >
                  ← Back
                </button>
                <button
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  className="btn-primary w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Submit Request
                  <IconCheck className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 sm:py-6 animate-scale-in">
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-500/10 text-teal-700 mb-5 mx-auto">
                <IconCheck className="w-10 h-10" strokeWidth={2} />
                <span className="absolute inset-0 rounded-full animate-pulse-ring" />
              </div>
              <h4 className="font-display font-extrabold text-ink text-2xl leading-tight">
                Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
              </h4>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed max-w-md mx-auto">
                Your appointment request for{" "}
                <span className="font-semibold text-ink">{DEPARTMENTS.find((d) => d.id === form.department)?.label || "your visit"}</span>{" "}
                on <span className="font-semibold text-ink">{form.date || "your chosen date"} at {form.time}</span> has been received. Our reception team will call <span className="font-semibold text-ink">{form.phone}</span> shortly to confirm.
              </p>

              <div className="mt-6 glass rounded-2xl p-4 text-left text-sm space-y-2 max-w-sm mx-auto">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink/55">Department</span>
                  <span className="font-semibold text-ink text-right">{DEPARTMENTS.find((d) => d.id === form.department)?.label || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink/55">Date</span>
                  <span className="font-semibold text-ink">{form.date || "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-ink/55">Time</span>
                  <span className="font-semibold text-ink">{form.time || "—"}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink/55">
                <IconShield className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                Records retained securely for 20 years under the Digital Health Act.
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={onClose} className="btn-primary w-full sm:w-auto">
                  Done
                  <IconCheck className="w-4 h-4" />
                </button>
                <a href="tel:+254700000000" className="btn-ghost w-full sm:w-auto">
                  <IconPhone className="w-4 h-4 text-teal-700" />
                  Call reception instead
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
