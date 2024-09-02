import React from 'react';
import SkillIcon from './SkillIcon';
import skills from '../data/Skills';  // Importing the skills data

const SkillSection = () => {
  return (
    <div className="skill-section">
      <h2 className="section-title">My Skills</h2>
      <p className="section-description">
        Here are some of the skills I've acquired over the years.
      </p>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillIcon 
            key={skill.name}
            icon={skill.icon}
            skillName={skill.name}
            tooltipText={skill.tooltip}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
