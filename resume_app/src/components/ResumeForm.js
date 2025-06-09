// File: src/components/ResumeForm.js
import React from 'react';
import EducationForm from './EducationForm';
import CertificationForm from './CertificationForm';


const ResumeForm = ({ formData, setFormData }) => {
  if (typeof setFormData !== 'function') {
    console.error('setFormData is not a function');
    return <p>Error loading form controls. Please check App.js</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   return (
    <div className="form-container">
      <h2>Fill Your Resume Info</h2>
      <input name="name" placeholder="Full Name" value={formData.name || ''} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={formData.phone || ''} onChange={handleChange} />
      <input name="address" placeholder="Address" value={formData.address || ''} onChange={handleChange} />
      <textarea name="objective" placeholder="Objective" value={formData.objective || ''} onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" value={formData.experience || ''} onChange={handleChange} />
      <textarea name="skills" placeholder="Skills" value={formData.skills || ''} onChange={handleChange} />

      <EducationForm education={formData.education} setFormData={setFormData} />
      <CertificationForm certifications={formData.certifications} setFormData={setFormData} />
    </div>
  );
};

export default ResumeForm;
