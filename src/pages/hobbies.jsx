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

function Hobbies() {
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

      {/* Hobbies Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px 60px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '30px', paddingBottom: '20px', borderBottom: `1px solid ${colors.border}`, color: colors.textPrimary }}>
          My Hobbies
        </h1>

        {/* Gaming Section */}
        <section style={{ marginBottom: '10px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
            Gaming
          </h2>
          <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
            I enjoy playing all types of video games. Here are some of my favorites:
          </p>
          
          {/* VALORANT */}
          <div style={{ marginBottom: '5px' }}>
            <h3 style={{ marginTop: '0px', fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              VALORANT
            </h3>
            <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              Peak: Immortal 1, 13RR
              <br/>
              Current: Unranked
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
              {/* Add videos/clips here */}
              {/* Example:
              <video 
                controls 
                style={{ width: '100%', borderRadius: '8px', maxWidth: '600px' }}
              >
                <source src="your-video.mp4" type="video/mp4" />
              </video>
              */}
            </div>
          </div>

          {/* osu! */}
          <div style={{ marginBottom: '5px' }}>
            <h3 style={{ marginTop: '0px', fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              osu!
            </h3>
            <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              Peak: Top 2000 Global, Top 100 Canada
              <br/>
              Current: Top 2800 Global, Top 130 Canada
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
              {/* Add videos/clips here */}
            </div>
          </div>

          {/* Overwatch 2 */}
          <div style={{ marginBottom: '5px' }}>
            <h3 style={{ marginTop: '0px', fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              Overwatch 2
            </h3>
            <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              Peak: Diamond 5 (Tank), Platinum 3 (DPS), Platinum 1 (Support)
              <br/>
              Current: Diamond 5 (Tank), Gold 2 (DPS), Platinum 1 (Support)
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
              {/* Add videos/clips here */}
            </div>
          </div>

          {/* League of Legends */}
          <div style={{ marginBottom: '5px' }}>
            <h3 style={{ marginTop: '0px', fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              League of Legends
            </h3>
              <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              Peak: Silver 1
              <br/>
              Current: Silver 1
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
              {/* Add videos/clips here */}
            </div>
          </div>
          {/* CS */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ marginTop: '0px', fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              CS2/CS:GO
            </h3>
            <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              Peak: Gold Nova 3 (Competitive), Unranked (Premier)
              <br/>
              Current: Unranked (Competetive), Unranked (Premier)
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
              {/* Add videos/clips here */}
            </div>
          </div>
        </section>
          
        {/* Gym section*/}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
            Working Out
          </h2>
          <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
            I enjoy lifting weight, climbing, and breaking personal records.
            </p>
            <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              Lifting
            </h3>
            <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              I started lifting weights September 2022, and I want to keep working on my lifts and breaking new PRs.
              <br/> <br/>
              Bench PR: 275 lbs, 125 kg
              <br/>
              Squat PR: 330 lbs, 150 kg
              <br/>
              Deadlift PR: I don't deadlift
              </p>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '5px' }}>
              Climbing
              <p style={{ marginTop: '0px', color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              I started climbing in September 2025, and I plan to keep trying to climb harder grades.
              <br/> <br/>
              Current: V3 - V4, 6A - 6B+
              </p>
            </h3>
            {/* add videos/clips here */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}></div>
            </div>
          </section>

          {/* music section*/}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '500', color: colors.textPrimary, marginBottom: '20px' }}>
            Music
          </h2>
          <p style={{ color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
            wip
            </p>
            <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '500', color: colors.textPrimary, marginBottom: '16px' }}>
              wip
            </h3>
            <p style={{ color: colors.textSecondary, fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
              hi
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}></div>
            </div>
          </section>


        {/* 🧩 Add More Sections Later (example placeholder) */}
        {/* 
        <section>
          <h2>Music</h2>
          <p>Some description...</p>
        </section>
        */}
      </div>
    </div>
  );
}

export default Hobbies;
