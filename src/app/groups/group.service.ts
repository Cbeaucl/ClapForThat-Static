import { Injectable } from '@angular/core';
import { Group } from './group';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Observable<Group[]> {
    return of([{id:1, name: "A hardy party", description: "Hard? Rad."}, {id:2, name:"Great Golden Globe Gathering", description: "Really Great"}])
  }
}
