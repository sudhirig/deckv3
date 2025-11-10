import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ACTS, getActBySlide } from '../config/acts'
import { pxToRem } from '../utils/responsive'
import './ActDropdown.css'

export default function ActDropdown({ currentSlide, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentAct = getActBySlide(currentSlide)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleActClick = (act) => {
    onNavigate(act.startSlide)
    setIsOpen(false)
  }

  return (
    <div className="act-dropdown" ref={dropdownRef}>
      <motion.button
        className="act-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          background: `linear-gradient(135deg, ${currentAct.color}22, ${currentAct.color}11)`,
          borderColor: `${currentAct.color}44`
        }}
      >
        <span className="act-dropdown-label">{currentAct.shortName}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="act-dropdown-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {ACTS.map((act) => {
              const isActive = act.id === currentAct.id

              return (
                <motion.button
                  key={act.id}
                  className={`act-dropdown-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleActClick(act)}
                  whileHover={{ x: 4 }}
                  style={{
                    background: isActive 
                      ? `linear-gradient(135deg, ${act.color}33, ${act.color}11)` 
                      : 'transparent',
                    borderLeft: isActive ? `${pxToRem(3)} solid ${act.color}` : `${pxToRem(3)} solid transparent`
                  }}
                >
                  <div className="act-dropdown-item-content">
                    <span 
                      className="act-dropdown-item-name"
                      style={{
                        color: isActive ? act.color : '#94a3b8',
                        fontWeight: isActive ? 'bold' : 'normal'
                      }}
                    >
                      {act.name}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="act-dropdown-item-indicator"
                        style={{ background: act.color }}
                      />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
