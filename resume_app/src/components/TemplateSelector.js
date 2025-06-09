import React from 'react';

const TemplateSelector = ({ setSelectedTemplate }) => {
  return (
    <div className="template-selector">
      <h3>Select a Template</h3>
      {[1, 2].map((num) => (
        <button key={num} onClick={() => setSelectedTemplate(num)}>Template {num}</button>
      ))}
    </div>
  );
};

export default TemplateSelector;