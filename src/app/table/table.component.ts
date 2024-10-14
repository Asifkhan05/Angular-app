import { Component, OnInit } from '@angular/core';
import { TableServiceService } from '../table-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: Data[] = [
    { Name: 'asif', Email: 'sss2.com', Gender: 'male', Address: 'jdidjdjd' },
 
  ];



count!:number;
  filteredData = [...this.data];
  pageSizeOptions = [5, 10, 20];
  itemsPerPage = this.pageSizeOptions[0];
  currentPage = 1;
  paginatedData: Data[] = [];

  loadDataFromLocalStorage() {
    const localData = localStorage.getItem('Table');
    if (localData) {
      this.data = JSON.parse(localData);
      this.filteredData = [...this.data];
      this.count = this.filteredData.length;
    }}
  constructor(private serv: TableServiceService,private router: Router) {}
 localData=localStorage
 ngOnInit() {
  this.loadDataFromLocalStorage();
  this.updatePagination(); // Initial pagination
  this.serv.ser.subscribe((newData: Data[]) => {
    const existingEmails = new Set(this.data.map(item => item.Email));
    const uniqueNewData = newData.filter(item => !existingEmails.has(item.Email));
    
    // Update data with unique new entries
    this.data = [...this.data, ...uniqueNewData];
    this.filteredData = [...this.data];
    this.count = this.filteredData.length;
    this.updatePagination();
    this.localData.setItem("Table", JSON.stringify(this.filteredData));
  });
}



  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.itemsPerPage, this.filteredData.length);
  }

  updatePagination() {
    // Ensure paginatedData only has the specified number of items per page
    this.paginatedData = this.filteredData.slice(this.startIndex, this.endIndex);
  }
  editData(index: number) {
    this.router.navigate(['/form'], { state: { index: index } }); // Passing index
  }

  onFilterChange(filterText: string) {
    this.currentPage = 1; // Reset to first page on filter change
    this.filteredData = this.data.filter(item =>
      item.Name?.toLowerCase().includes(filterText?.toLowerCase()) ||
      item.Email?.toLowerCase().includes(filterText?.toLowerCase())
    );
    this.updatePagination();
  }

  firstPage() {
    this.currentPage = 1;
    this.updatePagination();
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.updatePagination();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  setPageSize(size: number) {
    this.itemsPerPage = size;
    this.currentPage = 1; // Reset to the first page when page size changes
    this.updatePagination();
  }
}

interface Data {
  Name: string;
  Email: string;
  Gender: string;
  Address: string;
}
