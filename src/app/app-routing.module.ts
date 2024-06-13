import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m =>
      m.InicioPageModule)
    },
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
  
  
  
  
  
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'validar-correo',
    loadChildren: () => import('./pages/validar-correo/validar-correo.module').then( m => m.ValidarCorreoPageModule)
  },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules
      })
    ],
  
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }