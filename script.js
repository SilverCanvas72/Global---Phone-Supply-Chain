// script.js
const phoneContainer = document.getElementById('phoneContainer');
const phoneTitle = document.getElementById('phoneTitle');
const components = document.querySelectorAll('.component');

phoneContainer.addEventListener('mouseenter', () => {
    phoneTitle.style.opacity = '0'; // Hide the "Phone" title

    setTimeout(() => { 
        phoneTitle.style.display = 'none'; // Fully hide the "Phone" title after transition
        components.forEach((component, index) => {
            component.style.display = 'flex'; // Show components
            component.style.transform = 'translateY(0)'; // Bring components into view
        });
    }, 300); // Faster transition

    // Ensure all components are visible
    setTimeout(() => {
        components.forEach((component, index) => {
            component.style.opacity = '1';
        });
    }, 50); // Adjust timing for opacity transition
});

phoneContainer.addEventListener('mouseleave', () => {
    components.forEach(component => {
        component.style.opacity = '0'; // Fade out components
        component.style.transform = 'translateY(100%)'; // Move components off screen
    });

    setTimeout(() => {
        phoneTitle.style.display = 'flex'; // Show the "Phone" title again
        phoneTitle.style.opacity = '1'; // Fade in the "Phone" title
        // Reset component styles
        components.forEach(component => {
            component.style.display = 'none';
            component.style.transform = 'translateY(100%)';
        });
    }, 300); // Match the transition duration
});

components.forEach((component, index) => {
    component.addEventListener('mouseenter', () => {
        const distance = 50; // Adjust this value for spacing
        components.forEach((comp, i) => {
            if (comp !== component) {
                let translateY = 0;
                if (i < index) {
                    translateY = -Math.min((index - i) * distance, window.innerHeight - component.getBoundingClientRect().top);
                } else {
                    translateY = Math.min((i - index) * distance, window.innerHeight - component.getBoundingClientRect().bottom);
                }
                comp.style.transform = `translateY(${translateY}px)`;
                comp.style.opacity = '0.5';
            }
        });
        component.style.transform = 'translateY(0)';
        component.style.opacity = '1';
    });

    component.addEventListener('mouseleave', () => {
        components.forEach(comp => {
            comp.style.transform = 'translateY(0)';
            comp.style.opacity = '1';
        });
    });

    component.addEventListener('click', () => {
        window.location.href = component.id + '.html';
    });

    
});


/**/ 

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.circleContainer');
    containers.forEach(container => generateCircles(container, 25));
});

function generateCircles(container, numberOfCircles) {
    container.innerHTML = ''; // Clear existing circles

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        circle.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            circle.style.backgroundColor = randomColor;
        });

        circle.addEventListener('mouseout', () => {
            circle.style.backgroundColor = 'rgb(18, 19, 15)';
        });

        container.appendChild(circle);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

