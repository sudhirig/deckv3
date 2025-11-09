import { motion } from 'framer-motion'

/**
 * ResponsiveTable - Wrapper component for tables with horizontal scroll
 * 
 * Provides a responsive container for tables that may overflow on smaller screens.
 * Includes glass-card styling to match the design system.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Table content to be wrapped
 * @param {string} [props.minWidth='800px'] - Minimum width for the table before scrolling activates
 * 
 * @example
 * <ResponsiveTable minWidth="1000px">
 *   <table>
 *     <thead>
 *       <tr>
 *         <th>Header 1</th>
 *         <th>Header 2</th>
 *       </tr>
 *     </thead>
 *     <tbody>
 *       <tr>
 *         <td>Data 1</td>
 *         <td>Data 2</td>
 *       </tr>
 *     </tbody>
 *   </table>
 * </ResponsiveTable>
 */
export default function ResponsiveTable({ children, minWidth = '800px' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        overflowX: 'auto',
        width: '100%',
        borderRadius: '0.75rem',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{ minWidth }}>
        {children}
      </div>
    </motion.div>
  )
}
