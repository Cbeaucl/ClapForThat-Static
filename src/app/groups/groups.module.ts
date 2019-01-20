import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupsComponent } from './groups.component';
import { MatListModule, MatButtonModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GroupComponent, GroupListComponent, GroupsComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [
    GroupsComponent,
    GroupComponent
  ]
})
export class GroupsModule { }
