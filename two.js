import React from 'react';

const Portfolio = () => {
  // Replace the data below with your actual portfolio data
  const personalInfo = {
    name: 'Kanta Showribabu',
    dateOfBirth: '21/04/2003',
    email: 'kantashowribabu@gmail.com',
    phone: '9392393052',
    linkedIn: '[Your LinkedIn Profile URL]',
    github: '[Your GitHub Profile URL]',
    hackerRank: '[Your HackerRank Profile URL]',
  };

  const education = [
    {
      school: 'St. Xavier High School, Mutlur',
      duration: '2018',
      percentage: '9.7/10',
    },
    {
      school: 'Sri Chaitanya Junior College',
      duration: '2018-2020',
      percentage: '9.96/10',
    },
    {
      school: 'KKR & KSR Institute of Technology and Sciences',
      duration: '2020-2024',
      percentage: '9.39/10 (as of now)',
    },
  ];

  const technicalSkills = {
    programmingLanguages: ['C', 'Java', 'Python'],
    webTechnologies: ['HTML', 'CSS'],
    databases: ['SQL', 'MongoDB'],
  };

  const certifications = ['NPTEL Java Certified', 'Python Certification from HackerRank'];

  const projects = [
    'AI-based Facial Recognition System',
    'IoT-based Smart System to Avoid Rules Violation - SmartNet',
    'Developed and Maintained a Website for Volleyball Teammates and Volleyball Images',
  ];

  const workshops = ['Full Stack Bootcamp (48 hours) by MakeSkilled', 'IoT Bootcamp (36 hours) by MadBlocks'];

  const internships = ['AICTE Internship AWS', 'Microsoft Azure Fundamentals'];

  const achievementsAndActivities = [
    'Skilled Internship at MakeSkilled',
    'BlackBucks Full Stack Internship',
    'Team Leader and Active Member in Various Activities at CSI',
    'Avid Volleyball Player',
  ];

  const strengths = ['Team Leader and Team Player', 'Strong Communication Skills', 'Eager to Learn New Things', 'Self-Learning Attitude'];

  return (
    <div>
      <h1>{personalInfo.name} - Portfolio</h1>
      <p>Computer Science Student</p>
      <ul>
        <li><a href={`mailto:${personalInfo.email}`}>Email</a></li>
        <li><a href={`tel:${personalInfo.phone}`}>Phone</a></li>
        <li><a href={personalInfo.linkedIn}>LinkedIn</a></li>
        <li><a href={personalInfo.github}>GitHub</a></li>
        <li><a href={personalInfo.hackerRank}>HackerRank</a></li>
      </ul>

      <section>
        <h2>Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <h3>{edu.school}</h3>
              <p>{edu.duration} - Percentage: {edu.percentage}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming Languages: {technicalSkills.programmingLanguages.join(', ')}</li>
          <li>Web Technologies: {technicalSkills.webTechnologies.join(', ')}</li>
          <li>Databases: {technicalSkills.databases.join(', ')}</li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Workshops and Bootcamps</h2>
        <ul>
          {workshops.map((workshop, index) => (
            <li key={index}>{workshop}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Internships</h2>
        <ul>
          {internships.map((internship, index) => (
            <li key={index}>{internship}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Achievements and Activities</h2>
        <ul>
          {achievementsAndActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Strengths</h2>
        <ul>
          {strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Kanta Showribabu</p>
      </footer>
    </div>
  );
};

export default Portfolio;
