import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'gaming',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Home'
    },
   children: [
      {
        path: 'gaming',
        loadChildren: () =>
        import('./modules/gaming/gaming.module').then((m) => m.GamingModule),
      },
    ]
  },
  {path: '**', redirectTo: 'gaming'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
