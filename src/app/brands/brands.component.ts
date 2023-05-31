import { Component, OnInit, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandModel } from '../model/Brand.model';
import { BrandService } from '../services/brand.service';
import Swal from "sweetalert2";
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  categorie:any;
  Brand = new BrandModel();
  response:any;
  nbrbrand:any;
  Page: number = 1;
  Count: number = 0;
  TableSize: number = 5;
  constructor(private modalService: NgbModal,private brandservice:BrandService)  { }
  ngOnInit() {
    this.Brand.Categorie = 'Mode';
    this.Brand.DateAjout = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  CahngeCategorie(event:any){
    this.Brand.Categorie = event.target.value;
  }
  CahngeCategorie1(event:any, c:BrandModel){
    c.Categorie = event.target.value;
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {
      })
      .catch((res) => {});
  }
  Addbrand(){
    this.brandservice.AddBrand(this.Brand).subscribe(res=>{
      this.response=res;
      if(this.response.message=='Brand created succefully'){
        Swal.fire({
          title: 'Brand ajouté :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.Brand.BrandName='';
        this.Brand.DateExpiration='';
        this.Brand.SousCategorie='';

      }
      else{
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
  GetBrands(event:any){
    this.brandservice.BrandByCat(event.target.value).subscribe(res=>{
      this.response=res;
      this.nbrbrand=this.response.length;
    })
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetBrands(event);
  }
  UpdateBrand(c:BrandModel){
    this.brandservice.UpdateBrand(c.id,c).subscribe(res=>{
      this.response=res;
      if(this.response.message=='Brand updated succefully'){
        Swal.fire({
          title: 'Brand Modifié :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      }
      else{
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
}
