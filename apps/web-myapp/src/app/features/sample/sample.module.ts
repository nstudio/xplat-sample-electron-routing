import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SAMPLE_COMPONENTS, SampleComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: SampleComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...SAMPLE_COMPONENTS],
  exports: [...SAMPLE_COMPONENTS]
})
export class SampleModule {}
