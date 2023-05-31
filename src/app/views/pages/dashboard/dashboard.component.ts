import { Component, OnInit } from '@angular/core';
import { Observable, map, timer } from 'rxjs';
import { NumberService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true,
})
export class DashboardComponent implements OnInit {
  dateTime: Observable<Date>;
  nbrbrand: any;
  nbrclient: any;
  nbrproduit: any;
  nbrcategorie: any;
  nbrnews: any;
  constructor(private numberservice: NumberService) {}

  ngOnInit(): void {
    this.dateTime = timer(0, 1).pipe(
      map(() => {
        return new Date();
      })
    );
    this.GetNumbers();
  }
  GetNumbers() {
    this.numberservice.NbrBrand().subscribe((res) => {
      this.nbrbrand = res;
    });
    this.numberservice.NbrClient().subscribe((res) => {
      this.nbrclient = res;
    });
    this.numberservice.NbrProduit().subscribe((res) => {
      this.nbrproduit = res;
    });
    this.numberservice.NbrCategorie().subscribe((res) => {
      this.nbrcategorie = res;
    });
    this.numberservice.NbrNews().subscribe((res) => {
      this.nbrnews = res;
    });
  }
}
