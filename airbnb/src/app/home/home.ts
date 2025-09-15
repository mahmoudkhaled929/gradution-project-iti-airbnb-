import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';     
import { Router } from '@angular/router';  
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']   
})
export class Home {
  constructor(private router: Router) {}  

  theme: 'light' | 'dark' = 'light';
  currentYear = new Date().getFullYear();

  searchPayload = { location: '', checkIn: '', checkOut: '' };

  cards = [
  { id: 1, title: 'جناح فاخر بإطلالة نيل', city: 'القاهرة', price: 120, rating: 4.8, image: 'assets/images/images(1).jpg' },
  { id: 2, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/image66.jpg' },
  { id: 3, title: 'فيلا خاصة مع مسبح', city: 'الرياض', price: 250, rating: 4.9, image: 'assets/images/image55.jpg' },
  { id: 5, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(2).jpg' },
  { id: 6, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(3).jpg' },
  { id: 7, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(4).jpg' },
  { id: 8, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(5).jpg' },
  { id: 9, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(6).jpg' },
  { id: 10, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images.jpg' },
  { id: 11, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(2).jpg' },
  { id: 12, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(2).jpg' },
  { id: 13, title: 'شقة حديثة قرب المترو', city: 'دبي', price: 95, rating: 4.6, image: 'assets/images/images(2).jpg' }
];

  ngOnInit() {
    this.theme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    this.applyTheme(this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.theme);
  }

  applyTheme(mode: 'light' | 'dark') {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', mode);
  }

  onSearch() {
    alert(`بحث عن: ${this.searchPayload.location}`);
  }

  addToFav(property: any) {
    alert(`تمت إضافة ${property.title} إلى المفضلة ❤️`);
  }

  // ✅ دالة زرار Book
  goToBooking(property: any) {
    this.router.navigate(['/booking'], {
      queryParams: {
        propertyId: property.id,
        checkIn: this.searchPayload.checkIn,
        checkOut: this.searchPayload.checkOut
      }
    });
  }
}