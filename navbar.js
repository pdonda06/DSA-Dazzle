// JavaScript to handle search functionality
document.querySelector('.navbar a').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the search input value
    var searchValue = document.querySelector('input[type="text"]').value.toLowerCase();

    // Check which card matches the search value
    switch (searchValue) {
        case 'basic':
            scrollToElementAndHighlight('basic');
            break;
        case 'comparison':
            scrollToElementAndHighlight('comparison');
            break;
        case 'sorting':
            scrollToElementAndHighlight('sorting');
            break;
        case 'tree':
            scrollToElementAndHighlight('tree');
            break;
        case 'graph':
            scrollToElementAndHighlight('graph');
            break;
        case 'hashing':
            scrollToElementAndHighlight('hashing');
            break;
        case 'searching':
            scrollToElementAndHighlight('searching');
            break;
        case 'sorting':
            scrollToElementAndHighlight('sorting');
            break;
        default:
            alert('No matching element found');
    }
});

// Function to scroll to the element by ID and highlight it
function scrollToElementAndHighlight(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add highlight animation
        element.style.transition = 'background-color 0.5s ease';
        element.style.backgroundColor = 'blue';

        // Reset the highlight after 1 second
        setTimeout(function () {
            element.style.backgroundColor = '';
        }, 1000);
    }
}
