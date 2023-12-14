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

  onSvgLoad(event: Event) {
    const svgObject: HTMLObjectElement = <HTMLObjectElement>event.target;
    const svgDocument: Document = svgObject.contentDocument;

    const paths: NodeListOf<SVGPathElement> = svgDocument.querySelectorAll('path');

    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', (event: MouseEvent) => this.onCountryClick(event));
    })
  }

  onCountryClick(event: MouseEvent) {
    this.countryId = (event.target as HTMLElement).getAttribute('id');

    this.httpService.callAPI(this.countryId).subscribe(
      (response) => { this.displayInfo(response); },
      (error) => { console.log(error); });
  }

  displayInfo(response: object) {
    this.info = response[1][0];
    console.log(this.info);
  }


}
