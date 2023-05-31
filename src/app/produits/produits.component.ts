import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProduitdModel } from '../model/Produit.model';
import { ProduitService } from '../services/produit.service';
import { BrandService } from '../services/brand.service';
import { ParametreProdService } from '../services/parameter.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
  produit = new ProduitdModel();
  nbrprod:any;
  brand: any;
  parametre: any;
  response: any;
  produits:any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  constructor(
    private modalService: NgbModal,
    private produitservice: ProduitService,
    private brandservice: BrandService,
    private parametreprodservice: ParametreProdService
  ) {}
  ngOnInit(): void {
    this.produit.Categorie = 'Mode';
    this.GetBrand('Mode');
    this.GetProduits();
  }
  CahngeCategorie(event: any) {
    this.produit.Categorie = event.target.value;
    this.GetBrand(this.produit.Categorie);
  }
  ChangeBrand(event: any) {
    console.log(event.id)
    this.produit.Brand=event.BrandName;
    this.produit.SousCategorie=event.SousCategorie;
    this.GetParameter(this.produit.Categorie, this.produit.SousCategorie);
  }
  GetBrand(cat: any) {
    this.brandservice.BrandByCat(cat).subscribe((res) => {
      this.brand = res;
    });
  }
  GetParameter(C: any, SC: any) {
    this.parametreprodservice.ParametreParCatSC(C, SC).subscribe((res) => {
      this.parametre = res;
    });
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  Deleteproduit(id:any){
     this.produitservice.deleteProduit(id).subscribe(res=>{
      this.GetProduits();
      Swal.fire({
        title: 'Produit supprimé',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
     })
  }
  AddProduct() {
    this.produitservice.AddProduit(this.produit).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Product created succefully') {
        Swal.fire({
          title: 'Produit ajouté :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.GetProduits();
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
  GetProduits(){
    this.produitservice.GetProduits().subscribe(res=>{
      this.produits=res;
      this.nbrprod=this.produits.length;
    })
  }
  updateProduct(p:ProduitdModel){
   this.produitservice.UpdateProduit(p.id,p).subscribe(res=>{
    this.response=res;
    if (this.response.message == 'Produit updated succefully') {
      Swal.fire({
        title: 'Produit Modifié :)',
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
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetProduits();
  }
}
