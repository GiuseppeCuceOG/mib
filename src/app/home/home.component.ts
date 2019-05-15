import { Component, OnInit } from '@angular/core';
import { CursedmemberfeatureService } from '../services/cursedmemberfeature.service';
import { cursdMember } from '../shared/cursdmember';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  peppeSkills: cursdMember[];
  daniloSkills: cursdMember[];

  constructor(private cmService: CursedmemberfeatureService) { }

  ngOnInit() {
  	//this.peppeSkills = this.cmService.getPeppeSkills();
  	//this.daniloSkills = this.cmService.getDaniloSkills();
  }

}