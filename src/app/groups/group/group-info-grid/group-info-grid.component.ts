import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-group-info-grid',
  templateUrl: './group-info-grid.component.html',
  styleUrls: ['./group-info-grid.component.scss']
})
export class GroupInfoGridComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Choices', cols: 2, rows: 1 },
          { title: 'Memebers', cols: 2, rows: 1 },
         
        ];
      }

      return [
        { title: 'Choices', cols: 1, rows: 1 },
        { title: 'Memebers', cols: 1, rows: 1 },
       
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
