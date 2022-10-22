import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MensComponent } from './mens/mens.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';

const appRoute: Routes = [
  {path: '', redirectTo: 'Login', pathMatch:'full'},
  {path:'mens',component:MensComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'productDetail',component:ProductDetailsComponent},
  {path:'**',component:LoginComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CardComponent,
    ElectronicsComponent,
    MensComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }