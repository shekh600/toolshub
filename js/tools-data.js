/**
 * tools-data.js - Contains the data for all tools
 * This centralized data structure powers the homepage grid and search functionality
 */

const toolsData = [
    // Image Tools
    {
        id: "image-to-png",
        name: "Image to PNG Converter",
        description: "Convert JPG, WEBP, GIF, or other image formats to PNG format with transparency support.",
        category: "image",
        icon: "fas fa-file-image",
        url: "tools/image-to-png.html",
        popular: true
    },
    {
        id: "image-to-jpg",
        name: "Image to JPG Converter",
        description: "Convert PNG, WEBP, GIF, or other image formats to JPG/JPEG format.",
        category: "image",
        icon: "fas fa-file-image",
        url: "tools/image-to-jpg.html"
    },
    {
        id: "image-resizer",
        name: "Image Resizer",
        description: "Resize any image to a specific dimension while maintaining aspect ratio.",
        category: "image",
        icon: "fas fa-expand",
        url: "tools/image-resizer.html",
        popular: true
    },
    {
        id: "image-compressor",
        name: "Image Compressor",
        description: "Compress and optimize images to reduce file size while preserving quality.",
        category: "image",
        icon: "fas fa-compress",
        url: "tools/image-compressor.html",
        popular: true
    },
    {
        id: "image-cropper",
        name: "Image Cropper",
        description: "Crop any part of an image with precision using our interactive cropping tool.",
        category: "image",
        icon: "fas fa-crop",
        url: "tools/image-cropper.html"
    },
    {
        id: "image-to-base64",
        name: "Image to Base64",
        description: "Convert any image to a Base64 encoded string for embedding in CSS, HTML, or JSON.",
        category: "image",
        icon: "fas fa-code",
        url: "tools/image-to-base64.html"
    },
    {
        id: "webp-to-png",
        name: "WebP to PNG Converter",
        description: "Convert WebP images to PNG format with transparency support.",
        category: "image",
        icon: "fas fa-exchange-alt",
        url: "tools/webp-to-png.html"
    },
    {
        id: "gif-maker",
        name: "GIF Maker",
        description: "Create animated GIFs from a series of images or video clips.",
        category: "image",
        icon: "fas fa-film",
        url: "tools/gif-maker.html"
    },
    {
        id: "qr-code-generator",
        name: "QR Code Generator",
        description: "Generate custom QR codes for URLs, text, contact information, or WiFi passwords.",
        category: "image",
        icon: "fas fa-qrcode",
        url: "tools/qr-code-generator.html"
    },
    {
        id: "screenshot-to-pdf",
        name: "Screenshot to PDF",
        description: "Convert screenshots or other images into a PDF document.",
        category: "image",
        icon: "fas fa-file-pdf",
        url: "tools/screenshot-to-pdf.html"
    },

    // SEO Tools
    {
        id: "meta-tag-generator",
        name: "Meta Tag Generator",
        description: "Generate optimized meta tags for better SEO performance and social media sharing.",
        category: "seo",
        icon: "fas fa-tags",
        url: "tools/meta-tag-generator.html",
        popular: true
    },
    {
        id: "keyword-density-checker",
        name: "Keyword Density Checker",
        description: "Analyze your content to check keyword frequency and density for SEO optimization.",
        category: "seo",
        icon: "fas fa-percentage",
        url: "tools/keyword-density-checker.html"
    },
    {
        id: "sitemap-generator",
        name: "Sitemap Generator",
        description: "Create XML sitemaps for your website to help search engines index your content.",
        category: "seo",
        icon: "fas fa-sitemap",
        url: "tools/sitemap-generator.html",
        popular: true
    },
    {
        id: "robots-txt-generator",
        name: "Robots.txt Generator",
        description: "Create a robots.txt file to control how search engines crawl your site.",
        category: "seo",
        icon: "fas fa-robot",
        url: "tools/robots-txt-generator.html"
    },
    {
        id: "google-index-checker",
        name: "Google Index Checker",
        description: "Check if your pages are indexed by Google and other search engines.",
        category: "seo",
        icon: "fab fa-google",
        url: "tools/google-index-checker.html"
    },
    {
        id: "domain-authority-checker",
        name: "Domain Authority Checker",
        description: "Check the domain authority score of any website.",
        category: "seo",
        icon: "fas fa-globe",
        url: "tools/domain-authority-checker.html"
    },
    {
        id: "backlink-checker",
        name: "Backlink Checker",
        description: "Check the number and quality of backlinks pointing to a domain.",
        category: "seo",
        icon: "fas fa-link",
        url: "tools/backlink-checker.html"
    },
    {
        id: "page-speed-checker",
        name: "Page Speed Checker",
        description: "Analyze how fast your web pages load and get tips for improvement.",
        category: "seo",
        icon: "fas fa-tachometer-alt",
        url: "tools/page-speed-checker.html"
    },
    {
        id: "xml-sitemap-validator",
        name: "XML Sitemap Validator",
        description: "Validate your XML sitemap for errors and compliance with search engine requirements.",
        category: "seo",
        icon: "fas fa-file-code",
        url: "tools/xml-sitemap-validator.html"
    },
    {
        id: "mobile-friendly-test",
        name: "Mobile-Friendly Test",
        description: "Check if your website is optimized for mobile devices.",
        category: "seo",
        icon: "fas fa-mobile-alt",
        url: "tools/mobile-friendly-test.html"
    },

    // Text Tools
    {
        id: "word-counter",
        name: "Word Counter",
        description: "Count words, characters, sentences, and paragraphs in your text.",
        category: "text",
        icon: "fas fa-calculator",
        url: "tools/word-counter.html",
        popular: true
    },
    {
        id: "character-counter",
        name: "Character Counter",
        description: "Count characters, words, and lines in your text with or without spaces.",
        category: "text",
        icon: "fas fa-text-width",
        url: "tools/character-counter.html",
        popular: true
    },
    {
        id: "case-converter",
        name: "Case Converter",
        description: "Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.",
        category: "text",
        icon: "fas fa-font",
        url: "tools/case-converter.html",
        popular: true
    },
    {
        id: "plagiarism-checker",
        name: "Plagiarism Checker",
        description: "Check your content for potential plagiarism against online sources.",
        category: "text",
        icon: "fas fa-search",
        url: "tools/plagiarism-checker.html"
    },
    {
        id: "grammar-checker",
        name: "Grammar Checker",
        description: "Check your text for grammar, spelling, and punctuation errors.",
        category: "text",
        icon: "fas fa-spell-check",
        url: "tools/grammar-checker.html"
    },
    {
        id: "text-to-speech",
        name: "Text to Speech",
        description: "Convert written text to spoken words with natural-sounding voices.",
        category: "text",
        icon: "fas fa-volume-up",
        url: "tools/text-to-speech.html"
    },
    {
        id: "speech-to-text",
        name: "Speech to Text",
        description: "Convert spoken words to written text using speech recognition.",
        category: "text",
        icon: "fas fa-microphone",
        url: "tools/speech-to-text.html"
    },
    {
        id: "url-encoder-decoder",
        name: "URL Encoder & Decoder",
        description: "Encode or decode URLs for safe transmission over the internet.",
        category: "text",
        icon: "fas fa-link",
        url: "tools/url-encoder-decoder.html"
    },
    {
        id: "fancy-text-generator",
        name: "Fancy Text Generator",
        description: "Convert normal text to stylish Unicode text for social media and profiles.",
        category: "text",
        icon: "fas fa-magic",
        url: "tools/fancy-text-generator.html"
    },
    {
        id: "random-text-generator",
        name: "Random Text Generator",
        description: "Generate random placeholder text for designs, templates, and mockups.",
        category: "text",
        icon: "fas fa-random",
        url: "tools/random-text-generator.html"
    },

    // Developer Tools
    {
        id: "json-formatter",
        name: "JSON Formatter",
        description: "Format, validate, and beautify your JSON data with syntax highlighting.",
        category: "developer",
        icon: "fas fa-code",
        url: "tools/json-formatter.html",
        popular: true
    },
    {
        id: "html-to-markdown",
        name: "HTML to Markdown",
        description: "Convert HTML code to Markdown format for easier editing and readability.",
        category: "developer",
        icon: "fab fa-markdown",
        url: "tools/html-to-markdown.html"
    },
    {
        id: "css-minifier",
        name: "CSS Minifier",
        description: "Minify CSS code by removing spaces, comments, and other unnecessary characters.",
        category: "developer",
        icon: "fab fa-css3",
        url: "tools/css-minifier.html",
        popular: true
    },
    {
        id: "js-minifier",
        name: "JavaScript Minifier",
        description: "Minify JavaScript code to reduce file size and improve load time.",
        category: "developer",
        icon: "fab fa-js",
        url: "tools/js-minifier.html",
        popular: true
    },
    {
        id: "sql-formatter",
        name: "SQL Formatter",
        description: "Format SQL queries for better readability and debugging.",
        category: "developer",
        icon: "fas fa-database",
        url: "tools/sql-formatter.html"
    },
    {
        id: "htaccess-redirect-generator",
        name: "HTACCESS Redirect Generator",
        description: "Generate .htaccess redirect rules for your website.",
        category: "developer",
        icon: "fas fa-exchange-alt",
        url: "tools/htaccess-redirect-generator.html"
    },
    {
        id: "markdown-to-html",
        name: "Markdown to HTML",
        description: "Convert Markdown to HTML for web publishing.",
        category: "developer",
        icon: "fab fa-html5",
        url: "tools/markdown-to-html.html"
    },
    {
        id: "color-picker",
        name: "Color Code Picker",
        description: "Pick and convert colors between HEX, RGB, HSL, and more formats.",
        category: "developer",
        icon: "fas fa-palette",
        url: "tools/color-picker.html"
    },
    {
        id: "base64-encoder-decoder",
        name: "Base64 Encoder & Decoder",
        description: "Encode or decode Base64 strings and files.",
        category: "developer",
        icon: "fas fa-file-code",
        url: "tools/base64-encoder-decoder.html"
    },
    {
        id: "ip-lookup",
        name: "IP Address Lookup",
        description: "Get detailed information about any IP address.",
        category: "developer",
        icon: "fas fa-network-wired",
        url: "tools/ip-lookup.html"
    },

    // Math & Calculators
    {
        id: "percentage-calculator",
        name: "Percentage Calculator",
        description: "Calculate percentages, find what percent one number is of another, or find a number based on a percentage.",
        category: "calculator",
        icon: "fas fa-percent",
        url: "tools/percentage-calculator.html",
        popular: true
    },
    {
        id: "age-calculator",
        name: "Age Calculator",
        description: "Calculate your exact age in years, months, weeks, days, hours, and minutes.",
        category: "calculator",
        icon: "fas fa-birthday-cake",
        url: "tools/age-calculator.html"
    },
    {
        id: "bmi-calculator",
        name: "BMI Calculator",
        description: "Calculate your Body Mass Index (BMI) and get a health assessment.",
        category: "calculator",
        icon: "fas fa-weight",
        url: "tools/bmi-calculator.html"
    },
    {
        id: "loan-calculator",
        name: "Loan EMI Calculator",
        description: "Calculate monthly EMI payment for home, car, or personal loans.",
        category: "calculator",
        icon: "fas fa-money-bill-wave",
        url: "tools/loan-calculator.html",
        popular: true
    },
    {
        id: "scientific-calculator",
        name: "Scientific Calculator",
        description: "Perform advanced mathematical calculations with functions and constants.",
        category: "calculator",
        icon: "fas fa-calculator",
        url: "tools/scientific-calculator.html",
        popular: true
    },

    // Add the rest of the tools as needed...
    
    // These are just a few examples for each category to demonstrate the structure.
    // You would add all 100+ tools following this same format.
];

// Export the tools data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toolsData;
} 