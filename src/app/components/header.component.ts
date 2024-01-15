import { Component, Input, Signal, inject } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <header>
        <div class="top-bar" [ngClass]="{'selected-menu': showHeaderBackground()}">
          <a class="menu-toggle cursor-pointer" [ngClass]="{'is-clicked': isMenuOpen}" (click)="$event.preventDefault(); toggleMenu()" href="#"><span>Menu</span></a>

          <div class="logo">
            <a href="#intro" style="font-family: 'italic-font';">{{
              author
            }}</a>
          </div>

          <nav id="main-nav-wrap">
            <ul class="main-navigation" [ngClass]="isMenuOpen ? 'block' : 'hidden'">
              <li class="current">
                <a class="smoothscroll" href="#intro" title="">Home</a>
              </li>
              <li><a class="smoothscroll" href="#about" title="">About</a></li>
              <li>
                <a class="smoothscroll" href="#resume" title="">Resume</a>
              </li>
              <li>
                <a class="smoothscroll" href="#portfolio" title="">Portfolio</a>
              </li>
              <li>
                <a class="smoothscroll" href="#services" title="">Services</a>
              </li>
              <li>
                <a class="smoothscroll" href="#contact" title="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent {
  private headerService = inject(HeaderService);
  @Input() public author: string = '';
  public showHeaderBackground: Signal<boolean> =
    this.headerService.visibleHeaderBackgroundSignal;
  public isMenuOpen: boolean = false;  


  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
    //is-clicked
}
