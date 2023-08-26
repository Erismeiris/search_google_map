import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webScraping';

  address: string='';

  constructor() {
    
  }
  search() {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`;
    window.open(url, '_blank');
  }

}
