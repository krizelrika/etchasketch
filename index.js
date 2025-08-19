// Global variables
let currentGridSize = 16;
const container = document.getElementById('container');
const newGridBtn = document.getElementById('new-grid-btn');
const gridSizeDisplay = document.getElementById('grid-size');

// Function to create the grid
function createGrid(size) {
    console.log(`Creating ${size}×${size} grid`); // Debug log
    
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate cell size (subtract 2px for borders to maintain square shape)
    const containerSize = Math.min(container.offsetWidth, container.offsetHeight);
    const cellSize = Math.floor((containerSize - (size * 2)) / size);
    
    console.log(`Container size: ${containerSize}px, Cell size: ${cellSize}px`); // Debug log
    
    // Create cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.flexShrink = '0'; // Prevent flex shrinking
        
        // Add progressive darkening hover effects
        cell.addEventListener('mouseenter', function() {
            let currentShade = 0;
            
            // Check current shade level
            for (let i = 1; i <= 10; i++) {
                if (this.classList.contains(`shade-${i}`)) {
                    currentShade = i;
                    break;
                }
            }
            
            // Move to next shade (max 10)
            if (currentShade < 10) {
                // Remove current shade class
                if (currentShade > 0) {
                    this.classList.remove(`shade-${currentShade}`);
                }
                
                // Add next shade class
                const nextShade = currentShade + 1;
                this.classList.add(`shade-${nextShade}`);
                
                // Set CSS variable for hover preview
                const shadeColors = [
                    '#FFF0F5', '#FFB6C1', '#FFC0CB', '#FF99AA', '#FF69B4',
                    '#FF1493', '#FF007F', '#E0115F', '#C71585', '#8B008B'
                ];
                
                if (nextShade < 10) {
                    this.style.setProperty('--next-shade', shadeColors[nextShade]);
                } else {
                    this.style.setProperty('--next-shade', shadeColors[9]);
                }
            }
        });
        
        // Optional: Remove color on mouse leave (uncomment if you want temporary trails)
        // cell.addEventListener('mouseleave', function() {
        //     this.classList.remove('drawn');
        // });
        
        container.appendChild(cell);
    }
    
    // Update grid size display
    gridSizeDisplay.textContent = `${size} × ${size}`;
    currentGridSize = size;
    
    console.log(`Grid created successfully with ${size * size} cells`); // Debug log
}

// Function to handle new grid creation
function createNewGrid() {
    let newSize = prompt('Enter the number of squares per side (max 100):', currentGridSize);
    
    // Validate input
    if (newSize === null) return; // User cancelled
    
    newSize = parseInt(newSize);
    
    if (isNaN(newSize) || newSize < 1) {
        alert('Please enter a valid number greater than 0');
        return;
    }
    
    if (newSize > 100) {
        alert('Maximum grid size is 100×100');
        return;
    }
    
    console.log(`User requested ${newSize}×${newSize} grid`); // Debug log
    createGrid(newSize);
}

// Event listeners
newGridBtn.addEventListener('click', createNewGrid);

// Initialize with default 16×16 grid when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, creating initial grid'); // Debug log
    
    // Small delay to ensure container is properly sized
    setTimeout(() => {
        createGrid(16);
    }, 100);
});

// Handle window resize to maintain grid proportions
window.addEventListener('resize', function() {
    console.log('Window resized, recreating grid'); // Debug log
    createGrid(currentGridSize);
});

// Console debugging helper
console.log('Sketch Grid initialized. Check elements in dev tools if needed.');