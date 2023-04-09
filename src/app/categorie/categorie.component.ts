import { Component, OnInit, TemplateRef} from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieModel } from '../model/Categorie.model';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
categorie:any;
response:any;
imageURL:any;
Categorie = new CategorieModel();
  constructor(private categorieservice:CategorieService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetCategorie();
  }

  GetCategorie(){
    this.categorieservice.GetGategories().subscribe(res=>{
      this.categorie=res;
    })
  }

  uploadImage(event:any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    this.categorieservice.UploadImage(formData).subscribe(res=>{
      this.response=res;
      this.Categorie.ImageCouverture = this.response.imageURL;
      console.log(this.Categorie.ImageCouverture);
    })
  }

  AjouterImage(c:CategorieModel){
    c.ImageCouverture = this.Categorie.ImageCouverture;
    this.categorieservice.UpdateCategorie(c.id,c).subscribe(res=>{
      this.response=res;
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
