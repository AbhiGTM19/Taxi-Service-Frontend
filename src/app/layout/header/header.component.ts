import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toggle(): boolean {
    // Select the existing style element with id 'nightify' if it exists
    const existingStyle = document.querySelector<HTMLStyleElement>('#nightify');

    // Remove the style element if it exists
    if (existingStyle) {
      existingStyle.parentNode?.removeChild(existingStyle);
      return false;
    }

    // Create a new <style> element
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.setAttribute('id', 'nightify');

    // Add CSS rules for dark mode
    style.textContent = `
      body {
      filter: contrast(100%);
             background: #000000;
          color: #ffffff;
          transition: color 2.5s;
      }
      .dark-mode{
      filter : invert(100%);
      }
  `;

    // Append the <style> element to the <head>
    head.appendChild(style);

    return true;
  }

}
