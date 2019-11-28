import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AuthService } from '@app/service/auth.service';
import { ApiGatewayService } from '@app/service/api-gateway.service';
import { AuthGuard } from '@app/guard/auth.guard';
import { NoAuthGuard } from '@app/guard/no-auth.guard';

import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentLayoutComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AmplifyService, AuthService, ApiGatewayService, AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
