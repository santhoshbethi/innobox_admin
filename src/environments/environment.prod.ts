import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  headers: new HttpHeaders().set('accept', 'application/json'),
};
