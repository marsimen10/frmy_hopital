import { Component, OnInit } from '@angular/core';
import {Medecin} from '../model/Medecin';
import {MedecinsService} from '../../../services/medecins.service';

@Component({
  selector: 'ngx-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss'],
})
export class MedecinsComponent implements OnInit {
  medecins: Array<any> = [];
  medecin: Medecin = new Medecin();

  constructor(private medecinsService: MedecinsService) {
  }

  ngOnInit(): void {
    this.getAllMedcins();
  }



  getAllMedcins(): void {
    this.medecinsService.getAllMedecins().subscribe(data => {
      this.medecins = data;
    });
  }
  }


