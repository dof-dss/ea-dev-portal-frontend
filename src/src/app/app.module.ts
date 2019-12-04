import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AuthService } from '@app/service/auth.service';
import { GitHubService } from '@app/service/git-hub.service';
import { ApiGatewayService } from '@app/service/api-gateway.service';
import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ApiKeysComponent } from './modules/api-keys/api-keys.component';
import { UsageComponent } from './modules/usage/usage.component';
import { OpenSourceComponent } from './modules/open-source/open-source.component';
import { GuidesComponent } from './modules/guides/guides.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ApiKeysComponent,
    UsageComponent,
    OpenSourceComponent,
    GuidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AmplifyService, AuthService, ApiGatewayService, AuthGuard, NoAuthGuard, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
