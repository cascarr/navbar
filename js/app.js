// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector('.nav-toggle');
const linkList = document.querySelector('.links');

toggleBtn.addEventListener('click', function() {

    // if (linkList.classList.contains('show-links')) {
    //     linkList.classList.remove('show-links');
    // } else {
    //     linkList.classList.add('show-links');
    // }

    // applying toggle using a one liner
    linkList.classList.toggle('show-links');

});