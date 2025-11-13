import React, { useState } from 'react'

export default function SimpleAvatar({ size = 120 }) {
  const [imageError, setImageError] = useState(false)
  
  // Professional woman avatar URL
  const imageUrl = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces'
  
  // Fallback SVG
  const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2314b8a6'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EARIA%3C/text%3E%3C/svg%3E`
  
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
      padding: 3,
      display: 'inline-block'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        overflow: 'hidden',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src={imageError ? fallbackSvg : imageUrl}
          alt="ARIA Avatar"
          onError={() => {
            console.log('SimpleAvatar: Image failed to load, using fallback')
            setImageError(true)
          }}
          onLoad={() => {
            if (!imageError) {
              console.log('SimpleAvatar: Image loaded successfully')
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )
}
