import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { ReactiveFavoriteColorComponent } from './reactive-favorite-color/reactive-favorite-color.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    ReactiveFavoriteColorComponent,
    NavigationComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
