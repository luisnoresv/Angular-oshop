import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  // tslint:disable-next-line:no-input-rename
  @Input('category') category;

  constructor(categoryService: CategoryService) {

    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {
  }

}
