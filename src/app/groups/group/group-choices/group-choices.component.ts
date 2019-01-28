import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-choices',
  templateUrl: './group-choices.component.html',
  styleUrls: ['./group-choices.component.scss']
})
export class GroupChoicesComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  currentCategory = 5;
  constructor() {
    
   }

  ngOnInit() {
  }

}
