import { ClienteComponent } from './cliente/cliente.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [

    {path: '',
     component: HomeComponent,
     canActivate: [AuthGuard] 
    },
    {path: 'login',
     component: LoginComponent
     //canActivate: [AuthGuard] 
    },
    {path: 'cliente',
     component: ClienteComponent,
     canActivate: [AuthGuard] 
    }
    /*{path: 'alunos',
    loadChildren: 'app/alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard] 
    },*/





]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
