import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups: Group[]
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(groups => this.groups = groups)
  }
  

}
