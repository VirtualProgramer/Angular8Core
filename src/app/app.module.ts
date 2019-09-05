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
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { HomeComponent } from './home/home.component';
import { ExampleDeployComponent } from './example-deploy/example-deploy.component';
// import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';
// import { ListDemoComponent } from './list-demo/list-demo.component';

// CRUD前置作業
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterListComponent } from './character-list/character-list.component';
// import { CharacterDetailComponent } from './character-detail/character-detail.component';
// import { CharacterAddComponent } from './character-add/character-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoButtonComponent,
    // ToolbarDemoComponent,
    // ListDemoComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
