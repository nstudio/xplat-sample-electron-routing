import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { routes } from './routes';

@NgModule({
  imports: [AppModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
