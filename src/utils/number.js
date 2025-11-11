export const toFiniteNumber = (value, fallback = 0) => {
  if (value === null || value === undefined) return fallback;
  
  // Handle already numeric values
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : fallback;
  }
  
  // Convert strings, removing units and symbols
  const str = String(value);
  const cleaned = str.replace(/[^0-9.-]/g, '');
  const num = parseFloat(cleaned);
  
  return Number.isFinite(num) ? num : fallback;
};