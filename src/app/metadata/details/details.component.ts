import { Component } from '@angular/core';
import { Metadata } from 'app/shared';

@Component({
  selector: 'app-metadata-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class MetadataDetailsComponent  {

    metadataDetails: Metadata;

}