import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarIdComponent } from './components/car-id/car-id.component';
import { MechanicalRepairComponent } from './components/mechanical-repair/mechanical-repair.component';
import { NewServiceComponent } from './components/new-service/new-service.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'Vehículos',
    component: CarsComponent
    
  },
  {
    path: 'Vehículo/:id',
    component:CarIdComponent
  },
  {
    path: 'Reparación/:patent/:client/:date',
    component:MechanicalRepairComponent
  },
  {
    path: 'nuevo_servicio',
    component:NewServiceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
