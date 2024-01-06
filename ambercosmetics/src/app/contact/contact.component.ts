import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { VideomapComponent } from '../videomap/videomap.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent,VideomapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
