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

function Resume() {
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
        <HomeNavButton
          onClick={() => navigate('/')}
          iconSrc="home.webp"
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

      {/* Resume Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px 60px' }}>
        {/* Header */}
        <div style={{ marginBottom: '50px', borderBottom: '1px solid #2d2d2d', paddingBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '12px', color: '#ffffff' }}>
            William Wei
          </h1>
          <div style={{ color: '#9ca3af', fontSize: '14px' }}>
            905-960-7028 | william.wei.hi77@gmail.com | London, ON
          </div>
        </div>

        {/* Education */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: '#ffffff' }}>
            Education
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>University of Western Ontario</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Sept 2024 – April 2028</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px' }}>
              Bachelor of Science in Computer Science
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>Newmarket High School</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Sept 2020 – June 2024</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px' }}>
              High School Diploma, Honour Roll
            </div>
          </div>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: '#ffffff' }}>
            Work Experience
          </h2>
          
          {/* Warehouse Labour */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>Warehouse Labour</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>May 2025 - August 2025</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Magna Dortec Industries, Bradford ON
            </div>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Increased lower rail detailing rate by over 50 percent, processing over 3000 pieces a week</li>
              <li>Sorted raw materials and finished parts to support assembly lines</li>
              <li>Operated handheld power tools to grind and detail automotive components</li>
            </ul>
          </div>

          {/* Construction Aid */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>Construction Aid</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>June 2023 – August 2023</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Maple Vinyl Windows and Doors, Newmarket ON
            </div>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Assisted in transporting tools and moving materials to construction projects</li>
              <li>Performed post-construction cleaning and debris removal in compliance with safety standards</li>
              <li>Provided support to homeowners, addressing questions and improving customer satisfaction</li>
            </ul>
          </div>

          {/* Security Volunteer */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>Security Volunteer</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>April 2024</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              OHF Championships, Markham ON
            </div>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Monitored exits to ensure restricted access to hockey team rooms</li>
            </ul>
          </div>

          {/* Town Volunteer */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <strong style={{ color: '#e5e7eb' }}>Town of Aurora Volunteer</strong>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>2022 – 2024</span>
            </div>
            <div style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Town of Aurora, Aurora ON
            </div>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Conducted educational demonstrations on animal functions for children</li>
              <li>Organized and guided chess activities at Aurora Public Library</li>
              <li>Managed sorting and distribution of vegetables at York Region Food Network</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: '#ffffff' }}>
            Projects
          </h2>
          
          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: '#e5e7eb' }}>Teaching Assistant Website</strong>
            <span style={{ color: '#9ca3af', fontSize: '13px', marginLeft: '10px' }}>Python, HTML/CSS</span>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Awarded 1st Place at NRG Hackathon for innovative project development and presentation</li>
              <li>Led a team of 4 developers building a web platform for grade management and analysis</li>
              <li>Developed features to calculate grades, determine required scores, and provide feedback</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: '#e5e7eb' }}>Distraction Tracker</strong>
            <span style={{ color: '#9ca3af', fontSize: '13px', marginLeft: '10px' }}>Python</span>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Built desktop tool tracking window-switching activity during study sessions</li>
              <li>Used psutil and pygetwindow to identify applications and log distractions</li>
              <li>Calculated focus score and exported session summaries with timestamps</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: '#e5e7eb' }}>Weather App</strong>
            <span style={{ color: '#9ca3af', fontSize: '13px', marginLeft: '10px' }}>Python</span>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Developed desktop application to display weather data for locations worldwide</li>
              <li>Implemented weatherapi API to fetch temperature, humidity, and wind speed</li>
              <li>Optimized API calls to minimize latency for repeat locations</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: '#e5e7eb' }}>Java Calculator</strong>
            <span style={{ color: '#9ca3af', fontSize: '13px', marginLeft: '10px' }}>Java</span>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Developed user-friendly calculator for basic arithmetic operations</li>
              <li>Engineered GUI with NetBeans IDE using event-driven programming</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: '#ffffff' }}>
            Technical Skills
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: '#e5e7eb', display: 'block', marginBottom: '8px' }}>
              
            </strong>
            <div style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' }}>
              <div><strong>Languages:</strong> Java, Python, C++, C, JavaScript, HTML/CSS, Bash</div>
              <div><strong>Tools:</strong> Git, Node.js</div>
              <div><strong>Office:</strong> Excel, Word, Powerpoint, Photoshop, Audacity</div>
            </div>
          </div>
        </section>

        {/* Clubs */}
        <section>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: '#ffffff' }}>
            Clubs
          </h2>
          
          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: '#e5e7eb', display: 'block', marginBottom: '8px' }}>
              NHS Computer Science Club
            </strong>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Won NRG Hackathon, securing 1st place in project development and presentation</li>
              <li>Participated in coding competitions focused on algorithmic problem-solving</li>
              <li>Practiced CCC and LeetCode problems</li>
              <li>Mentored new members on core programming concepts</li>
            </ul>
          </div>

          <div>
            <strong style={{ color: '#e5e7eb', display: 'block', marginBottom: '8px' }}>
              UWO Dragon Boat Club
            </strong>
            <ul style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Trained four days per week for fitness tests and tryouts</li>
              <li>Developed teamwork and discipline through on-water and dryland training</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;