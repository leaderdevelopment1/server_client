import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
  public menuItems = routes
  .map( route => route.children ?? [] )
  .flat()
  .filter( route => route && route.path)
  .filter( route => !route.path?.includes(':'));
  loggedUser: any;

  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null){
      this.loggedUser = JSON.parse(localUser);
    }else{
      this.loggedUser = false;
      this.router.navigateByUrl('/login');
    }
  }

  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.loggedUser = false;
    this.router.navigateByUrl('/login');
  }
}
