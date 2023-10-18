function setBackgroundPosition(xPosition, yPosition) {
    // Get the computed style of the <body> and <html> elements
    var bodyStyle = window.getComputedStyle(document.body);
    var htmlStyle = window.getComputedStyle(document.documentElement);

    // Check if a background image is set on the <body> or <html> elements
    var bodyBackground = bodyStyle.backgroundImage;
    var htmlBackground = htmlStyle.backgroundImage;

    if (bodyBackground && bodyBackground !== 'none') {
        document.body.style.backgroundPosition = `${xPosition} ${yPosition}`;
    } else if (htmlBackground && htmlBackground !== 'none') {
        document.documentElement.style.backgroundPosition = `${xPosition} ${yPosition}`;
    } else {
        console.log("No background image found to adjust its position.");
    }
}


setBackgroundPosition("-27em", "30em");     // Sets the background image position to 2em horizontally and 3em vertically
