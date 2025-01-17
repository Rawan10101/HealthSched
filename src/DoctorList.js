import React from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorList() {
  const doctors = [
    { id: 1, name: 'Dr. John Doe' },
    { id: 2, name: 'Dr. Jane Smith' },
    { id: 3, name: 'Dr. Emily Johnson' },
  ];

  const navigate = useNavigate();

  const handleClick = (doctorName) => {
    alert(`You have selected ${doctorName} for an appointment.`);
    // You can handle scheduling logic here.
    // For now, it simply shows an alert.
  };

  return (
    <div className="doctor-list">
      <h2>Select a Doctor</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <button onClick={() => handleClick(doctor.name)}>
              {doctor.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;
