import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupsComponent } from './groups.component';
import { MatListModule, MatButtonModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatSliderModule, MatRadioModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { GroupInfoGridComponent } from './group/group-info-grid/group-info-grid.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GroupChoicesComponent } from './group/group-choices/group-choices.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GroupComponent, GroupListComponent, GroupsComponent, GroupInfoGridComponent, GroupChoicesComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    GroupsComponent,
    GroupComponent
  ]
})
export class GroupsModule { }
