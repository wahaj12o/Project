currentIndex = 0 ; // Initially carousel pai slider ki poistion one hoti hai

        function reflex(direction) { //reflex ek function hai jou carousel ko move karnai kai kaam ata hai and direction ek parameter hai jou 1 ya -1 hoti hai. 1 means next slide and -1 last slide
            const carouselWrapper = document.getElementById('carousel-wrapper'); //carouselWrapper mein humne id='carouselWrapper' ko select kiya, jisme sab images (slides) hain.
            const items = document.querySelectorAll('.carousel-items'); //items mein humne .carousel-item ko select kiya, jo har ek individual slide hai.
            const totalItems = items.length; //totalItems mein total slides ki number ko store kar rahe hain.
            currentIndex =currentIndex + direction; //currentIndex ko direction ke hisaab se increase ya decrease kiya jaata hai.

//Agar direction = 1 hai (next button click), toh currentIndex ko ek step aage badhate hain.

//Agar direction = -1 hai (previous button click), toh currentIndex ko ek step pichhe le jaate hain.

/* Handling wrap around edges*/

//Jab hum first slide pe hote hain aur previous button click karte hain, toh currentIndex ko last slide par le aate hain.

//Agar hum last slide pe hain aur next button click karte hain, toh hum first slide pe chala jaate hain.

//Ye wrap-around logic ensure karta hai ke jab hum first ya last slide pe pahuch jayein, toh hum proper slide pe move karte hain.
            if (currentIndex < 0) {
                currentIndex = totalItems - 1;
            } else if (currentIndex >= totalItems) {
                currentIndex = 0;
            }

// Apply Transformation

            //Jab hum first slide pe hote hain aur previous button click karte hain, toh currentIndex ko last slide par le aate hain.

            //Agar hum last slide pe hain aur next button click karte hain, toh hum first slide pe chala jaate hain. 

            //Ye wrap-around logic ensure karta hai ke jab hum first ya last slide pe pahuch jayein, toh hum proper slide pe move karte hain.
            const offset = -currentIndex * 100; // Move by 100% per slide
            carouselWrapper.style.transform = `translateX(${offset}%)`; //// Apply the translation to move the carousel
        }    
        
         // Function to scroll navbar
         function scrollNavbar(value) {
            document.getElementById("navbar").scrollLeft += value;  // Adjust the navbar scroll position by 'value'
        }