// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (!nav.contains(event.target) && !menuBtn.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// STATIC AUCTION SYSTEM - You Control Everything Manually

// When someone places a bid, it emails you
document.getElementById('placeBid').addEventListener('click', function() {
    const bidAmount = parseInt(document.getElementById('bidAmount').value);
    const currentBid = 1200; // YOU UPDATE THIS MANUALLY IN HTML
    const minIncrement = 5;
    
    if (isNaN(bidAmount)) {
        alert('Please enter a valid bid amount');
        return;
    }
    
    if (bidAmount >= currentBid + minIncrement) {
        const bidderName = prompt('Enter your name/instagram handle:') || 'anonymous';
        
        // Create a form to send bid to your email
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://formsubmit.co/kvn41171@gmail.com';
        form.style.display = 'none';
        
        // Add hidden inputs
        const subject = document.createElement('input');
        subject.type = 'hidden';
        subject.name = '_subject';
        subject.value = `New Bid: N$${bidAmount} for Doc Martens Ricks`;
        
        const template = document.createElement('input');
        template.type = 'hidden';
        template.name = '_template';
        template.value = 'table';
        
        const bidder = document.createElement('input');
        bidder.type = 'hidden';
        bidder.name = 'bidder';
        bidder.value = bidderName;
        
        const amount = document.createElement('input');
        amount.type = 'hidden';
        amount.name = 'amount';
        amount.value = bidAmount;
        
        const item = document.createElement('input');
        item.type = 'hidden';
        item.name = 'item';
        item.value = 'Doc Martens Ricks';
        
        const honey = document.createElement('input');
        honey.type = 'text';
        honey.name = '_honey';
        honey.style.display = 'none';
        
        form.appendChild(subject);
        form.appendChild(template);
        form.appendChild(bidder);
        form.appendChild(amount);
        form.appendChild(item);
        form.appendChild(honey);
        document.body.appendChild(form);
        
        // Show success message
        alert(`Bid of N$${bidAmount} submitted! We'll email you if you win.`);
        document.getElementById('bidAmount').value = '';
        
        // Submit the form
        setTimeout(() => {
            form.submit();
            document.body.removeChild(form);
        }, 100);
        
        // Show note about manual updates
        setTimeout(() => {
            showSuccess(`Bid submitted! We'll review it and manually update the website with the new highest bid. Check back soon!`);
        }, 500);
    } else {
        alert(`Bid must be at least N$${currentBid + minIncrement}`);
    }
});

// For second auction item
document.querySelector('[data-auction="floral-jacket"]').addEventListener('click', function() {
    const bidAmount = parseInt(document.getElementById('bidAmount2').value);
    const currentBid = 850; // YOU UPDATE THIS MANUALLY IN HTML
    const minIncrement = 5;
    
    if (isNaN(bidAmount)) {
        alert('Please enter a valid bid amount');
        return;
    }
    
    if (bidAmount >= currentBid + minIncrement) {
        const bidderName = prompt('Enter your name/instagram handle:') || 'anonymous';
        
        // Create a form to send bid to your email
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://formsubmit.co/kvn41171@gmail.com';
        form.style.display = 'none';
        
        const subject = document.createElement('input');
        subject.type = 'hidden';
        subject.name = '_subject';
        subject.value = `New Bid: N$${bidAmount} for Floral Denim Jacket`;
        
        const template = document.createElement('input');
        template.type = 'hidden';
        template.name = '_template';
        template.value = 'table';
        
        const bidder = document.createElement('input');
        bidder.type = 'hidden';
        bidder.name = 'bidder';
        bidder.value = bidderName;
        
        const amount = document.createElement('input');
        amount.type = 'hidden';
        amount.name = 'amount';
        amount.value = bidAmount;
        
        const item = document.createElement('input');
        item.type = 'hidden';
        item.name = 'item';
        item.value = 'Floral Denim Jacket';
        
        const honey = document.createElement('input');
        honey.type = 'text';
        honey.name = '_honey';
        honey.style.display = 'none';
        
        form.appendChild(subject);
        form.appendChild(template);
        form.appendChild(bidder);
        form.appendChild(amount);
        form.appendChild(item);
        form.appendChild(honey);
        document.body.appendChild(form);
        
        alert(`Bid of N$${bidAmount} submitted! We'll email you if you win.`);
        document.getElementById('bidAmount2').value = '';
        
        setTimeout(() => {
            form.submit();
            document.body.removeChild(form);
        }, 100);
        
        setTimeout(() => {
            showSuccess(`Bid submitted! We'll review it and manually update the website.`);
        }, 500);
    } else {
        alert(`Bid must be at least N$${currentBid + minIncrement}`);
    }
});

// Simple static countdown display (doesn't actually count down)
function showStaticCountdown() {
    // Display a note in console for you (the admin)
    console.log('%c🔨 AUCTION ADMIN NOTE:', 'color: #FF6B6B; font-size: 14px; font-weight: bold;');
    console.log('%cYou control the auction manually. Update these in the HTML:', 'color: #FFD166;');
    console.log('1. Current bid amounts in <strong> tags');
    console.log('2. High bidder names');
    console.log('3. Countdown timer display');
    console.log('4. Time left text');
    console.log('%cWhen you receive bids via email, update the HTML manually.', 'color: #06D6A0;');
}

// Shop Filtering
document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');
        
        // Update active filter
        document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        
        // Filter products
        document.querySelectorAll('.product-card').forEach(product => {
            if (filterValue === 'all' || product.getAttribute('data-category') === filterValue) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(message, fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    alert(message);
}

function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Form Submission Handling
function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<div class="spinner"></div> Processing...';
    button.classList.add('btn-loading');
    button.disabled = true;
    return originalText;
}

function hideLoading(button, originalText) {
    button.innerHTML = originalText;
    button.classList.remove('btn-loading');
    button.disabled = false;
}

function showSuccess(message) {
    const modal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

// IMAGE UPLOAD PREVIEW FOR CONSIGNMENT FORM
function setupImageUploadPreview() {
    const photoUpload = document.getElementById('photoUpload');
    const uploadPreview = document.getElementById('uploadPreview');
    const previewContainer = document.getElementById('previewContainer');
    
    if (photoUpload && uploadPreview && previewContainer) {
        photoUpload.addEventListener('change', function(e) {
            const files = Array.from(this.files);
            previewContainer.innerHTML = '';
            
            if (files.length > 0) {
                uploadPreview.style.display = 'block';
                
                // Limit to 5 files
                if (files.length > 5) {
                    alert('Maximum 5 images allowed. Only the first 5 will be uploaded.');
                    // Create new DataTransfer with only first 5 files
                    const dt = new DataTransfer();
                    files.slice(0, 5).forEach(file => dt.items.add(file));
                    this.files = dt.files;
                    files.splice(5); // Keep only first 5 for preview
                }
                
                files.forEach((file, index) => {
                    if (file.type.startsWith('image/')) {
                        // Check file size (5MB max)
                        if (file.size > 5 * 1024 * 1024) {
                            alert(`File "${file.name}" exceeds 5MB limit. Please compress or resize it.`);
                            // Remove this file
                            const dt = new DataTransfer();
                            Array.from(photoUpload.files).forEach((f, i) => {
                                if (i !== index) dt.items.add(f);
                            });
                            photoUpload.files = dt.files;
                            return;
                        }
                        
                        const reader = new FileReader();
                        
                        reader.onload = function(e) {
                            const imgWrapper = document.createElement('div');
                            imgWrapper.className = 'preview-item';
                            imgWrapper.style.cssText = `
                                position: relative;
                                width: 80px;
                                height: 80px;
                                border: 1px solid var(--border);
                                border-radius: 4px;
                                overflow: hidden;
                                background: var(--surface-light);
                            `;
                            
                            const img = document.createElement('img');
                            img.src = e.target.result;
                            img.style.cssText = `
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            `;
                            
                            const removeBtn = document.createElement('button');
                            removeBtn.type = 'button';
                            removeBtn.innerHTML = '×';
                            removeBtn.title = 'Remove this image';
                            removeBtn.style.cssText = `
                                position: absolute;
                                top: 2px;
                                right: 2px;
                                background: #ff6b6b;
                                color: white;
                                border: none;
                                border-radius: 50%;
                                width: 20px;
                                height: 20px;
                                font-size: 12px;
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                z-index: 2;
                            `;
                            
                            removeBtn.addEventListener('click', function(e) {
                                e.preventDefault();
                                // Remove file from input
                                const dt = new DataTransfer();
                                Array.from(photoUpload.files).forEach((f, i) => {
                                    if (i !== index) dt.items.add(f);
                                });
                                photoUpload.files = dt.files;
                                
                                // Remove preview
                                imgWrapper.remove();
                                
                                // Hide preview container if no files
                                if (photoUpload.files.length === 0) {
                                    uploadPreview.style.display = 'none';
                                }
                            });
                            
                            imgWrapper.appendChild(img);
                            imgWrapper.appendChild(removeBtn);
                            previewContainer.appendChild(imgWrapper);
                        };
                        
                        reader.readAsDataURL(file);
                    } else {
                        alert(`File "${file.name}" is not an image. Please select image files only.`);
                        // Remove non-image file
                        const dt = new DataTransfer();
                        Array.from(photoUpload.files).forEach((f, i) => {
                            if (i !== index) dt.items.add(f);
                        });
                        photoUpload.files = dt.files;
                    }
                });
            } else {
                uploadPreview.style.display = 'none';
            }
        });
    }
}

// CONFIRMATION FOR NO PHOTOS
function confirmNoPhotos() {
    const photoUpload = document.getElementById('photoUpload');
    const photoLinks = document.getElementById('photoLinks').value.trim();
    
    if (photoUpload.files.length === 0 && !photoLinks) {
        return confirm('No photos provided. Are you sure you want to submit without photos?');
    }
    return true;
}

// Consignment Form Validation with File Upload Support
const consignmentForm = document.getElementById('consignmentForm');
const consignmentSubmit = document.getElementById('consignmentSubmit');

if (consignmentForm) {
    consignmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearError('name');
        clearError('email');
        clearError('items');
        
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name').value.trim();
        if (!name) {
            showError('Please enter your name', 'name');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email').value.trim();
        if (!email || !validateEmail(email)) {
            showError('Please enter a valid email address', 'email');
            isValid = false;
        }
        
        // Validate items
        const items = document.getElementById('items').value.trim();
        if (!items) {
            showError('Please describe the items', 'items');
            isValid = false;
        }
        
        // Check if photos provided
        if (!confirmNoPhotos()) {
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Show loading state
        const originalText = showLoading(consignmentSubmit);
        const fileCount = document.getElementById('photoUpload').files.length;
        
        // Update button text if uploading files
        if (fileCount > 0) {
            consignmentSubmit.innerHTML = `<div class="spinner"></div> Uploading ${fileCount} image${fileCount > 1 ? 's' : ''}...`;
        }
        
        // Submit form
        setTimeout(() => {
            this.submit();
            hideLoading(consignmentSubmit, originalText);
            
            // Show appropriate success message
            if (fileCount > 0) {
                showSuccess(`Your consignment request with ${fileCount} image${fileCount > 1 ? 's' : ''} has been submitted! We'll review your items and contact you within 24 hours.`);
            } else {
                showSuccess('Your consignment request has been submitted! We\'ll review your items and contact you within 24 hours.');
            }
            
            // Reset form but keep file input clear
            this.reset();
            const uploadPreview = document.getElementById('uploadPreview');
            const previewContainer = document.getElementById('previewContainer');
            if (uploadPreview) uploadPreview.style.display = 'none';
            if (previewContainer) previewContainer.innerHTML = '';
        }, 1500);
    });
}

// Commission Form Validation
const commissionForm = document.getElementById('commissionForm');
const commissionSubmit = document.getElementById('commissionSubmit');

if (commissionForm) {
    commissionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        clearError('clientName');
        clearError('clientEmail');
        clearError('itemType');
        clearError('design');
        clearError('budget');
        clearError('timeline');
        
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('clientName').value.trim();
        if (!name) {
            showError('Please enter your name', 'clientName');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('clientEmail').value.trim();
        if (!email || !validateEmail(email)) {
            showError('Please enter a valid email address', 'clientEmail');
            isValid = false;
        }
        
        // Validate item type
        const itemType = document.getElementById('itemType').value;
        if (!itemType) {
            showError('Please select an item type', 'itemType');
            isValid = false;
        }
        
        // Validate design description
        const design = document.getElementById('designDescription').value.trim();
        if (!design) {
            showError('Please describe your design inspiration', 'design');
            isValid = false;
        }
        
        // Validate budget
        const budget = document.getElementById('budget').value;
        if (!budget) {
            showError('Please select a budget range', 'budget');
            isValid = false;
        }
        
        // Validate timeline
        const timeline = document.getElementById('timeline').value;
        if (!timeline) {
            showError('Please select a completion date', 'timeline');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Show loading state
        const originalText = showLoading(commissionSubmit);
        
        // Submit form
        setTimeout(() => {
            this.submit();
            hideLoading(commissionSubmit, originalText);
            showSuccess('Your commission request has been submitted! We\'ll send you a quote within 24 hours.');
            this.reset();
        }, 1500);
    });
}

// SHOP PURCHASE SYSTEM - Auction Style Prompts (Email/IG only)
document.querySelectorAll('.shop-form').forEach(form => {
    const button = form.querySelector('button[type="submit"]');
    
    // Change button from type="submit" to type="button" to prevent immediate form submission
    button.type = 'button';
    
    // Add data attributes for the product info (if not already there)
    if (!button.hasAttribute('data-product')) {
        const productName = form.querySelector('input[name="product"]')?.value || 'Product';
        const price = form.querySelector('input[name="price"]')?.value || 'N$0';
        button.setAttribute('data-product', productName);
        button.setAttribute('data-price', price);
    }
    
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        
        // Ask for customer info like the auction system - only email or IG
        const customerInfo = prompt(`Purchase ${product} (${price})\n\nEnter your email OR Instagram handle:\nExample: email@example.com\nOR\n@username`);
        
        if (!customerInfo || customerInfo.trim() === '') {
            alert('Purchase cancelled');
            return;
        }
        
        const contactInfo = customerInfo.trim();
        let email = '';
        let name = '';
        
        // Check if it's an email (contains @) or Instagram handle (starts with @)
        if (contactInfo.includes('@')) {
            if (contactInfo.startsWith('@')) {
                // It's an Instagram handle
                name = contactInfo;
            } else {
                // It's an email
                email = contactInfo;
                name = 'customer';
            }
        } else {
            // If no @, assume it's an IG handle without @
            name = '@' + contactInfo;
        }
        
        // Validate if it's an email
        if (email && !validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If no email provided, make sure at least IG handle is provided
        if (!email && !name) {
            alert('Please provide either an email address or Instagram handle');
            return;
        }
        
        // Create hidden input fields for customer info in the existing form
        let emailInput = form.querySelector('input[name="customer_email"]');
        let nameInput = form.querySelector('input[name="customer_name"]');
        
        // Create them if they don't exist
        if (!emailInput) {
            emailInput = document.createElement('input');
            emailInput.type = 'hidden';
            emailInput.name = 'customer_email';
            form.appendChild(emailInput);
        }
        
        if (!nameInput) {
            nameInput = document.createElement('input');
            nameInput.type = 'hidden';
            nameInput.name = 'customer_name';
            form.appendChild(nameInput);
        }
        
        // Set the values
        emailInput.value = email;
        nameInput.value = name;
        
        // Show loading state
        const originalText = showLoading(this);
        
        // Show success message and submit
        setTimeout(() => {
            form.submit();
            hideLoading(this, originalText);
            
            // Show appropriate success message
            if (email) {
                showSuccess(`Purchase submitted for ${product}! We'll contact you at ${email} to arrange payment and delivery.`);
            } else {
                showSuccess(`Purchase submitted for ${product}! We'll contact you via ${name} to arrange payment and delivery.`);
            }
        }, 1000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Real-time form validation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function() {
        const fieldId = this.id;
        clearError(fieldId);
        
        // Email validation on the fly
        if (fieldId.includes('email') || fieldId.includes('Email') || fieldId.includes('clientEmail')) {
            const email = this.value.trim();
            if (email && !validateEmail(email)) {
                showError('Please enter a valid email address', fieldId);
            }
        }
    });
});

// Set minimum date for timeline
const today = new Date().toISOString().split('T')[0];
const timelineInput = document.getElementById('timeline');
if (timelineInput) {
    timelineInput.min = today;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    showStaticCountdown();
    setupImageUploadPreview();
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Close modal on background click
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// Make closeModal globally available
window.closeModal = closeModal;
window.validateEmail = validateEmail;