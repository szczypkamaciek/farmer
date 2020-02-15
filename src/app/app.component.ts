import {Component} from '@angular/core';
import {AnimalsData} from './AnimalsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'farmer';
  playerOneState = new AnimalsData().state;
  playerTwoState = new AnimalsData().state;
  // playerOneState.map(e => arrayPlayerOne.push(e));
  // arrayPlayerOne =

  sth = (animal) => {
    console.log('Animal: ' + animal);
    console.log(this.playerOneState);
    console.log(AnimalsData);
    // console.log(animalName + this.playerOneState[animalName].quantity);
    // console.log(animalName + this.playerOneState[animalName].value);
  }
}
