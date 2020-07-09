import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { CultureComponent } from './culture/culture.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';


const routes: Routes = [
  {path : 'intro' , component : IntroComponent},
  {path : 'culture' , component : CultureComponent},
  {path : 'encyclopedia' , component : EncyclopediaComponent},
  {path: 'adminhome' , component : AdminhomeComponent},
  {path : 'clientinfo' , component : ClientinfoComponent},
  {path: '',   redirectTo: '/adminhome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
