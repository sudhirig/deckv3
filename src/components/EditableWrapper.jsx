import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useEditMode } from '../contexts/EditModeContext';
import Icon from './Icon';
import './EditableWrapper.css';

export default function EditableWrapper({ 
  children, 
  slideId, 
  elementId, 
  type = 'text',
  initialPosition = { x: 0, y: 0 },
  isDraggable = true,
  isResizable = false,
  onPositionChange,
  onSizeChange,
  className = '',
  style = {}
}) {
  const { 
    isEditMode, 
    selectedElement, 
    setSelectedElement,
    deleteElement,
    updateContent,
    getContent
  } = useEditMode();
  
  const [position, setPosition] = useState(initialPosition);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const contentRef = useRef(null);
  const dragRef = useRef(null);
  
  const isSelected = selectedElement?.slideId === slideId && selectedElement?.elementId === elementId;
  
  // Load saved position and content
  useEffect(() => {
    const savedData = getContent(slideId, elementId);
    if (savedData) {
      if (savedData.position) {
        setPosition(savedData.position);
      }
      if (savedData.content && type === 'text') {
        setEditContent(savedData.content);
      }
    }
  }, [slideId, elementId]);

  // Handle selection
  const handleSelect = (e) => {
    if (!isEditMode) return;
    e.stopPropagation();
    setSelectedElement({ slideId, elementId });
  };

  // Handle text editing
  const handleDoubleClick = (e) => {
    if (!isEditMode || type !== 'text') return;
    e.stopPropagation();
    setIsEditing(true);
    
    // Get current text content
    if (contentRef.current) {
      const text = contentRef.current.innerText || contentRef.current.textContent;
      setEditContent(text);
    }
  };

  const handleContentChange = (e) => {
    setEditContent(e.target.value);
  };

  const handleContentSave = () => {
    updateContent(slideId, elementId, {
      content: editContent,
      position: position,
      type: type
    });
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleContentSave();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  // Handle deletion
  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    deleteElement(slideId, elementId);
    setShowDeleteConfirm(false);
    setSelectedElement(null);
  };

  // Handle dragging
  const handleDragStart = (e) => {
    if (!isEditMode || !isDraggable) return;
    setIsDragging(true);
    
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;
    
    const handleDragMove = (e) => {
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      
      // Snap to grid (10px grid)
      const snappedX = Math.round(newX / 10) * 10;
      const snappedY = Math.round(newY / 10) * 10;
      
      setPosition({ x: snappedX, y: snappedY });
      
      if (onPositionChange) {
        onPositionChange({ x: snappedX, y: snappedY });
      }
    };
    
    const handleDragEnd = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      
      // Save position
      updateContent(slideId, elementId, {
        position: position,
        type: type
      });
    };
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  if (!isEditMode) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      ref={dragRef}
      className={`editable-wrapper ${className} ${isSelected ? 'selected' : ''} ${isDragging ? 'dragging' : ''}`}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : (isDraggable ? 'grab' : 'default'),
        position: 'relative'
      }}
      onClick={handleSelect}
      onDoubleClick={handleDoubleClick}
      onMouseDown={isDraggable ? handleDragStart : undefined}
      animate={{
        scale: isSelected ? 1.02 : 1,
        opacity: isDragging ? 0.8 : 1
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Edit mode indicators */}
      {isSelected && (
        <>
          {/* Drag handle */}
          {isDraggable && (
            <div className="drag-handle">
              <Icon icon="move" size={16} />
            </div>
          )}
          
          {/* Delete button */}
          <button 
            className="delete-button"
            onClick={handleDelete}
            title="Delete element"
          >
            <Icon icon="x" size={16} />
          </button>
          
          {/* Type indicator */}
          <div className="type-indicator">
            {type === 'text' ? 'Text' : 'Component'}
          </div>
        </>
      )}

      {/* Content */}
      {isEditing && type === 'text' ? (
        <textarea
          className="edit-input"
          value={editContent}
          onChange={handleContentChange}
          onBlur={handleContentSave}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            width: '100%',
            minHeight: '100px',
            fontSize: 'inherit',
            fontFamily: 'inherit',
            color: 'inherit',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px solid #14b8a6',
            borderRadius: '4px',
            padding: '8px',
            resize: 'both'
          }}
        />
      ) : (
        <div ref={contentRef}>
          {editContent && type === 'text' ? editContent : children}
        </div>
      )}

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="delete-confirm-modal">
          <div className="delete-confirm-content">
            <p>Delete this element?</p>
            <div className="delete-confirm-buttons">
              <button onClick={confirmDelete} className="confirm-btn">
                Delete
              </button>
              <button onClick={() => setShowDeleteConfirm(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid overlay when dragging */}
      {isDragging && (
        <div className="grid-overlay" />
      )}
    </motion.div>
  );
}