import { KeyValue } from '@angular/common';
import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  sidebarCollapsed: WritableSignal<boolean> = signal(true);

  setSidebarCollapsed(value: boolean) {
    console.log(value);
    this.sidebarCollapsed.set(value);
  }
}
