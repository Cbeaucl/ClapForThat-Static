import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {
  groups = ["My Party", "Your Party", "We All Party"]
  constructor() { }

  ngOnInit() {
  }

}
