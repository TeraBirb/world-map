import { Component, Renderer2, NgZone } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent {

  countryId: string = "";
  info: any;
  countryName: string = "";
  capital: string = "";
  region: string = "";
  income: string = "";
  latitude: string = "";
  longitude: string = "";

  constructor(private httpService: HttpService, private renderer: Renderer2, private ngZone: NgZone) {}

  onSvgLoad(event: Event) {
    const svgObject: HTMLObjectElement = <HTMLObjectElement>event.target;
    const svgDocument: Document = svgObject.contentDocument;

    const paths: NodeListOf<SVGPathElement> = svgDocument.querySelectorAll('path');

    paths.forEach((path: SVGPathElement) => {
      path.addEventListener('click', (event: MouseEvent) => this.onCountryClick(event));
      path.addEventListener('mouseenter', (event) => this.onMouseEnter(event));
      path.addEventListener('mouseleave', (event) => this.onMouseLeave(event));
    })
  }

  onCountryClick(event: MouseEvent) {
    this.countryId = (event.target as HTMLElement).getAttribute('id');
    // deprecated solution, still functional as of angular/cli @ 17.0    
    this.httpService.setCountryInfo(this.countryId).subscribe(
      (response) => { this.displayInfo(response) },
      (error) => { console.log(error); });
  }

  onMouseEnter(event) {
    this.renderer.setStyle(event.target, 'fill', 'firebrick');
  }

  onMouseLeave(event) {
    this.renderer.setStyle(event.target, 'fill', 'black');
  }

  displayInfo(response) {
    // ngZone.run() allows listening for dynamic updates to html <li> values
    this.ngZone.run(() => {
      this.info = response[1][0];

      this.countryName = this.info.name;
      this.capital = this.info.capitalCity;
      this.region = this.info.region.value;
      this.income = this.info.incomeLevel.value;
      this.latitude = this.info.latitude;
      this.longitude = this.info.longitude;
    });    
  }


}
