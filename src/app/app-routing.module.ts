import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 匯入路由用 compnonent
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/characterlist', pathMatch: 'full' },
  { path: 'characterlist', component: CharacterListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
