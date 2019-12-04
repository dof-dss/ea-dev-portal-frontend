import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { PageNotFoundComponent } from './page-not-found.component';
import { ApiKeysComponent } from './modules/api-keys/api-keys.component';
import { UsageComponent } from './modules/usage/usage.component';
import { OpenSourceComponent } from './modules/open-source/open-source.component';
import { GuidesComponent } from './modules/guides/guides.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api',
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/api/api.module').then(m => m.ApiModule)
  },
  { path: 'apiKeys', canActivate: [AuthGuard], component: ApiKeysComponent },
  { path: 'usage', canActivate: [AuthGuard], component: UsageComponent },
  { path: 'openSource', canActivate: [NoAuthGuard], component: OpenSourceComponent },
  { path: 'guides', canActivate: [NoAuthGuard], component: GuidesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
