import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import {ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { CoreModule } from "./core.module";
import {  AuthModule } from "./auth/auth.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { RecipesModule } from "./recipes/recipes.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CoreModule,
    ShoppingListModule,
    RecipesModule
     
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
