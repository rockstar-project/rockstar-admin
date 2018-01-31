import { Component, OnInit } from '@angular/core';
import { MetadataService } from './../metadata.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute } from '@angular/router';
import { MetadataResultSet, Metadata } from './../metadata.model';

@Component({
  selector: 'app-metadata-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class MetadataListComponent implements OnInit {

    source: LocalDataSource = new LocalDataSource();

    constructor(private route: ActivatedRoute, private metadataService: MetadataService) { 
    }

    ngOnInit() {
        this.source.load(this.route.snapshot.data['metadata']);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }
  
      settings = {
        add: {
          addButtonContent: '<i class="pe-7s-plus"></i>',
          createButtonContent: '<i class="pe-7s-check"></i>',
          cancelButtonContent: '<i class="pe-7s-close"></i>',
        },
        edit: {
          editButtonContent: '<i class="pe-7s-pen"></i>',
          saveButtonContent: '<i class="pe-7s-check"></i>',
          cancelButtonContent: '<i class="pe-7s-close"></i>',
        },
        delete: {
          deleteButtonContent: '<i class="pe-7s-trash"></i>',
          confirmDelete: true,
        },
        columns: {
          group: {
            title: 'Group',
            type: 'string',
          },
          slug: {
            title: 'Name',
            type: 'string',
          },
          title: {
            title: 'Title',
            type: 'string',
          },
          category: {
            title: 'Category',
            type: 'string',
          },
          description: {
            title: 'Description',
            type: 'string',
          },
          thumbnail: {
            title: 'Thumbnail',
            type: 'string',
          },
          versions: {
            title: 'Version',
            type: 'string',
          },
        },
      };

}