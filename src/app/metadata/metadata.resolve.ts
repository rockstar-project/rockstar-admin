import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MetadataResultSet, Metadata } from './metadata.model';
import { MetadataService } from './metadata.service';

@Injectable()
export class MetadataResolve implements Resolve<MetadataResultSet> {

  constructor(private metadataService: MetadataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MetadataResultSet> {
    return this.metadataService.getAll();
  }

}