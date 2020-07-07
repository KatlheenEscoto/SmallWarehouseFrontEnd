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

  currentFilter: string;
  searchString: string;
  pageNumber: number;

  pagination: Pagination;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.currentFilter = '',
    this.searchString = '',
    this.pageNumber = 3;
    this.getItems(this.currentFilter, this.searchString, this.pageNumber);
  }

  public getItems(currentFilter: string, searchString: string, pageNumber: number): void {
    this.itemService.getItemIndex(currentFilter, searchString, pageNumber).subscribe(
      respuesta => {
        this.pagination = respuesta;
        console.log(this.pagination.items);
      }
    );
  }
}
