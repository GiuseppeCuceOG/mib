import { Injectable } from '@angular/core';
import { Peppe, Danilo } from '../shared/peppedanilo';

@Injectable({
  providedIn: 'root'
})
export class CursedmemberfeatureService {

  constructor() { }

  getPeppeSkills() {
  	return Peppe;
  }

  getDaniloSkills() {
  	return Danilo;
  }
}
