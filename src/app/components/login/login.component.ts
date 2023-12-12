import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  password: String = '';
  email: String = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    try {
      this.authService.login(this.email, this.password).subscribe(
        (response: any) => {
          this.authService.isAuthenticated = true;
          localStorage.setItem("user", response.tokens.access);
          this.router.navigate(['/']);
        },
        (error: any) => {
          this.errorMessage = error.error.error || 'Erro desconhecido ao fazer login.';
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  navigateToSignUp() {
    this.router.navigate(["/cadastrar"]);
  }
}
