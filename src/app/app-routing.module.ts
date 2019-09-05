import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 匯入路由用 compnonent
import { HomeComponent } from './home/home.component';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { ExampleDeployComponent } from './example-deploy/example-deploy.component';
import { CharacterListComponent } from './character-list/character-list.component';
// import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';
// import { ListDemoComponent } from './list-demo/list-demo.component';
// import { CharacterDetailComponent } from './character-detail/character-detail.component';
// import { CharacterAddComponent } from './character-add/character-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'demobutton', component: DemoButtonComponent },
  // { path: 'toolbardemo', component: ToolbarDemoComponent },
  // { path: 'listdemo', component: ListDemoComponent },
  { path: 'characterlist', component: CharacterListComponent },
  { path: 'exampledeploy', component: ExampleDeployComponent },
  // { path: 'characteradd', component: CharacterAddComponent },
  // { path: 'characterlist/:id', component: CharacterDetailComponent },
  // { path: 'webapi/add', component: WebApicrudAddComponent },
  // { path: 'webapi/:id/edit', component: WebApicrudDetailEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
