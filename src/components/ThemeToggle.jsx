import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { isDark, toggleTheme, colors } = useTheme();

  const toggleStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    color: colors.text,
  };

  const switchStyle = {
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: isDark ? '#4b5563' : '#9ca3af',
    position: 'relative',
    transition: 'background-color 0.2s ease',
  };

  const sliderStyle = {
    position: 'absolute',
    top: '2px',
    left: isDark ? '2px' : '22px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    transition: 'left 0.2s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  return (
    <button
      onClick={toggleTheme}
      style={toggleStyle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span>{isDark ? 'Dark' : 'Light'}</span>
      <div style={switchStyle}>
        <div style={sliderStyle} />
      </div>
    </button>
  );
}

export default ThemeToggle;

