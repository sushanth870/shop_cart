import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MensComponent } from './mens/mens.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FooterComponent } from './footer/footer.component';
const appRoute: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'mens',component:MensComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'productDetails/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'myProfile',component:MyProfileComponent},
  {path:'myOrder',component:MyOrdersComponent},
  {path:'**',component:PageNotFoundComponent},
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
    HomeComponent,
    PageNotFoundComponent,
    CartComponent,
    MyProfileComponent,
    MyOrdersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }