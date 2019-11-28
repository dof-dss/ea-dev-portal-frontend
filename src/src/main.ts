import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, {API} from 'aws-amplify';
import awsconfig from './aws-exports';

awsconfig.oauth.redirectSignIn = environment.signInSignOut;
awsconfig.oauth.redirectSignOut = environment.signInSignOut;

Amplify.configure(awsconfig);

Amplify.configure({
  API: {
      endpoints: [
          {
              name: 'ea-api-gateway',
              endpoint: 'https://uec15pl7kd.execute-api.eu-west-2.amazonaws.com/beta'
          }
      ]
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
