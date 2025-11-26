// Test if slides are loading
console.log('Testing slide configuration...');

// Check mainDeckSlides
const mainLength = typeof mainDeckSlides !== 'undefined' ? mainDeckSlides.length : 'undefined';
const appendixLength = typeof appendixSlides !== 'undefined' ? appendixSlides.length : 'undefined';
const slidesLength = typeof slides !== 'undefined' ? slides.length : 'undefined';

console.log('mainDeckSlides length:', mainLength);
console.log('appendixSlides length:', appendixLength);
console.log('slides length:', slidesLength);
console.log('DECK_MODE:', typeof DECK_MODE !== 'undefined' ? DECK_MODE : 'undefined');
