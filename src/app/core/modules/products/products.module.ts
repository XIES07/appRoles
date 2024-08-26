import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ViewProductComponent
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
