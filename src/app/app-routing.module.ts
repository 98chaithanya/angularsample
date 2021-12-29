import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes =  [{path:'',component:HomeComponent,
children:[
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}
]},
{path:'accounts',component:AccountsComponent},
{path:'balance',component:BalanceComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
