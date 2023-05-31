import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
news:any;
nbrnews:any;
Page: number = 1;
Count: number = 0;
TableSize: number = 5;
  constructor(private clientservice:ClientService) { }
  ngOnInit(): void {
    this.GetNewsletter();
  }
  GetNewsletter(){
    this.clientservice.GetNewsletter().subscribe(res=>{
      this.news =res;
      this.nbrnews=this.news.length;
    })
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetNewsletter();
  }
}
