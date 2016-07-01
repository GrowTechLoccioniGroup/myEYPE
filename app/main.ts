import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, Http, URLSearchParams } from '@angular/http';
import { Config } from './app.constants';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [ HTTP_PROVIDERS, Config ]);
