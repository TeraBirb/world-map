import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  posts: object;
  countryId: string;
  info: object;

  constructor(private httpService: HttpService) {}

  onSvgLoad(event) {
    const svgObject = <HTMLObjectElement>event.target;
    const svgDocument = svgObject.contentDocument;

    const paths = svgDocument.querySelectorAll('path');

    paths.forEach((path) => {
      path.addEventListener('click', (event) => this.onCountryClick(event));
    })
  }

  onCountryClick(event) {
    // console.log(event.target.getAttribute('title'));
    this.countryId = event.target.getAttribute('id');

    this.httpService.callAPI(this.countryId).subscribe(
      (response) => { this.displayInfo(response); },
      (error) => { console.log(error); });
  }

  displayInfo(response) {
    this.info = response[1][0];
    console.log(this.info);
  }


}
