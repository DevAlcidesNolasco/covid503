import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalComponent } from './total/total.component';
import { NowComponent } from './now/now.component';


const routes: Routes = [
  { path: 'total', component: TotalComponent },
  { path: "now", component: NowComponent },
  { path: '', redirectTo: "/total", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
