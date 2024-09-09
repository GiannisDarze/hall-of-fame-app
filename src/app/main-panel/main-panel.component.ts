import { Component } from '@angular/core';
import { MetalArchivesApiService } from '../services/metal-archives-api.service';
@Component({
  selector: 'app-main-panel',
  standalone: true,
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss',
})
export class MainPanelComponent {
  constructor(private metalArchives: MetalArchivesApiService) {}

  getStuff() {
    this.metalArchives.getAlbum$('1218049').subscribe({
      next: (data) => console.log('Album data:', data), // Logs the data fetched
      error: (error) => console.error('Error fetching album data:', error),
    });
  }
}
