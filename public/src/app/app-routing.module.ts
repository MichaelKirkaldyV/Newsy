import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceComponent } from './source/source.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'news/:id', component: SourceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
