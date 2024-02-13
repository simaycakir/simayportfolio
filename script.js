

var name = prompt("Your Name:");
alert("Hello, " + name + " Welcome.");

document.addEventListener('DOMContentLoaded', function() {
    
    var images = document.querySelectorAll('.proje, .proje2, .proje3');

    
    images.forEach(function(image) {
    
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease-in-out';
        });

       
        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
    });
});






document.addEventListener("DOMContentLoaded", function() {
    
    var images = document.querySelectorAll('.photos img');

    
    images.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)'; 
            img.style.transition = 'transform 0.3s'; 
        });

    
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
});


document.addEventListener('mousemove', function(event) {
    
    var x = event.clientX;
    var y = event.clientY;

    
    var cursorTrail = document.getElementById('cursor-trail');
    var trailLine = document.createElement('div');
    trailLine.classList.add('cursor-trail-line');
    trailLine.style.top = y + 'px';
    trailLine.style.left = x + 'px';

    
    cursorTrail.appendChild(trailLine);
    setTimeout(function() {
        cursorTrail.removeChild(trailLine);
    }, 150);

    
    var size = 5; 
    trailLine.style.width = size + 'px';
    trailLine.style.height = size + 'px';
    trailLine.style.borderRadius = '50%'; 
    trailLine.style.backgroundColor = 'black'; 
    trailLine.style.transform = 'translate(-50%, -50%)'; 
});

