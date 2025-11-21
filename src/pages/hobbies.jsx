import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

function Hobbies() {
  const { colors } = useTheme();

  return (
    <Layout>
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '30px', paddingBottom: '20px', borderBottom: `1px solid ${colors.border}`, color: colors.textPrimary }}>
          My Hobbies (wip)
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
              Current: Top 3500 Global, Top 150 Canada
              </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '16px',
              marginTop: '12px'
            }}>
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
      </div>
    </Layout>
  );
}

export default Hobbies;



