// Debug script to check avatar rendering
// Run in browser console to diagnose issues

console.log('=== ARIA Avatar Debug ===');

// Check if images are loading
const images = document.querySelectorAll('img');
console.log(`Found ${images.length} images on page`);

images.forEach((img, index) => {
  console.log(`Image ${index + 1}:`, {
    src: img.src,
    alt: img.alt,
    naturalWidth: img.naturalWidth,
    naturalHeight: img.naturalHeight,
    complete: img.complete,
    currentSrc: img.currentSrc
  });
});

// Check for avatar-specific elements
const avatarDivs = Array.from(document.querySelectorAll('div')).filter(div => 
  div.style.borderRadius === '50%' || 
  div.style.cssText.includes('border-radius: 50%')
);

console.log(`Found ${avatarDivs.length} circular divs (potential avatars)`);

// Check network requests for images
if (window.performance) {
  const imageRequests = performance.getEntriesByType('resource')
    .filter(entry => entry.name.includes('unsplash') || entry.name.includes('dicebear') || entry.name.includes('avatar'));
  
  console.log('Image network requests:');
  imageRequests.forEach(req => {
    console.log(`- ${req.name}: ${req.responseEnd - req.startTime}ms`);
  });
}

// Check for console errors
const errors = [];
const originalError = console.error;
console.error = function(...args) {
  errors.push(args);
  originalError.apply(console, args);
};

console.log('=== End Debug ===');
