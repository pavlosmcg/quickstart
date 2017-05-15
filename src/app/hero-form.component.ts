import { Component } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(f: NgForm): void {
    this.submitted = true;
   }

  newHero(): void {
      this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
