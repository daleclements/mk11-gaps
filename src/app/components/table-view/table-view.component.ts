import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gap } from 'src/app/data/gap';
import { GapDataService } from 'src/app/services/gap-data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  gap$: Observable<Gap[]>;

  constructor(private store: GapDataService) {
    //TS strict property checking wants this done in the constructor...
    this.gap$ = this.store.getGaps();
  }

  ngOnInit(): void {
    
  }

}
