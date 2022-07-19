import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from "../../src/app/components/create/create.component";
import { EditComponent } from "../../src/app/components/edit/edit.component";
import { ShowComponent } from "../../src/app/components/show/show.component";

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
