import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'api',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/api/api.module').then(m => m.ApiModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
