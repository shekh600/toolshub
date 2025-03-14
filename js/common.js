/**
 * common.js - Shared JavaScript functionality across all pages
 * 
 * Handles:
 * - Dynamic header and footer inclusion
 * - Path correction for header/footer links
 * - Night mode toggle
 * - Other common UI functions
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeaderAndFooter();
    
    // Initialize tooltips and popovers if Bootstrap is used
    initializeBootstrapComponents();
});

/**
 * Load the header and footer into the page
 */
function loadHeaderAndFooter() {
    // Better path detection logic
    const pathParts = window.location.pathname.split('/');
    const isToolPage = pathParts.includes('tools') || window.location.pathname.includes('/tools/');
    const basePath = isToolPage ? '../' : './';
    
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch(`${basePath}header.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                headerPlaceholder.innerHTML = html;
                
                // Fix header links if in tool page
                if (isToolPage) {
                    adjustHeaderLinks();
                }
                
                // Initialize header interactive elements after loading
                initializeHeaderElements();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                headerPlaceholder.innerHTML = `
                    <header>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container">
                                <a class="navbar-brand" href="${isToolPage ? '../' : './'}index.html">
                                    <i class="fas fa-tools me-2"></i>Multi-Tools Hub
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </nav>
                    </header>
                `;
            });
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch(`${basePath}footer.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
                
                // Fix footer links if in tool page
                if (isToolPage) {
                    adjustFooterLinks();
                }
                
                // Update copyright year
                const yearSpan = document.getElementById('current-year');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                }
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                footerPlaceholder.innerHTML = `
                    <footer class="bg-dark text-white">
                        <div class="container py-3">
                            <div class="copyright text-center">
                                <p>&copy; ${new Date().getFullYear()} Multi-Tools Hub. All Rights Reserved.</p>
                            </div>
                        </div>
                    </footer>
                `;
            });
    }
}

/**
 * Adjust header links when in tool pages
 */
function adjustHeaderLinks() {
    // Fix the paths in the header for tool pages
    setTimeout(() => {
        // Fix navbar brand link
        const navbarBrand = document.querySelector('.navbar-brand');
        if (navbarBrand) {
            navbarBrand.href = '../index.html';
        }
        
        // Fix navbar links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.href.includes('index.html')) {
                link.href = '../index.html';
            }
        });
        
        // Fix dropdown menu links
        const dropdownLinks = document.querySelectorAll('.dropdown-item');
        dropdownLinks.forEach(link => {
            if (link.href.includes('tools/')) {
                const toolName = link.href.split('/').pop();
                link.href = toolName;
            }
        });
    }, 100);
}

/**
 * Adjust footer links when in tool pages
 */
function adjustFooterLinks() {
    // Fix the paths in the footer for tool pages
    setTimeout(() => {
        const footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            if (link.href.includes('index.html')) {
                link.href = '../index.html';
            } else if (link.href.includes('tools/')) {
                const toolName = link.href.split('/').pop();
                link.href = toolName;
            } else if (link.href.includes('privacy-policy.html')) {
                link.href = '../privacy-policy.html';
            } else if (link.href.includes('terms-of-service.html')) {
                link.href = '../terms-of-service.html';
            }
        });
    }, 100);
}

/**
 * Initialize Bootstrap components
 */
function initializeBootstrapComponents() {
    // Initialize tooltips if Bootstrap is loaded
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        
        // Initialize popovers
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    }
}

/**
 * Initialize dropdown functionality and other header elements
 */
function initializeHeaderElements() {
    // If Bootstrap JS is not loaded, handle dropdown functionality manually
    if (typeof bootstrap === 'undefined') {
        const dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function(e) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.classList.toggle('show');
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.nextElementSibling.classList.remove('show');
                    }
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', function closeDropdown(e) {
                    if (!dropdown.contains(e.target)) {
                        menu.classList.remove('show');
                        document.removeEventListener('click', closeDropdown);
                    }
                });
            });
        });
    }
}

/**
 * Show a notification message to the user
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success, error, warning, info)
 * @param {number} duration - How long to show the message (in ms)
 */
function showNotification(message, type = 'info', duration = 3000) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add to the DOM
    document.body.appendChild(notification);
    
    // Show the notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide and remove after duration
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

/**
 * Copy text to clipboard with notification
 * @param {string} text - The text to copy
 * @param {string} successMessage - Message to show on success
 */
function copyToClipboard(text, successMessage = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text)
        .then(() => {
            showNotification(successMessage, 'success');
        })
        .catch(err => {
            showNotification('Failed to copy: ' + err, 'error');
        });
} 