import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-index',
  template: `
    <div class="overflow-hidden">
      <div
        class="flex flex-col shrink h-screen items-center justify-center m-x-10 w-full max-w-[1000px] mx-auto px-10"
      >
        <p class="animate-show-from-left text-8xl self-start">Hi</p>
        <div class="border-2 border-black rounded-xl w-full"></div>
        <p class="animate-show-from-right text-5xl mt-1 self-start">
          my name is Wiktoria
        </p>
        <p class="animate-show-from-hidden text-xl mt-2 self-start">
          and I am business analyst
        </p>
      </div>
    </div>
  `,
})
export default class HomeComponent {}
