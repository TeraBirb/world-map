import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  template: `
    <div>
      <h2>World-Map Component</h2>
      <!-- <object type='image/svg+xml' data='./world-map.component.svg' (load)='onSvgLoad($event)'></object> -->
      <object data='../assets/world-map.svg' type='image/svg+xml' (load)='onSvgLoad($event)'><img src='../assets/world-map.svg' alt='world map image'><p>There was an error loading the SVG file. Fallback with limited functionality.</p></object>
    </div>
  `,
  // templateUrl: './world-map.component.svg',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  onSvgLoad(event) {
    const svgObject = <HTMLObjectElement>event.target;
    const svgDocument = svgObject.contentDocument;

    const paths = svgDocument.querySelectorAll('path');

    paths.forEach((path) => {
      path.addEventListener('click', (event) => this.onPathClick(event));
    })
  }

  onPathClick(event): void {
    console.log(event.target.getAttribute('title'));
    // Add your click handling logic here
  }
}
