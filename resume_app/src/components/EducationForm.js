import React from 'react';

const EducationForm = ({ education, setFormData }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setFormData(prev => ({ ...prev, education: newEducation }));
  };
  
    const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: '', university: '', startDate: '', endDate: '', subjects: '' }
      ]
    }));
  };

  return (
    <div className="education-form">
      <h3>Education Details</h3>
      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <input name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(index, e)} />
          <input name="university" placeholder="University/College" value={edu.university} onChange={(e) => handleChange(index, e)} />
          <input name="startDate" placeholder="Start Date" value={edu.startDate} onChange={(e) => handleChange(index, e)} />
          <input name="endDate" placeholder="End Date" value={edu.endDate} onChange={(e) => handleChange(index, e)} />
          <textarea name="subjects" placeholder="Subjects / Major Topics" value={edu.subjects} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add More Education</button>
    </div>
  );
};

export default EducationForm;