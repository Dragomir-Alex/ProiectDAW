import { Component } from '@angular/core';

export interface AdoptedPets {
  name: string;
  position: number;
  adopted: number;
  available: number;
}

const ELEMENT_DATA: AdoptedPets[] = [
  {
    position: 1,
    name: 'Pisici',
    adopted: 231,
    available: 1,
  },
  {
    position: 2,
    name: 'Câini',
    adopted: 374,
    available: 1,
  },
  {
    position: 3,
    name: 'Iepuri',
    adopted: 116,
    available: 1,
  },
  {
    position: 4,
    name: 'Șopârle',
    adopted: 7,
    available: 1,
  },
  {
    position: 5,
    name: 'Papagali',
    adopted: 14,
    available: 1,
  },
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  displayedColumns: string[] = [
    'position',
    'name',
    'adopted',
    'available',
  ];
  dataSource = ELEMENT_DATA;
}
