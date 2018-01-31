import { Component, Inject, Input, OnInit } from '@angular/core';
import { Metadata } from './../metadata.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MetadataService } from './../metadata.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-metadata-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class MetadataDetailsComponent implements OnInit {

    metadataform: FormGroup;

    constructor(
      public dialogRef: MatDialogRef<MetadataDetailsComponent>,
      @Inject(MAT_DIALOG_DATA) public metadata: any,
      private metadataService: MetadataService) { 
      }

    ngOnInit() {
      this.metadataform = new FormGroup ({
        slug: new FormControl(this.metadata.slug, {
          validators: Validators.required,
          updateOn: 'submit'
        }),
        title: new FormControl(this.metadata.title, {
          validators: Validators.required,
          updateOn: 'submit'
        }),
        description: new FormControl(this.metadata.description, {
          validators: Validators.required,
          updateOn: 'submit'
        }),
        thumbnail: new FormControl(this.metadata.thumbnail, {
          validators: Validators.required,
          updateOn: 'submit'
        })
      });
    }

    onSubmit() {
      if (this.metadataform) {
        if (this.metadataform.valid) {
          console.log("submitting form..." + JSON.stringify(this.metadataform.value));
          this.metadataService.updateMetadata(this.metadata._links.self.href, this.metadataform.value)
            .subscribe(resultset => console.log(resultset));

            this.dialogRef.close(this.metadata);
        } else {
          
        }
      }
    }

}