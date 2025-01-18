import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },  
  { path: 'cart', loadChildren:()=>import('./components/cart/cart.module').then((m)=>m.CartModule) },   
  { path: 'product/:id', loadChildren:()=>import('./components/product-details/product-details.module').then(m=>m.ProductDetailsModule) },  
  { path: '**', component:NotFoundComponent },  
  { path: 'home', component: ProductListComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
