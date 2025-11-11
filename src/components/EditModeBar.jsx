import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useEditMode } from '../contexts/EditModeContext';
import Icon from './Icon';
import './EditModeBar.css';

export default function EditModeBar() {
  const {
    isEditMode,
    setIsEditMode,
    saveChanges,
    resetSlide,
    resetAll,
    exportAsJSON,
    importFromJSON,
    undo,
    redo,
    canUndo,
    canRedo,
    showGrid,
    setShowGrid,
    unsavedChanges
  } = useEditMode();

  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      importFromJSON(file);
    }
  };

  return (
    <motion.div 
      className={`edit-mode-bar ${isEditMode ? 'active' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="edit-mode-container">
        {/* Edit Mode Toggle */}
        <div className="edit-mode-toggle-section">
          <button
            className={`edit-mode-toggle ${isEditMode ? 'active' : ''}`}
            onClick={() => setIsEditMode(!isEditMode)}
            title={isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
          >
            <Icon icon={isEditMode ? 'edit3' : 'edit'} size={18} />
            <span>{isEditMode ? 'Exit Edit Mode' : 'Edit Mode'}</span>
          </button>
          
          {unsavedChanges && isEditMode && (
            <span className="unsaved-indicator">Unsaved changes</span>
          )}
        </div>

        {/* Edit Controls */}
        {isEditMode && (
          <div className="edit-controls">
            {/* Undo/Redo */}
            <div className="control-group">
              <button
                className="control-btn"
                onClick={undo}
                disabled={!canUndo}
                title="Undo (Ctrl+Z)"
              >
                <Icon icon="cornerUpLeft" size={16} />
              </button>
              <button
                className="control-btn"
                onClick={redo}
                disabled={!canRedo}
                title="Redo (Ctrl+Shift+Z)"
              >
                <Icon icon="cornerUpRight" size={16} />
              </button>
            </div>

            {/* Grid Toggle */}
            <div className="control-group">
              <button
                className={`control-btn ${showGrid ? 'active' : ''}`}
                onClick={() => setShowGrid(!showGrid)}
                title="Toggle Grid (G)"
              >
                <Icon icon="grid" size={16} />
              </button>
            </div>

            {/* Save/Reset */}
            <div className="control-group">
              <button
                className="control-btn primary"
                onClick={saveChanges}
                title="Save Changes (Ctrl+S)"
              >
                <Icon icon="save" size={16} />
                <span>Save</span>
              </button>
              <button
                className="control-btn"
                onClick={resetSlide}
                title="Reset Current Slide"
              >
                <Icon icon="refreshCw" size={16} />
                <span>Reset Slide</span>
              </button>
              <button
                className="control-btn danger"
                onClick={() => {
                  if (confirm('Are you sure you want to reset all slides? This cannot be undone.')) {
                    resetAll();
                  }
                }}
                title="Reset All Slides"
              >
                <Icon icon="trash2" size={16} />
                <span>Reset All</span>
              </button>
            </div>

            {/* Import/Export */}
            <div className="control-group">
              <button
                className="control-btn"
                onClick={exportAsJSON}
                title="Export Edits as JSON"
              >
                <Icon icon="download" size={16} />
                <span>Export</span>
              </button>
              <button
                className="control-btn"
                onClick={handleImportClick}
                title="Import Edits from JSON"
              >
                <Icon icon="upload" size={16} />
                <span>Import</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
            </div>

            {/* Keyboard Shortcuts Help */}
            <div className="shortcuts-help">
              <button
                className="help-btn"
                title="Keyboard Shortcuts"
                onClick={() => {
                  alert(`Keyboard Shortcuts:
• Double-click text to edit
• Drag elements to reposition
• Delete - Remove selected element
• Ctrl/Cmd + Z - Undo
• Ctrl/Cmd + Shift + Z - Redo  
• Ctrl/Cmd + S - Save changes
• G - Toggle grid
• Escape - Cancel editing`);
                }}
              >
                <Icon icon="helpCircle" size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}