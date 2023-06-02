import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CategorieComponent } from './categorie/categorie.component';
import { BrandsComponent } from './brands/brands.component';
import { ProduitsComponent } from './produits/produits.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParameterComponent } from './parameter/parameter.component';
import { NgxMaskModule } from 'ngx-mask';
import { TagInputModule } from 'ngx-chips';
import { LivraisonComponent } from './livraison/livraison.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandepardateComponent } from './commandepardate/commandepardate.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ClientsComponent,
    NewsletterComponent,
    CategorieComponent,
    BrandsComponent,
    ProduitsComponent,
    ParameterComponent,
    LivraisonComponent,
    CommandeComponent,
    CommandepardateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    TagInputModule,
    SweetAlert2Module.forRoot(),
    NgxPaginationModule,
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
