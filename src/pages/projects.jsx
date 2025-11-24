import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

function ProjectCard({ title, tech, description, imageSrc, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ 
        width: '100%', 
        // Removed the giant marginBottom to let Grid handle spacing
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '500px', // Slightly adjusted height for grid balance
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: isHovered ? '0 25px 50px rgba(0,0,0,0.25)' : '0 10px 15px rgba(0,0,0,0.05)',
        transition: 'all 0.4s ease'
      }}>
        {imageSrc ? (
           <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease-out' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease-out' }} />
        )}

        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isHovered ? 'translateY(10px)' : 'translateY(0)',
          opacity: isHovered ? 0 : 1,
          transition: 'all 0.3s ease'
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: '600', margin: '0 0 12px 0', color: '#fff', textAlign: 'center' }}>
            {title}
          </h3>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', fontFamily: 'monospace', margin: 0, textAlign: 'center' }}>
            {tech}
          </p>
        </div>

        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px',
          opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease', backdropFilter: 'blur(3px)'
        }}>
          <p style={{ color: '#fff', fontSize: '16px', lineHeight: '1.8', maxWidth: '100%', textAlign: 'center', transform: isHovered ? 'translateY(0)' : 'translateY(10px)', transition: 'transform 0.4s ease', margin: 0 }}>
            {description}
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
      title: "Personal Website",
      tech: "React • Node.js • JavaScript • HTML/CSS • Git • Vercel",
      description: "Designed and developed a fully responsive personal portfolio website to showcase projects, experience, and technical skills. Built a modern frontend using React and Node.js with optimized state management. Integrated Git-based version control and deployed continuous updates through Vercel CI/CD workflows.",
      imageSrc: null 
    },
    {
      title: "Teaching Assistant App",
      tech: "Python • HTML/CSS",
      description: "Awarded 1st Place at NRG Hackathon. Led a team of 4 to build a platform assisting teachers with grade management. Features include calculating student averages, determining required scores for thresholds, and providing automated constructive feedback.",
      imageSrc: null 
    },
    {
      title: "Distraction Tracker",
      tech: "Python • psutil • pygetwindow",
      description: "A desktop tool that monitors user focus by tracking window-switching activity during study sessions. Identifies foreground applications to log distractions, calculates a focus score, and exports session summaries with timestamps.",
      imageSrc: null 
    },
    {
      title: "Weather App",
      tech: "Python • WeatherAPI",
      description: "A desktop application that fetches real-time weather data for global locations. Implements API calls to retrieve temperature, humidity, and wind speed while optimizing for reduced redundancy in data fetching.",
      imageSrc: null 
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
