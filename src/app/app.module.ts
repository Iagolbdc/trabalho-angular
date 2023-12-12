import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlunoDetailComponent } from './components/aluno-detail/aluno-detail.component';
import { AddAlunoComponent } from './components/add-aluno/add-aluno.component';
import { TelefonePipe } from './pipes/telefone.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DoisNomesPipe } from './pipes/dois-nomes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    AlunoDetailComponent,
    AddAlunoComponent,
    TelefonePipe,
    DoisNomesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
