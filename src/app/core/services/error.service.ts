import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrService: ToastrService) { }
 
  handleError(error: any) {
   this.toastrService.showToastr({
    category: 'danger',
    message: error.error.error.message /*Il y a 3 fois error car on utilise le backend de firebase (le message d'erreur se trouve dans cette objet) sinon 1 fois suffit */
   });
   return throwError(error);
  }
}