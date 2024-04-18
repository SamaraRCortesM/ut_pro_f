import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  opened = true;

  public links = [
    {
      icon: 'restaurant_menu',
      label:'Lista de comida',
      routerLink: 'food/food-list'
    },
    {
      icon: 'breakfast_dining',
      label:'Crear nueva comida',
      routerLink: 'food/form'
    },

  ]

  public open():void{
    if(this.opened) {
      this.opened = !this.opened;
    }else {
      this.opened = !this.opened;
    }
  }
}
