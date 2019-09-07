import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule,
  MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatSelectModule,
  MatCardModule
} from '@angular/material';

// 各大主分頁
import { HomeComponent } from './home/home.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoToolbarComponent } from './demo-toolbar/demo-toolbar.component';
import { ExampleDeployComponent } from './example-deploy/example-deploy.component';

// CRUD前置作業
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './character-list/character-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { CharacterDetailComponent } from './character-detail/character-detail.component';
// import { CharacterAddComponent } from './character-add/character-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoButtonComponent,
    DemoListComponent,
    DemoToolbarComponent,
    CharacterListComponent,
    ExampleDeployComponent,
    // CharacterDetailComponent,
    // CharacterAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular Material
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    // 表單相關
    FormsModule,
    ReactiveFormsModule,
    // CRUD
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
