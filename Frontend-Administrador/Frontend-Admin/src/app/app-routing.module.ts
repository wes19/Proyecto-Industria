import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { StoresComponent } from './components/stores/stores.component';
import { DriverComponent } from './components/driver/driver.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'pedidos', component: OrdersComponent },
  {path: 'productos', component: ProductsComponent },
  {path: 'empresas', component: StoresComponent },
  {path: 'motoristas', component: DriverComponent },
  {path: 'empleados', component: EmployeesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
