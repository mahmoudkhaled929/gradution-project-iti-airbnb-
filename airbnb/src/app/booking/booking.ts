import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class Booking {
  propertyId!: number;
  property: any = null;
  checkIn = '';
  checkOut = '';
  nights = 0;
  total = 0;
  userId = 1; 

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.propertyId = Number(params['propertyId']);
      this.checkIn = params['checkIn'] || '';
      this.checkOut = params['checkOut'] || '';

      this.property = {
        id: this.propertyId,
        title: `Property #${this.propertyId}`,
        price: 120,
        image: `/images/image${this.propertyId}.jpg`
      };

      this.calcNights();
    });
  }

  calcNights() {
    if (!this.checkIn || !this.checkOut) {
      this.nights = 0;
      this.total = 0;
      return;
    }
    const inD = new Date(this.checkIn);
    const outD = new Date(this.checkOut);
    const diff = outD.getTime() - inD.getTime();
    this.nights = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
    this.total = this.nights * (this.property?.price || 0);
  }

  validateDates(): string | null {
    if (!this.checkIn || !this.checkOut)
      return 'Please select both check-in and check-out dates.';
    const inD = new Date(this.checkIn);
    const outD = new Date(this.checkOut);
    if (isNaN(inD.getTime()) || isNaN(outD.getTime())) return 'Invalid dates.';
    if (outD <= inD) return 'Check-out must be after check-in.';
    return null;
  }

  async submitReservation() {
    const err = this.validateDates();
    if (err) {
      alert(err);
      return;
    }
    this.calcNights();
    if (this.nights <= 0) {
      alert('Select a valid date range.');
      return;
    }

    const payload = {
      propertyId: this.property.id,
      userId: this.userId,
      checkIn: this.checkIn,
      checkOut: this.checkOut
    };

    try {
      const resp = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `Server error ${resp.status}`);
      }

      await resp.json();
      alert('Reservation created successfully!');
      this.router.navigateByUrl('/'); // رجوع للهوم بعد الحجز
    } catch (e: any) {
      alert('Failed to create reservation: ' + (e.message || e));
    }
  }
}
