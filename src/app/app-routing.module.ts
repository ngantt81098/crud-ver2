import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSkillsComponent } from './hero-skills/hero-skills.component';

export const routes: Routes = [
  { path: 'tuongs', component: ListComponent },
  { path: 'tuong/new', component: HeroFormComponent },
  { path: 'tuong/:id', component: HeroDetailComponent }, 
  { path: 'tuong/edit', component: HeroDetailComponent },
  { path: 'tuong/delete', component: HeroDetailComponent },
  { path: 'kynangs', component: HeroSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
