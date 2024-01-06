import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: "",
    redirectTo:"/inicio",
    pathMatch: "full"
  }




];
