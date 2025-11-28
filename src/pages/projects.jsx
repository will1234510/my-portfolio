import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

function ProjectCard({ title, tech, description, imageSrc, colors, githubUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme(); // Get current theme mode

  return (
    <div 
      style={{ 
        width: '100%', 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '500px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 25px 50px rgba(0,0,0,0.25)' : '0 10px 15px rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease',
        backgroundColor: colors.surface // Theme-aware background for placeholder
      }}>
        {/* Image or Placeholder */}
        {imageSrc ? (
           <img 
             src={imageSrc} 
             alt={title} 
             style={{ 
               width: '100%', 
               height: '100%', 
               objectFit: 'cover', 
               transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
               transition: 'transform 0.5s ease-out' 
             }} 
           />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            backgroundColor: colors.surface, // Matches container
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
            transition: 'transform 0.5s ease-out' 
          }} />
        )}

        {/* Description Overlay (appears on hover) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          // Conditional background logic based on Theme
          backgroundColor: isDark 
            ? 'rgba(0, 0, 0, 0.85)' // Dark Mode: Dark overlay
            : 'rgba(255, 255, 255, 0.9)', // Light Mode: Light/White overlay
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '40px',
          paddingBottom: '140px', // Add padding at bottom so description doesn't overlap with the bottom bar
          opacity: isHovered ? 1 : 0, 
          transition: 'opacity 0.3s ease', 
          backdropFilter: 'blur(3px)',
          zIndex: 1
        }}>
          <p style={{ 
            // Conditional text color logic
            color: isDark ? '#fff' : colors.textPrimary, 
            fontSize: '16px', 
            lineHeight: '1.8', 
            maxWidth: '100%', 
            textAlign: 'center', 
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)', 
            transition: 'transform 0.4s ease', 
            margin: 0 
          }}>
            {description}
          </p>
        </div>

        {/* Title, Tech & Github Logo (Always visible at bottom) */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px',
          // Dynamic background logic based on Hover + Theme
          background: isDark
            ? 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.8) 70%, transparent)' // Dark Mode: always dark gradient
            : 'rgba(255, 255, 255, 0.95)', // Light Mode: always light background
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align to left as requested ("Next to the name")
          justifyContent: 'flex-end',
          zIndex: 2, // Above the overlay
          borderTop: !isDark ? `1px solid ${colors.border}` : 'none', // Always show border in light mode
          transition: 'background 0.3s ease, border-color 0.3s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '8px' }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              margin: 0, 
              color: colors.textPrimary, // Always primary text color
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'color 0.3s ease'
            }}>
              {title}
              {/* Github Logo */}
              <a href={githubUrl || "#"} target="_blank" rel="noopener noreferrer" style={{ 
                color: colors.textPrimary, // Always primary text color
                display: 'flex', 
                alignItems: 'center',
                opacity: 0.8,
                transition: 'opacity 0.2s, color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </h3>
          </div>
          
          <p style={{ 
            fontSize: '14px', 
            color: colors.textSecondary, // Always secondary text color
            fontFamily: 'monospace', 
            margin: 0, 
            textAlign: 'left',
            transition: 'color 0.3s ease' 
          }}>
            {tech}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { colors } = useTheme();

  const projectsData = [
    {
      title: "Flashcard Study Application",
      tech: "React • Tailwind CSS • React Router • LocalStorage",
      description: "Architected a responsive Single Page Application using React and React Router. Engineered a centralized state management system with Context API for global CRUD operations. Implemented client-side data persistence using LocalStorage and developed clipboard integration for image pasting.",
      imageSrc: null,
      githubUrl: "https://github.com/williamwei-hi77" // Example URL, or leave null
    },
    {
      title: "Personal Website",
      tech: "React • Node.js • JavaScript • HTML/CSS • Git • Vercel",
      description: "Architected a modern single-page application with React Router and engineered a custom theme system using Context API. Designed responsive UI components with advanced CSS-in-JS styling and deployed via Vercel with CI/CD integration for zero-downtime updates.",
      imageSrc: null,
      githubUrl: "https://github.com/williamwei-hi77"
    },
    {
      title: "Teaching Assistant App",
      tech: "Python • HTML/CSS",
      description: "Awarded 1st Place at NRG Hackathon. Led a team of 4 to build a platform assisting teachers with grade management. Features include calculating student averages, determining required scores for thresholds, and providing automated constructive feedback.",
      imageSrc: null,
      githubUrl: "https://github.com/williamwei-hi77"
    },
    {
      title: "Distraction Tracker",
      tech: "Python • psutil • pygetwindow",
      description: "A desktop tool that monitors user focus by tracking window-switching activity during study sessions. Identifies foreground applications to log distractions, calculates a focus score, and exports session summaries with timestamps.",
      imageSrc: null,
      githubUrl: "https://github.com/williamwei-hi77"
    },
    {
      title: "Weather App",
      tech: "Python • WeatherAPI",
      description: "A desktop application that fetches real-time weather data for global locations. Implements API calls to retrieve temperature, humidity, and wind speed while optimizing for reduced redundancy in data fetching.",
      imageSrc: null,
      githubUrl: "https://github.com/williamwei-hi77"
    }
  ];

  return (
    <Layout>
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '500', margin: '0 0 16px 0', paddingBottom: '20px', borderBottom: `1px solid ${colors.border}`, color: colors.textPrimary, lineHeight: '1.3', letterSpacing: '-0.5px' }}>
            Projects
          </h1>

          <div style={{ 
            // --- PINTEREST / GRID LAYOUT ---
            display: 'grid',
          // This line creates the magic:
          // It creates as many columns as fit. 
          // Each column is at least 350px wide. 
          // If there is extra space, the columns grow to fill it.
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px' 
        }}>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
