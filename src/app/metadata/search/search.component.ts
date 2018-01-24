import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetadataResultSet, Metadata } from './../metadata.model';
import { listAnimation } from '../../shared/index';

@Component({
  selector: 'app-metadata-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ listAnimation ]
})
export class MetadataSearchComponent implements OnInit {

    metadata: Array<Metadata>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.metadata = this.route.snapshot.data['metadata'];
    }

}
