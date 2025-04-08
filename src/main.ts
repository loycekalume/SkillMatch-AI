import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,{
providers: [provideRouter(routes)]
}).catch((err) => console.error(err));

//   // main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes'; // import your routes

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)]
// }).catch(err => console.error(err));
