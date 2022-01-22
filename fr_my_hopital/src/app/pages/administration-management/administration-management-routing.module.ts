import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PatientsComponent} from './patients/patients.component';
import {MedecinsComponent} from './medecins/medecins.component';
import {SpecialitesComponent} from './specialites/specialites.component';

export const routes: Routes = [
    /*{
      path: 'users-list',
      component: ListUsersComponent,
    },*/
  {path : 'patients' , component : PatientsComponent},
  {path : 'medecins' , component : MedecinsComponent},
  {path : 'specialites' , component : SpecialitesComponent},

];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationManagementRoutingModule {
}
