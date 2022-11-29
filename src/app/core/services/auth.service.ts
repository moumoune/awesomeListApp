import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);
  readonly user$: Observable<User|null> = this.user.asObservable();

  constructor() { }

  login(email: string, password: string): Observable<User|null> {
    return of(new User());
  }
  register(name: string, email: string, password: string): Observable<User|null> {
    return of(new User());
   }
   

}
