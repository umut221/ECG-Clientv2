import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent, children: [
    {path:"patients", loadChildren: () => import("./admin/components/patients/patients.module").then(module => module.PatientsModule)},
  ]},
  {path:"", component: HomeComponent},
  {path:"patients", loadChildren: () => import("./ui/components/patients/patients.module").then(module=> module.PatientsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
