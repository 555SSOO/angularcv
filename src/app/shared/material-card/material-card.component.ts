import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss']
})
export class MaterialCardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageURI: string;

  constructor() { }

  ngOnInit() {
  }

}
