import React from 'react';
import PropTypes from 'prop-types';

const SkillIcon = ({ icon, skillName, tooltipText, ...props }) => {
  return (
    <div className="skill-icon-container" {...props}>
      <img 
        src={icon} 
        alt={skillName} 
        className="skill-icon" 
        title={tooltipText || skillName} 
      />
      {skillName && <p className="skill-name">{skillName}</p>}
    </div>
  );
};

SkillIcon.propTypes = {
  icon: PropTypes.string.isRequired, 
  skillName: PropTypes.string,        
  tooltipText: PropTypes.string       
};

SkillIcon.defaultProps = {
  skillName: '',
  tooltipText: ''
};

export default SkillIcon;
