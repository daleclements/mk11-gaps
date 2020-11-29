import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Gap } from '../../data/gap';

@Component({
  selector: 'app-gap-table',
  templateUrl: './gap-table.component.html',
  styleUrls: ['./gap-table.component.css']
})
export class GapTableComponent implements OnInit, AfterViewInit {

  @Input() gapData!: Gap[];
  dataSource!: MatTableDataSource<Gap>;

  nameFilterValue: string | null = null;
  sizeFilterValue: string | null = null;
  notesFilterValue: string | null = null;

  columnDef: string[] = ["name", "string", "size", "notes"];

  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.gapData);
    this.dataSource.filterPredicate = (data, filter) => {
      //This function should return true if the data provided to it survives the filter
      //We don't care about the filter param because it assumes only 1 filter and we're not into that nonsense
      
      let doesValueSurviveFilter = (value: string | number | null, filter: string | null) => {
        if(filter == null || value == null/*this shouldn't happen*/) {
          return true;
        } else if (value == null) {
          return false;
        }
        if(typeof(value) == "number") {
          return value == +filter; //converts the filter string to a number and does a simple equals comparison
        } else if(typeof(value) == "string") {
          return value.toLowerCase().includes(filter.toLowerCase()) ? true : false;
        } else {
          return true; //This shouldn't happen but just in case...
        }
      };

      //We'll test against each filter and return immediately if we know we fail
      //Character Name
      if(!doesValueSurviveFilter(data.name, this.nameFilterValue)){
        return false;
      }
      //Gap Size
      if(!doesValueSurviveFilter(data.size, this.sizeFilterValue)){
        return false;
      }
      //Notes
      if(!doesValueSurviveFilter(data.notes, this.notesFilterValue)) {
        return false;
      }
      
      //Survived all filters
      return true;
    }
  }

  
  doFilter() {
    /* We don't actually care what the value is.
       We just want to set dataSource.filter to a new value so the filter is triggered */
    this.dataSource.filter = Math.random() + "";
  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  clearNameFilter() {
    this.nameFilterValue = null;
    this.doFilter();
  }

  clearSizeFilter() {
    this.sizeFilterValue = null;
    this.doFilter();
  }

  clearNotesFilter() {
    this.notesFilterValue = null;
    this.doFilter();
  }

}
