import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@mycompany/utils';
// import { AbcCoreModule } from '@mycompany/web';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  // imports: [AbcCoreModule],
  providers: [...ELECTRON_PROVIDERS]
})
export class AbcElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AbcElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'AbcElectronCoreModule');
  }
}
