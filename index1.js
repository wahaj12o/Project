function scrollNavbar(amount) {
    const scroller = document.getElementById("navbarScroller");
    // scrollBy modern browsers mein smooth chalta hai
    scroller.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}