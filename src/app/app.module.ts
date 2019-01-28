import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponentComponent } from './navigation/nav-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { GroupsModule } from './groups/groups.module';
import { Routes, RouterModule } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { GroupComponent } from './groups/group/group.component';

const appRoutes: Routes = [
  { path: 'groups', component:GroupsComponent  },
  { path: 'groups/:id', component: GroupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    GroupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
