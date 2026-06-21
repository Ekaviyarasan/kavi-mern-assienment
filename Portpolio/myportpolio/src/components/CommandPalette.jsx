import { useState, useEffect, useRef } from 'react';

const commandsList = [
  { id: 'home', label: 'Go to Home', shortcut: 'H', action: 'scroll', target: '#home', category: 'Navigation', icon: '🏠' },
  { id: 'services', label: 'Go to Services', shortcut: 'S', action: 'scroll', target: '#services', category: 'Navigation', icon: '🧩' },
  { id: 'skills', label: 'Go to Skills', shortcut: 'K', action: 'scroll', target: '#skills', category: 'Navigation', icon: '⚡' },
  { id: 'experience', label: 'Go to Experience', shortcut: 'E', action: 'scroll', target: '#experience', category: 'Navigation', icon: '💼' },
  { id: 'projects', label: 'Go to Projects', shortcut: 'P', action: 'scroll', target: '#projects', category: 'Navigation', icon: '🚀' },
  { id: 'blog', label: 'Go to Blog Notes', shortcut: 'B', action: 'scroll', target: '#blog', category: 'Navigation', icon: '📝' },
  { id: 'contact', label: 'Go to Contact', shortcut: 'C', action: 'scroll', target: '#contact', category: 'Navigation', icon: '📞' },
  { id: 'resume', label: 'Download Resume', shortcut: 'R', action: 'custom', category: 'Action', icon: '📄' },
  { id: 'theme', label: 'Toggle Color Theme', shortcut: 'T', action: 'custom', category: 'Preferences', icon: '🎨' },
  { id: 'parallax', label: 'Toggle Parallax Background', shortcut: 'M', action: 'custom', category: 'Preferences', icon: '💨' }
];

export default function CommandPalette({ activeTheme, onToggleTheme, onToggleParallax, parallaxEnabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Toggle Palette on K or Ctrl+K or /
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if user is typing in an input/textarea
      const isTyping = 
        document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA' || 
        document.activeElement.isContentEditable;

      if (isTyping && e.key !== 'Escape') {
        return;
      }

      // Open command palette with K, Ctrl+K, or /
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || e.key.toLowerCase() === 'k' || e.key === '/') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch('');
        setSelectedIndex(0);
      }

      // Global navigation shortcuts when palette is closed
      if (!isOpen && !isTyping) {
        const key = e.key.toLowerCase();
        const cmd = commandsList.find(c => c.shortcut.toLowerCase() === key);
        if (cmd) {
          e.preventDefault();
          executeCommand(cmd);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeTheme, parallaxEnabled]);

  // Handle keys while palette is open
  useEffect(() => {
    if (!isOpen) return;

    // Focus input field when opened
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    const handlePaletteKeys = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handlePaletteKeys);
    return () => window.removeEventListener('keydown', handlePaletteKeys);
  }, [isOpen, selectedIndex, search]);

  // Click outside to close modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const executeCommand = (cmd) => {
    setIsOpen(false);
    
    // Smooth scrolling animation
    if (cmd.action === 'scroll') {
      const element = document.querySelector(cmd.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add active highlighting effect
        element.classList.add('section-flash-highlight');
        setTimeout(() => {
          element.classList.remove('section-flash-highlight');
        }, 1500);
      }
    } else if (cmd.id === 'resume') {
      // Trigger download
      const heroLink = document.querySelector('.hero-cta.primary[download], .cta-button.secondary[download]');
      if (heroLink) {
        heroLink.click();
        triggerFloatingBanner('Downloading Resume...', '🎉');
      }
    } else if (cmd.id === 'theme') {
      onToggleTheme();
      triggerFloatingBanner('Theme Switched!', '🎨');
    } else if (cmd.id === 'parallax') {
      onToggleParallax();
      triggerFloatingBanner(parallaxEnabled ? 'Parallax Disabled' : 'Parallax Enabled', '💨');
    }
  };

  const triggerFloatingBanner = (message, icon) => {
    // Remove existing if any
    const existing = document.querySelector('.shortcut-toast-banner');
    if (existing) existing.remove();

    const banner = document.createElement('div');
    banner.className = 'shortcut-toast-banner';
    banner.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-text">${message}</span>`;
    document.body.appendChild(banner);
    setTimeout(() => {
      banner.classList.add('show');
    }, 50);
    setTimeout(() => {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    }, 2500);
  };

  const filteredCommands = commandsList.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Backdrop & Command Palette Modal */}
      {isOpen && (
        <div className="command-palette-overlay" role="dialog" aria-modal="true" aria-label="Command Palette">
          <div className="command-palette-container" ref={modalRef}>
            <div className="command-palette-search-wrapper">
              <span className="search-icon">🔍</span>
              <input
                ref={inputRef}
                type="text"
                className="command-palette-search-input"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <span className="search-hint">ESC to close</span>
            </div>

            <div className="command-palette-list" role="listbox">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => (
                  <div
                    key={cmd.id}
                    className={`command-palette-item ${idx === selectedIndex ? 'active' : ''}`}
                    onClick={() => executeCommand(cmd)}
                    role="option"
                    aria-selected={idx === selectedIndex}
                  >
                    <span className="item-icon" aria-hidden="true">{cmd.icon}</span>
                    <div className="item-details">
                      <span className="item-label">{cmd.label}</span>
                      <span className="item-category">{cmd.category}</span>
                    </div>
                    <span className="item-shortcut">
                      {cmd.shortcut}
                    </span>
                  </div>
                ))
              ) : (
                <div className="command-palette-empty">No commands found matching "{search}"</div>
              )}
            </div>

            <div className="command-palette-footer">
              <div className="footer-keys">
                <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
                <span><kbd>↵ Enter</kbd> to select</span>
                <span>Press single keys globally: <kbd>H</kbd> Home, <kbd>R</kbd> Resume, <kbd>T</kbd> Theme</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
