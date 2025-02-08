function showContent(frontendDevelopmentPage) {
    // Hide all sections
    var sections = document.querySelectorAll('.frontend-content-section');
    sections.forEach(function(section) {
        section.classList.remove('active'); // Remove the 'active' class
    });

    // Show the clicked section
    var activeSection = document.getElementById(frontendDevelopmentPage);
    if (activeSection) {
        activeSection.classList.add('active'); // Add the 'active' class
    }
}


// console.log("HI ra pookie");


        // function showContent(frontendDevelopmentPage) {
        //     // Hide all sections
        //     var sections = document.querySelectorAll('.frontend-content-section');
        //     sections.forEach(function(section) {
        //         section.classList.remove('active'); // Remove the 'active' class
        //     });
    
        //     // Show the clicked section
        //     var activeSection = document.getElementById(frontendDevelopmentPage);
        //     if (activeSection) {
        //         activeSection.classList.add('active'); // Add the 'active' class
        //     }
        // }
