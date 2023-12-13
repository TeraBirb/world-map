import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  template: `
    <div>
      <h2>World-Map Component</h2>
      <!-- <object type="image/svg+xml" data="./world-map.component.svg" (load)="onSvgLoad($event)"></object> -->
      <object data="../assets/world-map.svg" type="image/svg+xml" (load)="onSvgLoad($event)"><img src="../assets/world-map.svg" alt="world map image"><p>There was an error loading the SVG file. Fallback with limited functionality.</p></object>
    </div>
  `,
  // templateUrl: './world-map.component.svg',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  onSvgLoad(event) {
    const svgObject = event.target as HTMLObjectElement;
    const svgDocument = svgObject.contentDocument;

    if (svgDocument) {
      const pathElement = svgDocument.getElementById('myPath');
      
      if (pathElement) {
        pathElement.addEventListener('click', () => this.onPathClick());
      }
    }
  }

  onPathClick(): void {
    console.log('Path clicked!');
    // Add your click handling logic here
  }
}
