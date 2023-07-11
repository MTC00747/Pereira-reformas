import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  images = [
    '/assets/imagens/Banner.jpg',
    '/assets/imagens/3a9ef9d6-ffd9-4e58-aa80-66fbccec6b4c.jpeg',
    '/assets/imagens/imagem.jpeg',
    '/assets/imagens/image.png'
    // adicione mais URLs de imagens aqui
  ];

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
