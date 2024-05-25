import { Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UnvehiculoComponent } from './unvehiculo/unvehiculo.component';
import { SearchComponent } from './search/search.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ReservarComponent } from './reservar/reservar.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HomeComponent } from './home/home.component';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoDesClientesComponent } from './clientes/listado-des-clientes/listado-des-clientes.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { CreditosComponent } from './creditos/creditos.component';

export const routes: Routes = [
    {path: 'servicios', component:ServiciosComponent},
    {path: 'vehiculos',component: VehiculosComponent},
    {path: 'vehiculo/:id', component: UnvehiculoComponent},
    {path : 'buscador/:nombreh', component: SearchComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'acerca', component: AcercaDeComponent},
    {path: 'reserva/:id', component: ReservarComponent},
    {path: 'preguntas', component: PreguntasComponent},
    {path: 'home', component: HomeComponent},
    {path: 'alta-cliente', component: AltaClienteComponent},
    {path: 'listado-clientes', component: ListadoClientesComponent},
    {path: 'listado-des-clientes', component: ListadoDesClientesComponent},
    {path: 'masonry-gallery', component: MasonryGalleryComponent},
    {path: 'creditos', component: CreditosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
    
];
