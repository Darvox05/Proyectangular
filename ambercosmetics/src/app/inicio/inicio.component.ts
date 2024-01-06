import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { Seccion1Component } from '../seccion1/seccion1.component';
import { Seccion2Component } from '../seccion2/seccion2.component';
import { Seccion3Component } from '../seccion3/seccion3.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent,Seccion1Component,Seccion2Component,Seccion3Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
