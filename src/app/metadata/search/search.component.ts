import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetadataService, MetadataResultSet, Metadata } from 'app/shared';

@Component({
  selector: 'app-metadata-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class MetadataSearchComponent implements OnInit {

    metadata: Array<Metadata>;

    constructor(private metadataService: MetadataService) {}

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.metadataService.getAll()
            .subscribe(resultset => this.metadata = resultset);
    }

}
