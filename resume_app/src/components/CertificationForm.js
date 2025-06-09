import React from "react";

const CertificationForm=({certifications,setFormData}) => {
    const handleChange=(index,e) =>{
        const {name,value} =e.target;
        const newCerts=[...certifications];
        newCerts[index][name]=value;
        setFormData(prev =>({...prev,certifications:newCerts}));
    };

    const addCertification = () => {
    setFormData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        { title: '', organization: '', date: '', description: '' }
      ]
    }));
  };

    return(
        <div className="certification-form">
            <h3>certification</h3>
            {certifications.map((cert,index)=>(
                <div key={index} className="certification-entry">
                    <input name="title" placeholder="Certificate Title" value={cert.title} onChange={(e) => handleChange(index, e)} />
                    <input name="organization" placeholder="Organization" value={cert.organization} onChange={(e) => handleChange(index, e)} />
                    <input name="date" placeholder="Date" value={cert.date} onChange={(e) => handleChange(index, e)} />
                    <textarea name="description" placeholder="Description" value={cert.description} onChange={(e) => handleChange(index, e)} />

                </div>
            ))}
            <button type="button" onclick={addCertification}>Add More Certificate</button>

        </div>
    );
};
export default CertificationForm;