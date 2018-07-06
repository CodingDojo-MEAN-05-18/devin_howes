import { AuthService } from './auth.service';
import { BikeService } from './bike.service';

export const services: any[] = [AuthService, BikeService];

export * from './auth.service';
export * from './bike.service';
