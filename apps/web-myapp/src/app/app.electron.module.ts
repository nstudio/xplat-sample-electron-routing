import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbcElectronCoreModule } from '@mycompany/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { routes } from './routes';

@NgModule({
  imports: [
    AppModule,
    AbcElectronCoreModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
