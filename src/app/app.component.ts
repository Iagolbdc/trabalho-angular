import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Aluno Connect';

  showNavbar = true;

  constructor(private router: Router, private apiService: ApiService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/entrar', '/cadastrar'].includes(event.url || '');
      }
    });
  }

  navbarOpen = false;

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToAdd(): void {
    this.router.navigate(['/adicionar']);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  verificarHorarios() {
    this.apiService.verificarHorarios().subscribe(response => {
      console.log(response);
      this.router.navigate(["/"]);
    }, error => {
      console.log(error);
    })
  }
}
