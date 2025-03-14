/**
 * index.js - Main JavaScript file for the homepage
 * 
 * Handles:
 * - Tool grid generation and display
 * - Search functionality
 * - Category filtering
 * - UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Generate tools grid
    generateToolsGrid(toolsData);
    
    // Set up search functionality
    setupSearch();
    
    // Set up category filters
    setupCategoryFilters();
});

/**
 * Generate the tools grid from the tools data
 * @param {Array} tools - Array of tool objects
 */
function generateToolsGrid(tools) {
    const toolsContainer = document.getElementById('toolsContainer');
    
    // Clear existing content
    toolsContainer.innerHTML = '';
    
    // Generate HTML for each tool
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
        toolCard.setAttribute('data-category', tool.category);
        
        toolCard.innerHTML = `
            <div class="card tool-card h-100">
                <div class="card-body text-center">
                    <span class="badge bg-secondary tool-category-badge">${getCategoryName(tool.category)}</span>
                    <div class="tool-icon">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h5 class="card-title">${tool.name}</h5>
                    <p class="card-text">${tool.description}</p>
                    <a href="${tool.url}" class="btn btn-primary btn-sm">Use Tool</a>
                    ${tool.popular ? '<span class="badge bg-danger ms-2">Popular</span>' : ''}
                </div>
            </div>
        `;
        
        toolsContainer.appendChild(toolCard);
    });
    
    // If no tools found, show message
    if (tools.length === 0) {
        document.getElementById('noResults').classList.remove('d-none');
    } else {
        document.getElementById('noResults').classList.add('d-none');
    }
}

/**
 * Set up the search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Get active category filter
        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
        
        // Filter tools based on search term and active category
        filterTools(searchTerm, activeCategory);
    });
}

/**
 * Set up category filter buttons
 */
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get search term
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            
            // Get selected category
            const selectedCategory = this.getAttribute('data-category');
            
            // Filter tools based on category and search term
            filterTools(searchTerm, selectedCategory);
        });
    });
}

/**
 * Filter tools based on search term and category
 * @param {string} searchTerm - Search term entered by user
 * @param {string} category - Selected category filter
 */
function filterTools(searchTerm, category) {
    let filteredTools;
    
    // Filter by category first (if not 'all')
    if (category === 'all') {
        filteredTools = [...toolsData];
    } else {
        filteredTools = toolsData.filter(tool => tool.category === category);
    }
    
    // Then filter by search term (if not empty)
    if (searchTerm) {
        filteredTools = filteredTools.filter(tool => {
            return (
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.id.toLowerCase().includes(searchTerm)
            );
        });
    }
    
    // Update the grid with filtered tools
    generateToolsGrid(filteredTools);
}

/**
 * Get user-friendly category name from category ID
 * @param {string} categoryId - Category identifier
 * @returns {string} Human-readable category name
 */
function getCategoryName(categoryId) {
    const categories = {
        'image': 'Image',
        'seo': 'SEO',
        'text': 'Text',
        'developer': 'Developer',
        'calculator': 'Calculator',
        'converter': 'Converter',
        'security': 'Security',
        'social': 'Social Media',
        'misc': 'Miscellaneous'
    };
    
    return categories[categoryId] || categoryId;
} 