import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// libs
import { environment } from '@mycompany/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CoreModule, SharedModule],
  exports: [SharedModule],
  declarations: [AppComponent, HomeComponent, ProfileComponent]
})
export class AppModule {}
