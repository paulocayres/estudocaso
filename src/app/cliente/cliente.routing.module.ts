import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteComponent } from './cliente.component';






const alunosRoutes: Routes = [
    {path: '', component: ClienteComponent, children: [
        {path: 'novo', component: ClienteFormComponent},
        {path: ':id', component: ClienteDetalheComponent},
        {path: ':id/editar', component: ClienteFormComponent}
    ]
}, 


];



@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]

})


export class AlunosRoutingModule{}