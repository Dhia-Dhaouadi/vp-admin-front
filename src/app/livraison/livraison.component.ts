import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivraisonService } from '../services/livraison.service';
import { LivraisonModel } from '../model/Livraison.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss'],
})
export class LivraisonComponent implements OnInit {
  livraison = new LivraisonModel();
  livraisons: any;
  response: any;
  nbrliv: any;
  constructor(
    private modalService: NgbModal,
    private livraisonservice: LivraisonService
  ) {}
  ngOnInit(): void {
    this.Getlivraison();
  }
  Getlivraison() {
    this.livraisonservice.GetLivraison().subscribe((res) => {
      this.livraisons = res;
      this.nbrliv = this.livraisons.length;
    });
  }
  AddLivraison() {
    this.livraisonservice.Addlivraison(this.livraison).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Livraison created succefully') {
        Swal.fire({
          title: 'Livraison ajouté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.Getlivraison();
        this.livraison.Region = '';
        this.livraison.PrixLivraison = '';
      } else {
        Swal.fire({
          title: 'Quelque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  UpdateLivraison(l: any) {
    this.livraisonservice.UpdateLivraison(l.id, l).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Livraison updated succefully') {
        Swal.fire({
          title: 'Livraisons modifié',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.Getlivraison();
      } else {
        Swal.fire({
          title: 'Quelque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  DeleteLivraison(id: any) {
    this.livraisonservice.DeleteLivraison(id).subscribe((res) => {
      this.response = res;
      console.log(this.response)
      if (this.response.message == 'Livraison deleted') {
        this.Getlivraison();
        Swal.fire({
          title: 'Livraisons supprimé',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Quelque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
}
