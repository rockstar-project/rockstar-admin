import { Component } from '@angular/core';
import { Metadata } from './../metadata.model';

@Component({
  selector: 'app-metadata-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class MetadataNewComponent  {

    metadata: Metadata;

}