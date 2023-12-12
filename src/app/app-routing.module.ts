import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthClassGuard } from './guards/auth-class.guard';
import { AlunoDetailComponent } from './components/aluno-detail/aluno-detail.component';
import { AddAlunoComponent } from './components/add-aluno/add-aluno.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthClassGuard],
    component: HomeComponent,
  },
  {
    path: 'aluno/:id',
    canActivate: [AuthClassGuard],
    component: AlunoDetailComponent,
  },
  {
    path: 'adicionar',
    canActivate: [AuthClassGuard],
    component: AddAlunoComponent,
  },
  {
    path: 'entrar',
    component: LoginComponent,
  },
  {
    path: 'cadastrar',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
