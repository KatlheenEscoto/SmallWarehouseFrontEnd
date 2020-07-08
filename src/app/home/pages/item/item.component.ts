import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import { Pagination } from '../../../models/pagination';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  /* Variables de servicio */
  currentFilter: string;
  searchString: string;
  pageNumber: number;

  /* Variables de componente */
  pagination: Pagination = new Pagination();
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  // Inicializando valores sin busqueda.
  ngOnInit(): void {
    this.currentFilter = '',
    this.searchString = '',
    this.pageNumber = 1;
    this.getItems(this.currentFilter, this.searchString, this.pageNumber);
  }

  // Metodo base de busqueda y paginacion.
  public getItems(currentFilter: string, searchString: string, pageNumber: number): void {
    this.itemService.getItemIndex(currentFilter, searchString, pageNumber).subscribe(
      respuesta => {
        this.pagination = respuesta;
        this.items = this.pagination.items;
      }
    );
  }

  public searchItem() {
    this.getItems('', this.searchString, 3);
    this.currentFilter = this.searchString;
  }

  // No podemos hacer un *ngFor de un numero, asi que lo convertimos en coleccion.
  public counter(i: number) {
    return new Array(i);
  }

  // Trasladarse a la pagina seleccionada en el menu de paginacion.
  public moveToPage(page: number) {
    page = page + 1;
    this.getItems(this.currentFilter, '', page);
  }
}
