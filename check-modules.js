// Check if all 7 modules are rendered
const modules = [
  'Voice Trading',
  'CGMF Advisory', 
  'GIFT City Gateway',
  'Algo Trading Lab',
  'Sentiment AI',
  'Tax Optimizer',
  'Alternative Assets'
];

const elements = document.querySelectorAll('h4');
const found = [];
elements.forEach(el => {
  const text = el.textContent.trim();
  if (modules.includes(text)) {
    found.push(text);
  }
});

console.log('Found modules:', found.length + '/' + modules.length);
console.log('Modules:', found.join(', '));

// Check for metrics bar
const metrics = document.querySelector('.glass-card');
const metricsText = document.body.textContent;
if (metricsText.includes('$10M') && metricsText.includes('AUM')) {
  console.log('Metrics bar found: YES');
} else {
  console.log('Metrics bar found: NO');
}

// Scroll to bottom to see all content
window.scrollTo(0, document.body.scrollHeight);
