import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {
  username: String = '';
  password: String = '';
  email: String = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    try {
      if (!this.username || !this.email || !this.password) {
        this.errorMessage = "Preencha todos os campos!";
        return;
      }

      this.authService.signUp(this.email, this.password, this.username).subscribe(
        (response: any) => {
          this.router.navigate(['/entrar']);
        },
        (error?: any) => {
          //console.log(error?.error?.error?.errors[0]);
          if (error?.error?.error?.password) {
            this.errorMessage = ("A senha precisa ter no mínimo 8 caracteres");
          } else if (error?.error?.error?.email) {
            this.errorMessage = ("Insira um E-mail válido");
          } else if (error?.error?.error?.errors) {
            this.errorMessage = ("E-mail já cadastrado");
          }
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  navigateToLogin() {
    this.router.navigate(["/entrar"]);
  }
}
