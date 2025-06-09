import React from 'react';
import '../components/Temp1.css';

const Template1 = ({ data }) => (
  <div className="template template1">
    <h2>{data.name}</h2>
    <p className="info-line">{data.email} | {data.phone} | {data.address}</p>
    <h3>Objective</h3>
    <p>{data.objective}</p>
    <h3>Education</h3>
    {data.education.map((edu, index) => (
      <div key={index}>
        <p><strong>{edu.degree}</strong>, {edu.university}</p>
        <p>{edu.startDate} - {edu.endDate}</p>
        <p>{edu.subjects}</p>
      </div>
    ))}
    <h3>Experience</h3>
    <p>{data.experience}</p>
    <h3>Skills</h3>
    <p>{data.skills}</p>
  </div>
);

export default Template1;