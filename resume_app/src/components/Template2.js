import React from 'react';
import Temp2 from '../components/Temp2.css';

 const Template2 = ({ data }) => (
  <div className="template template2">
    <h1>{data.name}</h1>
    <div className="contact">
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Address:</strong> {data.address}</p>
    </div>
    <section>
      <h3>Objective</h3>
      <p>{data.objective}</p>
    </section>
    <section>
      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <div key={index}>
          <p><strong>{edu.degree}</strong>, {edu.university}</p>
          <p>{edu.startDate} - {edu.endDate}</p>
          <p>{edu.subjects}</p>
        </div>
      ))}
    </section>
    <section>
      <h3>Experience</h3>
      <p>{data.experience}</p>
    </section>
    <section>
      <h3>Skills</h3>
      <p>{data.skills}</p>
    </section>
  </div>
);

export default Template2;