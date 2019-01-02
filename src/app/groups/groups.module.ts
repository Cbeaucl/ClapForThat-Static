import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupsComponent } from './groups.component';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [GroupComponent, GroupListComponent, GroupsComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    GroupsComponent
  ]
})
export class GroupsModule { }
