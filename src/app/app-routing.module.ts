import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPageComponent } from './featured-page/featured-page.component';
import { FeaturedComponent } from './featured/featured.component';
import { FullWidthComponent } from './full-width/full-width.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'full-width',component:FullWidthComponent},
  {path:'products',component: ProductsPageComponent},
  {path:'featured',component: FeaturedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
