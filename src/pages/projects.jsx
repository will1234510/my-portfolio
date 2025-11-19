import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

// Helper function to get the correct icon based on theme
function getIconPath(baseIcon, isDark) {
  if (isDark) {
    return baseIcon;
  }
  // For light mode, use dark version of icons
  if (baseIcon === 'home.webp') {
    return 'homeDark.png';
  }
  if (baseIcon === 'project.png') {
    return 'projectDark.png';
  }
  if (baseIcon === 'game.png') {
    return 'gameDark.png';
  }
  if (baseIcon === 'doc.png') {
    return 'docDark.png';
  }
  return baseIcon;
}

function ResumeNavButton({ onClick, iconSrc, colors, isDark }) {
  const actualIconSrc = getIconPath(iconSrc, isDark);
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: isHovered ? colors.navHover : 'transparent',
    color: isHovered ? colors.text : colors.textSecondary,
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
    width: isHovered ? 'auto' : 0,
    marginLeft: isHovered ? '8px' : 0,
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
      {actualIconSrc ? (
        <img src={actualIconSrc} alt="Resume" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#3b82f6' }} />
      )}
      <span style={labelStyle}>Resume</span>
    </button>
  );
}

function HomeNavButton({ onClick, iconSrc, colors, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const actualIconSrc = getIconPath(iconSrc, isDark);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: isHovered ? colors.navHover : 'transparent',
    color: isHovered ? colors.text : colors.textSecondary,
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
    width: isHovered ? 'auto' : 0,
    marginLeft: isHovered ? '8px' : 0,
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
      {actualIconSrc ? (
        <img src={actualIconSrc} alt="Home" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#22c55e' }} />
      )}
      <span style={labelStyle}>Home</span>
    </button>
  );
}

function HobbiesNavButton({ onClick, iconSrc, colors, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const actualIconSrc = getIconPath(iconSrc, isDark);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: isHovered ? colors.navHover : 'transparent',
    color: isHovered ? colors.text : colors.textSecondary,
    border: 'none',
    borderRadius: '9999px',
    padding: '6px',
    width: isHovered ? '124px' : '36px',
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
    width: isHovered ? 'auto' : 0,
    marginLeft: isHovered ? '8px' : 0,
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
      {actualIconSrc ? (
        <img src={actualIconSrc} alt="Hobbies" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#a855f7' }} />
      )}
      <span style={labelStyle}>Hobbies</span>
    </button>
  );
}

function ProjectsNavButton({ onClick, iconSrc, colors, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const actualIconSrc = getIconPath(iconSrc, isDark);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: isHovered ? colors.navHover : 'transparent',
    color: isHovered ? colors.text : colors.textSecondary,
    border: 'none',
    borderRadius: '9999px',
    padding: '6px',
    width: isHovered ? '132px' : '36px',
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
    width: isHovered ? 'auto' : 0,
    marginLeft: isHovered ? '8px' : 0,
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
      {actualIconSrc ? (
        <img src={actualIconSrc} alt="Projects" style={iconStyle} />
      ) : (
        <div style={{ ...iconStyle, background: '#f59e0b' }} />
      )}
      <span style={labelStyle}>Projects</span>
    </button>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const { colors, isDark } = useTheme();

  return (
    <div style={{
      backgroundColor: colors.background,
      minHeight: '100vh',
      color: colors.text,
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 60px',
        gap: '8px'
      }}>
        <HomeNavButton
          onClick={() => navigate('/')}
          iconSrc="home.webp"
          colors={colors}
          isDark={isDark}
        />
        <ProjectsNavButton
          onClick={() => navigate('/projects')}
          iconSrc="project.png"
          colors={colors}
          isDark={isDark}
        />
        <HobbiesNavButton
          onClick={() => navigate('/hobbies')}
          iconSrc="game.png"
          colors={colors}
          isDark={isDark}
        />
        <ResumeNavButton
          onClick={() => navigate('/resume')}
          iconSrc="doc.png"
          colors={colors}
          isDark={isDark}
        />
      </nav>

      {/* Projects Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px 60px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '30px', paddingBottom: '20px', borderBottom: `1px solid ${colors.border}`, color: colors.textPrimary }}>
          Projects
        </h1>
        <p style={{ color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7' }}>
          wip
        </p>
      </div>
    </div>
  );
}

