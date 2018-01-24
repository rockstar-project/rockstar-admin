import { Component } from '@angular/core';
import { Metadata } from './../metadata.model';

@Component({
  selector: 'app-metadata-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class MetadataDetailsComponent  {

    metadataDetails: Metadata;

}