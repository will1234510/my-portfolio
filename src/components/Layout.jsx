import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

// --- Helper for Icons ---
function getIconPath(baseIcon, isDark) {
  if (isDark) return baseIcon;
  if (baseIcon === 'home.webp') return 'homeDark.png';
  if (baseIcon === 'project.png') return 'projectDark.png';
  if (baseIcon === 'game.png') return 'gameDark.png';
  if (baseIcon === 'doc.png') return 'docDark.png';
  return baseIcon;
}

// --- Theme Toggle Component (Smaller Version) ---
function ThemeToggle({ isDark, toggleTheme, colors }) {
  return (
    <button
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',        // Reduced gap
        padding: '4px 12px', // Reduced padding
        backgroundColor: 'transparent',
        border: `1px solid ${colors.border}`,
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        height: '32px',      // Reduced height (was 40px)
      }}
    >
      {/* Text Label */}
      <span style={{ 
        fontSize: '13px',   // Smaller font (was 15px)
        fontWeight: '500', 
        color: colors.text,
        lineHeight: 1
      }}>
        {isDark ? 'Dark' : 'Light'}
      </span>

      {/* The Toggle Switch UI (Scaled Down) */}
      <div style={{
        width: '32px',      // Smaller width (was 40px)
        height: '18px',     // Smaller height (was 22px)
        backgroundColor: isDark ? '#4b5563' : '#cbd5e1',
        borderRadius: '999px',
        position: 'relative',
        transition: 'background-color 0.2s',
        flexShrink: 0
      }}>
        <div style={{
          width: '14px',    // Smaller knob (was 18px)
          height: '14px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: isDark ? '16px' : '2px', // Adjusted sliding distance
          transition: 'left 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }} />
      </div>
    </button>
  );
}

// --- Nav Button Component ---
function NavButton({ onClick, iconSrc, label, color, widthExpanded, isActive, colors, isDark }) {
  const [isHovered, setIsHovered] = useState(false);
  const actualIconSrc = getIconPath(iconSrc, isDark);
  const isMobile = window.innerWidth <= 768;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: isHovered ? colors.navHover : 'transparent',
    color: isActive || isHovered ? colors.text : colors.textSecondary,
    border: 'none',
    borderRadius: '9999px',
    padding: '6px',
    width: isMobile ? '40px' : (isHovered ? widthExpanded : '40px'), 
    height: '40px',
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  };

  const iconStyle = {
    width: '24px', height: '24px', borderRadius: '6px', objectFit: 'cover', display: 'block'
  };

  const labelStyle = {
    whiteSpace: 'nowrap',
    fontSize: '14px',
    fontWeight: 500,
    opacity: (isHovered && !isMobile) ? 1 : 0, 
    width: (isHovered && !isMobile) ? 'auto' : 0,
    marginLeft: (isHovered && !isMobile) ? '8px' : 0,
    transform: `translateX(${(isHovered && !isMobile) ? '0' : '8px'})`,
    transition: 'opacity 0.2s ease, transform 0.2s ease'
  };

  return (
    <button onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={containerStyle}>
      {actualIconSrc ? <img src={actualIconSrc} alt={label} style={iconStyle} /> : <div style={{ ...iconStyle, background: color }} />}
      <span style={labelStyle}>{label}</span>
    </button>
  );
}

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { colors, isDark, toggleTheme } = useTheme(); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 1. Handle Resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Handle Background
  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = colors.background;
  }, [colors]);

  // 3. Scroll Reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: colors.background,
      color: colors.text,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' 
    }}>
      
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: isMobile ? '15px 0 5px 0' : '30px 0 10px 0', 
        gap: isMobile ? '12px' : '8px', 
        width: '100%', 
        position: 'sticky', top: 0, zIndex: 100,
        backgroundColor: colors.background,
        borderBottom: 'none'
      }}>
        <NavButton onClick={() => navigate('/')} iconSrc="home.webp" label="Home" color="#22c55e" widthExpanded="112px" isActive={location.pathname === '/'} colors={colors} isDark={isDark} />
        <NavButton onClick={() => navigate('/projects')} iconSrc="project.png" label="Projects" color="#f59e0b" widthExpanded="132px" isActive={location.pathname === '/projects'} colors={colors} isDark={isDark} />
        <NavButton onClick={() => navigate('/hobbies')} iconSrc="game.png" label="Hobbies" color="#a855f7" widthExpanded="124px" isActive={location.pathname === '/hobbies'} colors={colors} isDark={isDark} />
        <NavButton onClick={() => navigate('/resume')} iconSrc="doc.png" label="Resume" color="#3b82f6" widthExpanded="128px" isActive={location.pathname === '/resume'} colors={colors} isDark={isDark} />
      </nav>

      {/* TOGGLE: Centered Under Nav */}
      <div style={{ marginBottom: '25px' }}>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} colors={colors} />
      </div>

      {/* Main Content */}
      <main style={{ 
        width: '90%', 
        maxWidth: '1600px', 
        margin: '0 auto',   
        paddingBottom: '60px',
        flex: 1
      }}>
        {children}
      </main>
    </div>
  );
}