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
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent },
  {path: 'home/pedidos', component: OrdersComponent },
  {path: 'home/productos', component: ProductsComponent },
  {path: 'home/empresas', component: StoresComponent },
  {path: 'home/motoristas', component: DriverComponent },
  {path: 'home/empleados', component: EmployeesComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
