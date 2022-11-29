import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; /*BehaviorSubject cette classe qui va nous permettre de modéliser un état de nos données à travers toute l’application. Dans le cas de notre service de chargement, l’état des données sera « Est-ce que notre application attend la fin d’une opération asynchrone, ou non ? */

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly isLoading$: Observable<boolean> = this.isLoading.asObservable();
 
 setLoading(isLoading: boolean): void {
  this.isLoading.next(isLoading);
 }
  constructor() { }
}
