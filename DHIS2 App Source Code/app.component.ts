import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

myimage = 'src/assets/images/dhis image 2.jpeg';

loadedFeature = 'home';

implementComponent(feature: string) {
  this.loadedFeature = feature;}

  images = [
    {
      imageSrc:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.openhealthnews.com%2Fsites%2Fopenhealthnews.com%2Ffiles%2Fdhis2_dashboard_screenshot.png&tbnid=NMMADFgnKcpEIM&vet=12ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygBegQIARBN..i&imgrefurl=https%3A%2F%2Fwww.openhealthnews.com%2Fresources%2Fdistrict-health-information-system-2-dhis2&docid=yLNubEkjoDhOxM&w=1200&h=629&q=dhis%202%20images&ved=2ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygBegQIARBN',
      imageAlt: 'nature 1'
    },

    {
      imageSrc:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Fcontent.dhis2.org%2Freleases%2Fscreenshots%2F29%2Fdashboard-view.png&tbnid=9lsQS5EU6mGcZM&vet=12ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygDegQIARBR..i&imgrefurl=https%3A%2F%2Fdhis2.org%2Fes%2Foverview%2Fversion-229%2F&docid=plHNOY_kd86SQM&w=1280&h=916&q=dhis%202%20images&ved=2ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygDegQIARBR',
      imageAlt: 'nature 2'
    },

    {
      imageSrc:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdhis2.org%2Fwp-content%2Fuploads%2F236scatterplot2-720x411.png&tbnid=vsBXbWQZQwnPvM&vet=12ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygFegQIARBV..i&imgrefurl=https%3A%2F%2Fdhis2.org%2Foverview%2Fversion-236%2F&docid=YShuuox_sWgzhM&w=720&h=411&q=dhis%202%20images&ved=2ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygFegQIARBV',
      imageAlt: 'nature 3'
    },

    {
      imageSrc:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F316619278%2Ffigure%2Ffig1%2FAS%3A489445733474305%401493704364480%2FDHIS2-Architecture.png&tbnid=z5FiYwDOb2zDUM&vet=12ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygIegQIARBb..i&imgrefurl=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FDHIS2-Architecture_fig1_316619278&docid=yPrzKgbXIrAetM&w=850&h=542&q=dhis%202%20images&ved=2ahUKEwiSrazUu_KAAxVImScCHQYpAmMQMygIegQIARBb',
      imageAlt: 'nature 4'
    },
  ]

}


