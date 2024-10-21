// src/api/employee.js

const EMPLOYEE_API_URL = '/api/employees';

// Function to upload employee data in bulk
export const uploadEmployeeData = async (employeeData) => {
  try {
    const response = await fetch(`${EMPLOYEE_API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error('Failed to upload employee data');
    }

    return await response.json(); // Return success message or uploaded data
  } catch (error) {
    console.error('Error uploading employee data:', error);
    throw error;
  }
};
