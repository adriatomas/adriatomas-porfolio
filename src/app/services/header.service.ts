import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeaderService {

  private _visibleHeaderBackground: WritableSignal<boolean> = signal<boolean>(false);

  get visibleHeaderBackgroundSignal(): Signal<boolean> {
    return this._visibleHeaderBackground;
  }

  set visibleHeaderBackground(value: boolean) {
    this._visibleHeaderBackground.set(value)
  }
  
}