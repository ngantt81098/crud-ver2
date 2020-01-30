import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'tuongs', component: ListComponent },
  { path: 'tuongs/new', component: HeroFormComponent },
  { path: 'tuongs/:id', component: HeroDetailComponent }, 
  { path: 'tuongs/edit', component: HeroDetailComponent },
  { path: 'tuongs/delete', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
