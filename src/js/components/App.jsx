import React, { useState, useEffect } from 'react'
import { fetchCats } from '../api'

function App() {
  const [cats, setCats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadCats = async () => {
    setLoading(true)
    setError(null)
    try {
      console.log('API Key available:', !!window.ENV_VITE_CAT_API_KEY)
      const newCats = await fetchCats()
      console.log('API Response:', newCats)
      setCats(newCats)
    } catch (error) {
      console.error('Failed to fetch cats:', error)
      setError(error.message)
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
      {error && (
        <div style={{ color: 'red', margin: '1rem 0' }}>
          Error: {error}
        </div>
      )}
      <div className="cat-grid">
        {cats.length > 0 ? (
          cats.map(cat => (
            <div key={cat.id} className="cat-card">
              <img src={cat.url} alt="Cat" loading="lazy" />
            </div>
          ))
        ) : !loading && !error ? (
          <p>No cats loaded. Try clicking the button above.</p>
        ) : null}
      </div>
    </div>
  )
}

export default App