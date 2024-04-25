import {InjectionToken} from '@angular/core';

export interface CoreOptions {
    strategyName: string;
    apiAuth: string;
    moduleId: number;
}
export const CORE_OPTIONS = new InjectionToken<CoreOptions>('Core configuration');
