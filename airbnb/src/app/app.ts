import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';  

@Component({
  selector: 'app-root',
  standalone: true,                  
  imports: [RouterOutlet],  
  templateUrl: './app.html',
  styleUrls: ['./app.css']            
})
export class App {
  protected readonly title = signal('airbnb');
}
