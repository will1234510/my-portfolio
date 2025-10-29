import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hobbies() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  const navButtonStyle = (isHovered) => ({
    backgroundColor: 'transparent',
    color: isHovered ? '#818cf8' : '#9ca3af',
    border: 'none',
    padding: '8px 20px',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  });

  return (
    <div style={{ 
      backgroundColor: '#0f0f0f', 
      minHeight: '100vh', 
      color: '#e5e7eb',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '30px 60px',
        gap: '8px'
      }}>
        {['Home', 'Projects', 'Hobbies', 'Resume'].map((item) => (
          <button
            key={item}
            style={navButtonStyle(hoveredButton === item)}
            onMouseEnter={() => setHoveredButton(item)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => {
              if (item === 'Resume') {
                navigate('/resume');
              } else if (item === 'Home') {
                navigate('/');
              } else if (item === 'Hobbies') {
                navigate('/hobbies');
              }
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Hobbies Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px 60px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '30px', color: '#ffffff' }}>
          My Hobbies
        </h1>

        {/* Gaming Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '500', color: '#818cf8', marginBottom: '10px' }}>
            Gaming
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.7', marginBottom: '10px' }}>
            I enjoy playing all types of video games. Here are some of my favorites:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#d1d5db' }}>
            <li>VALORANT</li>
            <li>League of Legends</li>
            <li>Overwatch 2</li>
            <li>osu!</li>
          </ul>
        </section>

        {/* 🧩 Add More Sections Later (example placeholder) */}
        {/* 
        <section>
          <h2>🎧 Music</h2>
          <p>Some description...</p>
        </section>
        */}
      </div>
    </div>
  );
}

export default Hobbies;
