import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'create', component: CreateKittenComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
