import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeNavButton({ onClick, iconSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: isHovered ? '#151515' : 'transparent',
    color: isHovered ? '#e5e7eb' : '#9ca3af',
    border: 'none',
    borderRadius: '9999px',
    padding: '6px',
    width: isHovered ? '128px' : '36px',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    objectFit: 'cover',
    display: 'block'
  };

  const labelStyle = {
    whiteSpace: 'nowrap',
    fontSize: '14px',
    fontWeight: 500,
    opacity: isHovered ? 1 : 0,
    transform: `translateX(${isHovered ? '0' : '8px'})`,
    transition: 'opacity 0.2s ease, transform 0.2s ease'
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      {iconSrc ? (
        <img src={iconSrc} alt="Resume" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#3b82f6' }} />
      )}
      <span style={labelStyle}>Resume</span>
    </button>
  );
}

function HomeNavButton({ onClick, iconSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: isHovered ? '#151515' : 'transparent',
    color: isHovered ? '#e5e7eb' : '#9ca3af',
    border: 'none',
    borderRadius: '9999px',
    padding: '6px',
    width: isHovered ? '112px' : '36px',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    objectFit: 'cover',
    display: 'block'
  };

  const labelStyle = {
    whiteSpace: 'nowrap',
    fontSize: '14px',
    fontWeight: 500,
    opacity: isHovered ? 1 : 0,
    transform: `translateX(${isHovered ? '0' : '8px'})`,
    transition: 'opacity 0.2s ease, transform 0.2s ease'
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      {iconSrc ? (
        <img src={iconSrc} alt="Home" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#22c55e' }} />
      )}
      <span style={labelStyle}>Home</span>
    </button>
  );
}

export default function Portfolio() {
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
      color: '#ffffff',
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
        <HomeNavButton
          onClick={() => navigate('/')}
          iconSrc="home.webp "
        />
        {['Projects', 'Hobbies'].map((item) => (
          <button
            key={item}
            style={navButtonStyle(hoveredButton === item)}
            onMouseEnter={() => setHoveredButton(item)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => {
              if (item === 'Hobbies') {
                navigate('/hobbies');
              }
            }}
          >
            {item}
          </button>
        ))}
        <ResumeNavButton
          onClick={() => navigate('/resume')}
          iconSrc="doc.png"
        />
      </nav>

      {/* Hero Section */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 60px 120px',
      }}>
        
        <h1 style={{
          fontSize: '32px',
          fontWeight: '500',
          margin: '0 0 16px 0',
          lineHeight: '1.3',
          color: '#e5e7eb',
          letterSpacing: '-0.5px'
        }}>
          William Wei
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: '#9ca3af',
          marginBottom: '24px',
          fontWeight: '400'
        }}>
          I'm a CS student at University of Western Ontario with a passion for learning and creating new things. Aside from coding and studying,
          I enjoy playing video games and working out.
        </p>

        


        {/* Featured Skills/Interests */}
        {/*}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '40px',
          borderTop: '1px solid #1f1f1f'
        }}>
          {['react', 'javascript', 'ui design', 'web dev', 'photography', 'coffee'].map((skill) => (
            <div
              key={skill}
              style={{
                backgroundColor: '#1a1a1a',
                color: '#9ca3af',
                padding: '10px 20px',
                borderRadius: '20px',
                fontSize: '14px',
                border: '1px solid #2d2d2d'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
          */}

      </div>

      {/* Subtle Background Accent */}
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(129, 140, 248, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
    </div>
  );
}