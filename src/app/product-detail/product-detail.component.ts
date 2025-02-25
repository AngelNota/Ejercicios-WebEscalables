// src/app/product-detail/product-detail.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importa CommonModule
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true, // <-- Marca el componente como independiente
  imports: [CommonModule], // <-- Importa CommonModule
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;
}