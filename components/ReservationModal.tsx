'use client';

import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    seating: 'Indoor AC Dining',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="kp-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="kp-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="kp-modal-close"
          onClick={onClose}
          aria-label="Close Reservation Modal"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="kp-modal-header">
              <span className="kp-modal-badge">TABLE RESERVATION</span>
              <h3 className="kp-modal-title">Experience Kailash Parbat</h3>
              <p className="kp-modal-sub">
                Panampilly Nagar, Kochi • Pure Vegetarian Dining • Free Valet Parking
              </p>
            </div>

            <form onSubmit={handleSubmit} className="kp-form">
              <div className="kp-form-row">
                <div className="kp-field">
                  <label htmlFor="res-name">Full Name *</label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Rajesh Nair"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="kp-field">
                  <label htmlFor="res-phone">Phone Number *</label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="kp-form-row three">
                <div className="kp-field">
                  <label htmlFor="res-guests">Number of Guests</label>
                  <select
                    id="res-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family)</option>
                    <option value="6">6 Guests</option>
                    <option value="8+">8+ Guests (Party)</option>
                  </select>
                </div>
                <div className="kp-field">
                  <label htmlFor="res-date">Date</label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="kp-field">
                  <label htmlFor="res-time">Time Slot</label>
                  <select
                    id="res-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="14:00">02:00 PM (Lunch)</option>
                    <option value="17:00">05:00 PM (High Tea & Chaat)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div className="kp-field">
                <label htmlFor="res-seating">Seating Preference</label>
                <select
                  id="res-seating"
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                >
                  <option value="Indoor AC Dining">Main AC Dining Hall (Cosy & Trendy)</option>
                  <option value="Family Section">Family Section (High Chairs Available)</option>
                  <option value="Chaat Corner">Near Chaat & Live Bar</option>
                </select>
              </div>

              <div className="kp-field">
                <label htmlFor="res-notes">Special Requests / Jain Food</label>
                <input
                  id="res-notes"
                  type="text"
                  placeholder="e.g. Jain food required, High chair for toddler, Anniversary"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div className="kp-form-footer">
                <button type="submit" className="kp-btn-gold w-full">
                  Confirm Table Reservation
                </button>
                <p className="kp-form-micro">
                  Immediate confirmation SMS will be sent. For urgent reservations, call{' '}
                  <strong>Udhav Nayak & Hospitality Desk</strong> directly.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="kp-res-success">
            <div className="kp-res-check">✓</div>
            <h3 className="kp-modal-title">Table Reserved Successfully!</h3>
            <p className="kp-modal-sub" style={{ marginTop: 8 }}>
              Thank you, <strong>{formData.name}</strong>. Your table for{' '}
              <strong>{formData.guests} guests</strong> is reserved on{' '}
              <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </p>
            <div className="kp-res-summary">
              <div className="kp-summary-row">
                <span>Location:</span>
                <strong>Panampilly Nagar, Kochi</strong>
              </div>
              <div className="kp-summary-row">
                <span>Seating:</span>
                <strong>{formData.seating}</strong>
              </div>
              {formData.notes && (
                <div className="kp-summary-row">
                  <span>Notes:</span>
                  <strong>{formData.notes}</strong>
                </div>
              )}
            </div>
            <button onClick={handleReset} className="kp-btn-gold">
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
