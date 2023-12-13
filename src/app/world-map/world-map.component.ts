import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  url = 'https://api.worldbank.org/V2/';

  onSvgLoad(event) {
    const svgObject = <HTMLObjectElement>event.target;
    const svgDocument = svgObject.contentDocument;

    const paths = svgDocument.querySelectorAll('path');

    paths.forEach((path) => {
      path.addEventListener('click', (event) => this.onPathClick(event));
    })
  }

  onPathClick(event) {
    console.log(event.target.getAttribute('title'));
  }
}
