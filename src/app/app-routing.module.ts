import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './components/businessnews/businessnews.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { TopheaddingComponent } from './components/topheadding/topheadding.component';

const routes: Routes = [
  {path:'',component:TopheaddingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
