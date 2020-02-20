import {Component, OnInit} from '@angular/core';
import {AnimalsData} from './AnimalsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'farmer';
  public playerOneState;
  public playerTwoState;

  ngOnInit(): void {
    this.playerOneState = new AnimalsData().state;
    this.playerTwoState = new AnimalsData().state;
  }
}
