import React, { createContext, useState, useContext, useEffect } from 'react';

const EditModeContext = createContext();

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within EditModeProvider');
  }
  return context;
}

export function EditModeProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableContent, setEditableContent] = useState({});
  const [selectedElement, setSelectedElement] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showGrid, setShowGrid] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('slideEditableContent');
    if (savedContent) {
      try {
        setEditableContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Failed to load saved content:', error);
      }
    }
  }, []);

  // Save content to localStorage when it changes
  useEffect(() => {
    if (Object.keys(editableContent).length > 0) {
      localStorage.setItem('slideEditableContent', JSON.stringify(editableContent));
      setUnsavedChanges(true);
    }
  }, [editableContent]);

  // Update content for a specific element
  const updateContent = (slideId, elementId, content) => {
    const newContent = {
      ...editableContent,
      [slideId]: {
        ...editableContent[slideId],
        [elementId]: content
      }
    };
    
    // Add to history for undo/redo
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newContent);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    setEditableContent(newContent);
  };

  // Get content for a specific element
  const getContent = (slideId, elementId) => {
    return editableContent[slideId]?.[elementId];
  };

  // Delete an element
  const deleteElement = (slideId, elementId) => {
    const newContent = { ...editableContent };
    if (newContent[slideId]) {
      delete newContent[slideId][elementId];
      if (Object.keys(newContent[slideId]).length === 0) {
        delete newContent[slideId];
      }
    }
    setEditableContent(newContent);
  };

  // Undo action
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setEditableContent(history[historyIndex - 1]);
    }
  };

  // Redo action
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setEditableContent(history[historyIndex + 1]);
    }
  };

  // Save all changes
  const saveChanges = () => {
    localStorage.setItem('slideEditableContent', JSON.stringify(editableContent));
    setUnsavedChanges(false);
    return true;
  };

  // Reset a single slide
  const resetSlide = (slideId) => {
    const newContent = { ...editableContent };
    delete newContent[slideId];
    setEditableContent(newContent);
    localStorage.setItem('slideEditableContent', JSON.stringify(newContent));
  };

  // Reset all slides
  const resetAll = () => {
    setEditableContent({});
    localStorage.removeItem('slideEditableContent');
    setHistory([]);
    setHistoryIndex(-1);
    setUnsavedChanges(false);
  };

  // Export as JSON
  const exportAsJSON = () => {
    const data = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      content: editableContent
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `slide-edits-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import from JSON
  const importFromJSON = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.content) {
          setEditableContent(data.content);
          localStorage.setItem('slideEditableContent', JSON.stringify(data.content));
        }
      } catch (error) {
        console.error('Failed to import JSON:', error);
      }
    };
    reader.readAsText(file);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isEditMode) return;
      
      // Ctrl/Cmd + Z for undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      
      // Ctrl/Cmd + Shift + Z for redo
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'z') {
        e.preventDefault();
        redo();
      }
      
      // Ctrl/Cmd + S for save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveChanges();
      }
      
      // Delete key for deleting selected element
      if (e.key === 'Delete' && selectedElement) {
        e.preventDefault();
        deleteElement(selectedElement.slideId, selectedElement.elementId);
        setSelectedElement(null);
      }
      
      // G key for toggling grid
      if (e.key === 'g' || e.key === 'G') {
        setShowGrid(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditMode, selectedElement, historyIndex]);

  const value = {
    isEditMode,
    setIsEditMode,
    editableContent,
    updateContent,
    getContent,
    deleteElement,
    selectedElement,
    setSelectedElement,
    undo,
    redo,
    saveChanges,
    resetSlide,
    resetAll,
    exportAsJSON,
    importFromJSON,
    showGrid,
    setShowGrid,
    unsavedChanges,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1
  };

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
}