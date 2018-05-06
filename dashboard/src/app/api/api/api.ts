export * from './core.service';
import { CoreService } from './core.service';
export * from './security.service';
import { SecurityService } from './security.service';
export const APIS = [CoreService, SecurityService];
