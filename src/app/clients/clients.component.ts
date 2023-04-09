import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
client:any;
  constructor(private clientservice:ClientService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetClients();
  }

  GetClients(){
    this.clientservice.GetClients().subscribe(res=>{
      this.client=res;
    })
  }

  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
      })
      .catch((res) => {});
  }

}
