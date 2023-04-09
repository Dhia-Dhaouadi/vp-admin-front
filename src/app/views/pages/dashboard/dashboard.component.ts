import { Component, OnInit } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true,
})
export class DashboardComponent implements OnInit {
  dateTime: Observable<Date>;

  constructor() {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1).pipe(
      map(() => {
        return new Date();
      })
    );
  }
}
