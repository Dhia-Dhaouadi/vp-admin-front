import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParametreProdModel } from '../model/Parametre.model';
import { ParametreProdService } from '../services/parameter.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss'],
})
export class ParameterComponent implements OnInit {
  parameter = new ParametreProdModel();
  response: any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  nbrparam:any;
  constructor(
    private modalService: NgbModal,
    private parametreprodservice: ParametreProdService
  ) {}
  ngOnInit(): void {
    this.parameter.Categorie = 'Mode';
    this.GetParametre();
  }
  GetParametre() {
    this.parametreprodservice.GetParametres().subscribe((res) => {
      this.response = res;
      this.nbrparam=this.response.length;
    });
  }
  CahngeCategorie(event: any) {
    this.parameter.Categorie = event.target.value;
  }
  CahngeCategorie1(event: any, p: ParametreProdModel) {
    p.Categorie = event.target.value;
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  UpdateParameter(p: ParametreProdModel) {
    this.parametreprodservice.UpdateParametre(p.id, p).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Parametre updated succefully') {
        Swal.fire({
          title: 'Paramétre modifié :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.GetParametre();
      } else {
        Swal.fire({
          title: 'Quelque chose ne va pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  DeleteParameter(id: any) {
    this.parametreprodservice.deleteParameter(id).subscribe((res) => {
      this.response = res;
      Swal.fire({
        title: 'Paramétre supprimé :)',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
      this.GetParametre();
    });
  }
  Enregistrer() {
    this.parametreprodservice
      .AddParametreProd(this.parameter)
      .subscribe((res) => {
        this.response = res;
        if (this.response.message == 'Parameter created succefully') {
          Swal.fire({
            title: 'Paramétre ajouté :)',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
          });
          this.GetParametre();
          this.parameter.SousCategorie = '';
          this.parameter.Taille = [];
          this.parameter.Couleur = [];
          this.parameter.Genre = [];
          this.parameter.GroupeAge = [];
        } else if (this.response.message == 'Parametre already exist !') {
          Swal.fire({
            title: 'Sous Catégorie déja exist !',
            text: 'Sous Catégorie selectionnée exist dans un autre parametre',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: 'Quelque chose ne va pas',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
          });
        }
      });
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetParametre();
  }
}
