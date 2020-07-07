import { Item } from './item';

export class Pagination {
    count: number;
    pageSize: number;
    pageIndex: number;
    totalPages: number;
    items: Item[];
}
