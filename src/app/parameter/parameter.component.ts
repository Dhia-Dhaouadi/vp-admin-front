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
  taillelist = [];
  couleurlist = [];
  GenreList = [];
  GroupList = [];
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
      console.log(this.response);
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
  UpdateParameter(p:ParametreProdModel) {
    p.Taille = this.taillelist;
    p.Genre = this.GenreList;
    p.Couleur = this.couleurlist;
    p.GroupeAge = this.GroupList;
    this.parametreprodservice.UpdateParametre(p.id,p).subscribe(res=>{
      this.response=res;
      if (this.response.message == 'Parametre updated succefully') {
        Swal.fire({
          title: 'Paramétre modifié :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
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
    })
  }
  DeleteParameter(id:any){
    this.parametreprodservice.deleteParameter(id).subscribe(res=>{
      this.response=res;
      if (this.response.message == 'Parameter deleted') {
        Swal.fire({
          title: 'Paramétre supprimé :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
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
    })
  }
  Enregistrer() {
    this.parameter.Taille = this.taillelist;
    this.parameter.Genre = this.GenreList;
    this.parameter.Couleur = this.couleurlist;
    this.parameter.GroupeAge = this.GroupList;
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
          this.parameter.SousCategorie = '';
          this.taillelist = [];
          this.GenreList = [];
          this.couleurlist = [];
          this.GroupList = [];
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
}
