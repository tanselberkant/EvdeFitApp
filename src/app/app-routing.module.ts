import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'arm',
    children: [
      {
        path: '',
        loadChildren: () => import('./arm/arm.module').then( m => m.ArmPageModule)
      },
      {
        path:':armId',
        loadChildren: () => import ('./arm/arm-detail/arm-detail.module').then (m=>m.ArmDetailPageModule)        
      }
    ]
    
  },
  {
    path: 'shoulder',
    children: [
      {
        path : '',
        loadChildren: () => import('./shoulder/shoulder.module').then( m => m.ShoulderPageModule)
      },
      {
        path : ':shoulderId',
        loadChildren: () => import('./shoulder/shoulder-detail/shoulder-detail.module').then( m => m.ShoulderDetailPageModule)
      }
    ]
  },
  {
    path: 'chest',
    children : [
      {
        path : '',
        loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
      },
      {
        path : ':chestId',
        loadChildren : () => import('./chest/chest-detail/chest-detail.module').then(m=>m.ChestDetailPageModule)
      }
    ]
  },
  {
    path: 'back',
    children : [
      {
        path : '',
        loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
      },
      {
        path : ':backId',
        loadChildren: () => import('./back/back-detail/back-detail.module').then(m=>m.BackDetailPageModule)
      }
    ]
  },
  {
    path: 'leg',
    children : [
      {
        path : '',
        loadChildren: () => import('./leg/leg.module').then( m => m.LegPageModule)
      },
      {
        path : ':legId',
        loadChildren : () => import('./leg/leg-detail/leg-detail.module').then(m=>m.LegDetailPageModule)
      }
    ]
  },
  {
    path: 'abdominal',
    children : [
      {
        path : '',
        loadChildren: () => import('./abdominal/abdominal.module').then( m => m.AbdominalPageModule)
      },
      {
        path : ':absId',
        loadChildren: () => import('./abdominal/abdominal-detail/abdominal-detail.module').then(m=>m.AbdominalDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
