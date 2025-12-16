import { Component } from '@angular/core';

type Testimonial = {
  text: string;
  name: string;
  role: 'Docente' | 'Estudiante';
};

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  currentSlide = 0;

  testimonials: Testimonial[] = [
    {
      text: 'Siempre busco nuevos métodos para hacer mis clases más divertidas y iRead cumplió con todo lo que estaba buscando',
      name: 'Elena Pérez',
      role: 'Docente',
    },
    {
      text: 'Las otras plataformas se me complican en usar. iRead es muy intuitiva y creo las historias para mi sesión de clase en menos tiempo que antes',
      name: 'Verónica Zambrano',
      role: 'Docente',
    },
    {
      text: 'Me aburre mucho hacer resúmenes o buscar palabras, pero al usar iRead hace que me sienta intrigada en las sesiones de clase de mi docente.',
      name: 'Andrea Vilela',
      role: 'Estudiante',
    },
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
