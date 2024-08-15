import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // toggle(): boolean {
  //   // Select the existing style element with id 'nightify' if it exists
  //   const existingStyle = document.querySelector<HTMLStyleElement>('#nightify');

  //   // Remove the style element if it exists
  //   if (existingStyle) {
  //     existingStyle.parentNode?.removeChild(existingStyle);
  //     return false;
  //   }

  //   // Create a new <style> element
  //   const head = document.getElementsByTagName('head')[0];
  //   const style = document.createElement('style');
  //   style.setAttribute('type', 'text/css');
  //   style.setAttribute('id', 'nightify');

  //   // Add CSS rules for dark mode, excluding images
  //   style.textContent = `
  //       html {
  //           -webkit-filter: invert(100%) hue-rotate(90deg) contrast(100%);
  //           background: #fefefe;
  //       },
  //      html .frame-57 .img {
  //      -webkit-filter : none !important ;
  //      }

  //   `;

  //   // Append the <style> element to the <head>
  //   head.appendChild(style);

  //   return true;
  // }

  // script.ts or app.component.ts

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
      html {
            filter: contrast(100%);
             background: #000000;
      }
      body {
          color: #ffffff; /* Light text color */
          transition: background-color 0.3s, color 0.3s;
      }
      img, picture, svg {
          filter: none !important; /* Ensure images are not affected by dark mode filter */
      }
      .dark-mode-overlay {
          position: fixed;
          color: white;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0); /* Semi-transparent overlay to simulate dark mode */
          z-index: 999; /* Ensure it is above other content */
          pointer-events: none; /* Allow clicks to pass through */
      }
  `;

  // Append the <style> element to the <head>
  head.appendChild(style);

  // Add overlay div if not present
  if (!document.querySelector('.dark-mode-overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'dark-mode-overlay';
      document.body.appendChild(overlay);
  }

  return true;
}


}
