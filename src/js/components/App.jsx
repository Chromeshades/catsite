import React, { useState, useEffect } from 'react'
import { fetchCats } from '../api'

function App() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)

  const loadCats = async () => {
    setLoading(true)
    try {
      const newCats = await fetchCats()
      setCats(newCats)
    } catch (error) {
      console.error('Failed to fetch cats:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadCats()
  }, [])

  return (
    <div className="container">
      <h1>Cat Gallery</h1>
      <button 
        onClick={loadCats}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Show New Cats'}
      </button>
      <div className="cat-grid">
        {cats.map(cat => (
          <div key={cat.id} className="cat-card">
            <img src={cat.url} alt="Cat" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App