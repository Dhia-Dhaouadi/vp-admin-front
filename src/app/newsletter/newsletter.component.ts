import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
news:any;
  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
    this.GetNewsletter();
  }

  GetNewsletter(){
    this.clientservice.GetNewsletter().subscribe(res=>{
      this.news =res;
    })
  }
}
