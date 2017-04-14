import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { LayoutFacade } from './../facades';
import { SettingsService } from './../services';

export const SERVICES_PROVIDERS = [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LayoutFacade,
    SettingsService
];

