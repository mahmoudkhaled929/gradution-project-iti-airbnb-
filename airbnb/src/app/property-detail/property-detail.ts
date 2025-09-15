import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './property-detail.html',
  styleUrls: ['./property-detail.css']
})
export class PropertyDetail {
  propertyId: number | null = null;
  checkIn = '';
  checkOut = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.paramMap.get('id'));
  }

  confirmBooking() {
    alert(`✅ Booking confirmed for property ${this.propertyId}
Check-in: ${this.checkIn}
Check-out: ${this.checkOut}`);
    // بعدين تربط ده بالـ API لحفظه في DB
  }
}
