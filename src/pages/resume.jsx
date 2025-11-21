import { useTheme } from '../contexts/ThemeContext';
import Layout from '../components/Layout';

function Resume() {
  const { colors } = useTheme();

  return (
    <Layout>
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '50px', borderBottom: `1px solid ${colors.border}`, paddingBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '500', marginBottom: '12px', color: colors.textPrimary }}>
            William Wei
          </h1>
          <div style={{ color: colors.textSecondary, fontSize: '14px' }}>
            905-960-7028 | william.wei.hi77@gmail.com | London, ON
          </div>
        </div>

        {/* Education */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Education
          </h2>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>University of Western Ontario</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>Sept 2024 – April 2028</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px', marginBottom: '8px' }}>
              Bachelor of Science in Computer Science
            </div>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Relevant Courses: Data Structures and Algorithms, Software Tools and System Programming, Information Systems and Design, Applied Logic for Computer Science</li>
            </ul>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>Newmarket High School</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>Sept 2020 – June 2024</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px' }}>
              High School Diploma, Honour Roll
            </div>
          </div>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Experience
          </h2>
          
          {/* Warehouse Labour */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>Warehouse Labour</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>May 2025 - August 2025</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Magna Dortec Industries, Bradford ON
            </div>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Increased lower rail detailing rate by over 50 percent, processing over 3000 pieces a week</li>
              <li>Sorted raw materials and finished parts to support assembly lines</li>
              <li>Operated handheld power tools to grind and detail automotive components according to specifications</li>
            </ul>
          </div>

          {/* Construction Aid */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>Construction Aid</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>June 2023 – August 2023</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Maple Vinyl Windows and Doors, Newmarket ON
            </div>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Assisted in transporting tools and moving materials to construction projects</li>
              <li>Performed post-construction cleaning, debris removal, and site preparation in compliance with safety standards</li>
              <li>Provided informative support to homeowners, addressing questions and improving customer satisfaction</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Projects
          </h2>
          
          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: colors.text }}>Personal Website</strong>
            <span style={{ color: colors.textSecondary, fontSize: '13px', marginLeft: '10px' }}>React, Node.js, JavaScript, HTML/CSS, Git, Vercel</span>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Designed and developed a fully responsive personal portfolio website to showcase projects, experience, and technical skills</li>
              <li>Built a modern frontend using React and Node.js and optimized state management</li>
              <li>Integrated Git-based version control and deployed continuous updates through Vercel, leveraging its CI/CD workflows for seamless production releases</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: colors.text }}>Teaching Assistant App</strong>
            <span style={{ color: colors.textSecondary, fontSize: '13px', marginLeft: '10px' }}>Python, HTML/CSS</span>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Awarded 1st Place at NRG Hackathon for innovative project development, creativity, and prompt presentation</li>
              <li>Led a team of 4 developers in building a web-based platform designed to assist teachers with grade management and performance analysis</li>
              <li>Developed features to input, store, and calculate student grades and averages, determine required scores to meet user-inputted grade thresholds, and provide constructive feedback to student work</li>
              <li>Engineered a full-stack solution using HTML/CSS, and Python</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: colors.text }}>Distraction Tracker</strong>
            <span style={{ color: colors.textSecondary, fontSize: '13px', marginLeft: '10px' }}>Python</span>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Built a desktop tool that monitors user focus by tracking window-switching activity during study/work sessions</li>
              <li>Used Python libraries such as psutil and pygetwindow to identify foreground applications and log distractions</li>
              <li>Calculated a focus score and exported session summaries with timestamps and focus rates</li>
            </ul>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: colors.text }}>Weather App</strong>
            <span style={{ color: colors.textSecondary, fontSize: '13px', marginLeft: '10px' }}>Python</span>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px', marginTop: '8px' }}>
              <li>Developed a simple desktop application using Python to see weather in certain areas of the world</li>
              <li>Implemented weatherapi API to fetch current weather data, including temperature, humidity, wind speed, and weather conditions</li>
              <li>Optimized API calls to reduce redundancy</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Skills
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ color: colors.text, display: 'block', marginBottom: '8px' }}>
              Technical Skills
            </strong>
            <div style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6' }}>
              <div><strong>Languages:</strong> Java, Python, C++, JavaScript, HTML/CSS, Bash</div>
              <div><strong>Frameworks:</strong> React, TailwindCSS, FastAPI</div>
              <div><strong>Tools:</strong> Git, Node.js, Tailwind, Vercel</div>
              <div><strong>Office:</strong> Excel, Word, Powerpoint, Photoshop, Audacity</div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Certifications
          </h2>
          <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>WHMIS, 2025</li>
          </ul>
        </section>

        {/* Clubs */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Clubs
          </h2>
          
          <div style={{ marginBottom: '25px' }}>
            <strong style={{ color: colors.text, display: 'block', marginBottom: '8px' }}>
              NHS Computer Science Club
            </strong>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Won the NRG Hackathon, securing 1st place in project development, creativity, and prompt presentation</li>
              <li>Won and participated in club coding competitions focused on algorithmic problem-solving and time-efficient solutions</li>
              <li>Practiced competitive programming questions, including questions from the CCC (Canadian Computing Competition), and LeetCode</li>
              <li>Mentored new members by introducing them to core programming concepts</li>
            </ul>
          </div>

          <div>
            <strong style={{ color: colors.text, display: 'block', marginBottom: '8px' }}>
              UWO Dragon Boat Club
            </strong>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Actively trained four days per week in preparation for fitness tests and tryouts</li>
              <li>Developed teamwork, discipline, and communication through regular on-water and dryland training sessions</li>
            </ul>
          </div>
        </section>

        {/* Volunteering */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            Volunteering
          </h2>
          
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>Security Volunteer</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>April 2024</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              OHF Championships, Markham ON
            </div>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Monitored exits to ensure restricted access to hockey team rooms</li>
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
              <strong style={{ color: colors.text }}>Town of Aurora Volunteer</strong>
              <span style={{ color: colors.textSecondary, fontSize: '14px' }}>2022 – 2024</span>
            </div>
            <div style={{ color: colors.textSecondary, fontSize: '14px', marginBottom: '8px', fontStyle: 'italic' }}>
              Town of Aurora, Aurora ON
            </div>
            <ul style={{ color: colors.textSecondary, fontSize: '14px', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li>Conducted educational demonstrations on animal functions for children</li>
              <li>Organized and guided chess activities at Aurora Public Library</li>
              <li>Managed the sorting and distribution of vegetables at York Region Food Network</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 style={{ fontSize: '25px', fontWeight: '500', marginBottom: '20px', color: colors.textPrimary }}>
            References
          </h2>
          <div style={{ color: colors.textSecondary, fontSize: '14px' }}>
            Available upon request
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Resume;