import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsListComponent } from './terms-list/terms-list.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';
import { CollectionsListComponent } from './collections-list/collections-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/words', pathMatch: 'full'},
  { path: 'words', component: TermsListComponent },
  { path: 'phrases', component: PhrasesListComponent },
  { path: 'collections', component: CollectionsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
