import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ required for ApiService
import {ApiService} from './services/api.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ JsonPipe],
  templateUrl: './app.html',
  //styleUrl: './app.scss'
  styleUrls: ['./app.scss'] // ✅ FIXED typo

})
//@Injectable({ providedIn: 'root' })
export class App {
  result: any;
  //protected readonly title = signal('frontend-angular');
    constructor(private apiService: ApiService) {}
     loadData() {
    this.apiService.getData().subscribe({
      next: data => {
        this.result = data;
      },
      error: err => {
        console.error('API error:', err);
      }
    });
  }

}
