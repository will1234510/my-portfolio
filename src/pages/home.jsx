import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

export default function Portfolio() {
  const { colors } = useTheme();

  return (
    <Layout>
      <div style={{
        maxWidth: '900px',
        width: '100%', // Ensures fluid resizing
        margin: '0 auto',
        paddingTop: '50px', 
      }}>
        <title>William Wei</title>
        
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 32px)', // Title also scales slightly
          fontWeight: '500',
          margin: '0 0 16px 0',
          paddingBottom: '20px',
          borderBottom: `1px solid ${colors.border}`,
          lineHeight: '1.3',
          color: colors.textPrimary,
          letterSpacing: '-0.5px'
        }}>
          William Wei
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: colors.textSecondary,
          marginBottom: '24px',
          fontWeight: '400'
        }}>
          I'm a CS student at University of Western Ontario with a passion for learning and creating new things. Aside from coding and studying,
          I enjoy playing video games and working out.
        </p>

      </div>
    </Layout>
  );
}