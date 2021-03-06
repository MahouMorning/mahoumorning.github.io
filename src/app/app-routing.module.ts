import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MembersComponent } from './members/members.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  { path: 'carrd', component: MembersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
