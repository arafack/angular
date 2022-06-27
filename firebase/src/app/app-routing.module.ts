import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./page/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./page/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'event-create',
    loadChildren: () => import('./pages/event-create/event-create.module').then( m => m.EventCreatePageModule)
  },
  {
    path: 'event-detail/:id',
    loadChildren: () => import('./pages/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'home-event',
    loadChildren: () => import('./pages/home-event/home-event.module').then( m => m.HomeEventPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
