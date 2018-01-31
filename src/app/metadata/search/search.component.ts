import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MetadataResultSet, Metadata } from './../metadata.model';
import { listAnimation } from '../../shared/index';
import { MetadataDetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-metadata-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ listAnimation ]
})
export class MetadataSearchComponent implements OnInit {

    metadata: MetadataResultSet;

    constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

    ngOnInit() {
        this.metadata = this.route.snapshot.data['metadata'];
    }

    openDetails(item: Metadata): void {
        let dialogRef = this.dialog.open(MetadataDetailsComponent, {
          width: '1100px',
          height: '700px',
          data: item
        });
    
        dialogRef.afterClosed().subscribe(result => {
          item = result;
        });
    }

}
