import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import TemplateSelector from './components/TemplateSelector';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import style from '../src/style.css';

const templates = {
  1: Template1,
  2: Template2,
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    objective: '',
    experience: '',
    skills: '',
    education: [
      {
        degree: '',
        university: '',
        startDate: '',
        endDate: '',
        subjects: ''
      }
    ]
  });

  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const SelectedTemplate = templates[selectedTemplate];
    
  return (
    <div className="app-container">
      <h1 style={{color:'green'}}>Resume Builder</h1>
      <TemplateSelector setSelectedTemplate={setSelectedTemplate} />
      <div className="main-content">
        <ResumeForm formData={formData} setFormData={setFormData} />
        <div className="preview">
          <SelectedTemplate data={formData} />
          <button onClick={() => window.print()}>Print PDF</button>
        </div>
      </div>
    </div>
  );
}
