import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

// export class TestimonialComponent implements AfterViewInit {

//   ngAfterViewInit(): void {

//     // Variables
//     // const testim = document.getElementById("testim") as HTMLElement;
//     const testimDots = Array.prototype.slice.call(document.getElementById("testim-dots")!.children) as HTMLElement[];
//     const testimContent = Array.prototype.slice.call(document.getElementById("testim-content")!.children) as HTMLElement[];
//     const testimLeftArrow = document.getElementById("left-arrow") as HTMLElement;
//     const testimRightArrow = document.getElementById("right-arrow") as HTMLElement;
//     const testimSpeed = 1000;
//     let currentSlide = 0;
//     let currentActive = 0;
//     let testimTimer: number;
//     /*     let touchStartPos: number | undefined;
//         let touchEndPos: number | undefined;
//         let touchPosDiff: number | undefined;
//         const ignoreTouch = 30; */

//     window.onload = function () {

//       // Testim Script
//       function playSlide(slide: number) {
//         for (let k = 0; k < testimDots.length; k++) {
//           testimContent[k].classList.remove("active");
//           testimContent[k].classList.remove("inactive");
//           testimDots[k].classList.remove("active");
//         }

//         if (slide < 0) {
//           slide = currentSlide = testimContent.length - 1;
//         }

//         if (slide > testimContent.length - 1) {
//           slide = currentSlide = 0;
//         }

//         if (currentActive !== currentSlide) {
//           testimContent[currentActive].classList.add("inactive");
//         }
//         testimContent[slide].classList.add("active");
//         testimDots[slide].classList.add("active");

//         currentActive = currentSlide;

//         clearTimeout(testimTimer);
//         testimTimer = window.setTimeout(function () {
//           playSlide(currentSlide += 1);
//         }, testimSpeed);
//       }

//       testimLeftArrow.addEventListener("click", function () {
//         playSlide(currentSlide -= 1);
//       });

//       testimRightArrow.addEventListener("click", function () {
//         playSlide(currentSlide += 1);
//       });

//       for (let l = 0; l < testimDots.length; l++) {
//         testimDots[l].addEventListener("click", function () {
//           playSlide(currentSlide = testimDots.indexOf(this as HTMLElement));
//         });
//       }

//       playSlide(currentSlide);

//       // For Arrows 'onTouch' functionality -->
//       /*  document.addEventListener("keyup", function (e: KeyboardEvent) {
//          switch (e.keyCode) {
//            case 37:
//              testimLeftArrow.click();
//              break;
 
//            case 39:
//              testimRightArrow.click();
//              break;
 
//            default:
//              break;
//          }
//        }); */

//       /* testim.addEventListener("touchstart", function (e: TouchEvent) {
//         touchStartPos = e.changedTouches[0].clientX;
//       });

//       testim.addEventListener("touchend", function (e: TouchEvent) {
//         touchEndPos = e.changedTouches[0].clientX;

//         touchPosDiff = touchStartPos! - touchEndPos;

//         if (touchPosDiff > 0 + ignoreTouch) {
//           testimLeftArrow.click();
//         } else if (touchPosDiff < 0 - ignoreTouch) {
//           testimRightArrow.click();
//         }
//       }); */

//     };




//   }

// }

export class TestimonialComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const testimDots = Array.from(document.getElementById('testim-dots')!.children) as HTMLElement[];
    const testimContent = Array.from(document.getElementById('testim-content')!.children) as HTMLElement[];
    const testimLeftArrow = document.getElementById('left-arrow') as HTMLElement;
    const testimRightArrow = document.getElementById('right-arrow') as HTMLElement;
    const testimSpeed = 5000;
    let currentSlide = 0;
    let currentActive = 0;
    let testimTimer: number;

    function playSlide(slide: number) {
      testimContent.forEach((content, index) => {
        content.classList.remove('active', 'inactive');
        testimDots[index].classList.remove('active');
      });

      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      } else if (slide >= testimContent.length) {
        slide = currentSlide = 0;
      }

      if (currentActive !== currentSlide) {
        testimContent[currentActive].classList.add('inactive');
      }
      testimContent[slide].classList.add('active');
      testimDots[slide].classList.add('active');

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = window.setTimeout(() => {
        playSlide(currentSlide += 1);
      }, testimSpeed);
    }

    testimLeftArrow.addEventListener('click', () => playSlide(currentSlide -= 1));
    testimRightArrow.addEventListener('click', () => playSlide(currentSlide += 1));

    testimDots.forEach((dot, index) => {
      dot.addEventListener('click', () => playSlide(currentSlide = index));
    });

    playSlide(currentSlide);
  }
}
