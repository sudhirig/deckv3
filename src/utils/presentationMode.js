/**
 * Presentation Mode Utility
 * Optimizes deck for full-screen presentation and PDF export
 */

export class PresentationMode {
  constructor() {
    this.isPresenting = false;
    this.isFullscreen = false;
    this.currentSlide = 1;
    this.totalSlides = 106;
    
    this.init();
  }
  
  init() {
    // Add keyboard shortcuts
    this.setupKeyboardShortcuts();
    
    // Add presentation mode toggle button
    this.addPresentationButton();
    
    // Check if already in fullscreen
    this.checkFullscreenState();
    
    // Add slide numbers for PDF export
    this.addSlideNumbers();
  }
  
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // F - Toggle fullscreen
      if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.toggleFullscreen();
      }
      
      // Print/Export to PDF
      if (e.key === 'e' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.exportToPDF();
      }
    });
  }
  
  togglePresentationMode() {
    this.isPresenting = !this.isPresenting;
    
    if (this.isPresenting) {
      // Enter presentation mode
      document.body.classList.add('presentation-mode');
      
      // Auto-enter fullscreen
      this.enterFullscreen();
      
      // Hide navigation UI
      this.hideNavigationUI();
      
      // Optimize font sizes
      this.optimizeFontSizes();
      
      console.log('🎯 Presentation Mode: ON');
      this.showNotification('Presentation Mode Enabled');
      
    } else {
      // Exit presentation mode
      document.body.classList.remove('presentation-mode');
      this.exitFullscreen();
      this.showNavigationUI();
      
      console.log('📱 Presentation Mode: OFF');
      this.showNotification('Presentation Mode Disabled');
    }
  }
  
  enterFullscreen() {
    const elem = document.documentElement;
    
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    }
    
    this.isFullscreen = true;
  }
  
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
    
    this.isFullscreen = false;
  }
  
  toggleFullscreen() {
    if (!this.isFullscreen) {
      this.enterFullscreen();
    } else {
      this.exitFullscreen();
    }
  }
  
  exitPresentationMode() {
    if (this.isPresenting) {
      this.togglePresentationMode();
    }
  }
  
  hideNavigationUI() {
    // Hide any navigation elements
    const navElements = document.querySelectorAll('.navigation, .slide-nav, .controls');
    navElements.forEach(el => {
      el.style.display = 'none';
    });
  }
  
  showNavigationUI() {
    const navElements = document.querySelectorAll('.navigation, .slide-nav, .controls');
    navElements.forEach(el => {
      el.style.display = '';
    });
  }
  
  optimizeFontSizes() {
    // Check screen size and adjust base font
    const width = window.innerWidth;
    
    if (width >= 1920) {
      document.documentElement.style.fontSize = '20px';
    } else if (width >= 1440) {
      document.documentElement.style.fontSize = '18px';
    } else if (width >= 1366) {
      document.documentElement.style.fontSize = '16px';
    }
  }
  
  checkFullscreenState() {
    document.addEventListener('fullscreenchange', () => {
      this.isFullscreen = !!document.fullscreenElement;
    });
  }
  
  addPresentationButton() {
    // Don't show present button for consumer deck (consumer is now default)
    const urlParams = new URLSearchParams(window.location.search);
    const deck = urlParams.get('deck') || 'consumer';
    if (deck === 'consumer') {
      // Remove if it exists
      const existing = document.getElementById('presentation-toggle');
      if (existing) existing.remove();
      return;
    }
    
    const button = document.createElement('button');
    button.id = 'presentation-toggle';
    button.innerHTML = '🎯 Present';
    button.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 24px;
      background: linear-gradient(135deg, #14b8a6, #06b6d4);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      z-index: 9999;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
    `;
    
    button.addEventListener('click', () => {
      this.togglePresentationMode();
    });
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
    
    // Only add if not already present
    if (!document.getElementById('presentation-toggle')) {
      document.body.appendChild(button);
    }
  }
  
  exportToPDF() {
    // Add print-specific class
    document.body.classList.add('printing');
    
    // Show all slides for printing
    const slides = document.querySelectorAll('.slide-container');
    slides.forEach((slide, index) => {
      slide.setAttribute('data-slide-number', index + 1);
    });
    
    // Trigger print dialog
    window.print();
    
    // Remove print class after printing
    window.addEventListener('afterprint', () => {
      document.body.classList.remove('printing');
    });
    
    this.showNotification('Opening PDF export dialog...');
  }
  
  addSlideNumbers() {
    const slides = document.querySelectorAll('.slide-container');
    slides.forEach((slide, index) => {
      slide.setAttribute('data-slide-number', `${index + 1} / ${this.totalSlides}`);
    });
  }
  
  showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'presentation-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 20px 40px;
      border-radius: 12px;
      font-size: 24px;
      font-weight: 600;
      z-index: 10000;
      animation: fadeInOut 2s ease-in-out;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after animation
    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
  
  // Utility to check current resolution
  checkResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    console.log(`📐 Current Resolution: ${width}x${height}`);
    
    if (width < 1366) {
      console.warn('⚠️ Resolution below recommended minimum (1366x768)');
      this.showNotification('⚠️ Low resolution detected. Some content may not display optimally.');
    }
    
    return { width, height };
  }
  
  // High contrast mode for projectors
  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    document.body.classList.toggle('projector-mode');
    
    const isHighContrast = document.body.classList.contains('high-contrast');
    this.showNotification(isHighContrast ? 'High Contrast ON' : 'High Contrast OFF');
  }
}

// Initialize presentation mode when DOM is ready
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    window.presentationMode = new PresentationMode();
    
    // Show keyboard shortcuts in console
    console.log('🎯 Deck Ready!');
    console.log('Keyboard Shortcuts:');
    console.log('  Ctrl+F - Toggle Fullscreen');
    console.log('  Ctrl+E - Export to PDF');
  });
}

// Export for use in other modules
export default PresentationMode;
