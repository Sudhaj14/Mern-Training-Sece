const fs = require('fs');
const filePath = 'student.json'; 

const readStudents = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error ');
      return;
    }
    let students = [];
    try {
      students = JSON.parse(data); 
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      return;
    }
    console.log(students); 
  });
};

const createStudent = (newStudent) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error', err);
      return;
    }

    let students = [];
    try {
      students = JSON.parse(data); 
    } catch (parseErr) {
      console.error('Error ');
      return;
    }

    students.push(newStudent);

    
    fs.writeFile(filePath, JSON.stringify(students, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error ', writeErr);
        return;
      }
      console.log('Student added');
    });
  });
};

const updateStudent = (rollNo, updatedInfo) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    let students = [];
    try {
      students = JSON.parse(data); 
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      return;
    }

    const studentIndex = students.findIndex(student => student.rollNo === rollNo);
    if (studentIndex === -1) {
      console.log('Student not found!');
      return;
    }

    students[studentIndex] = { ...students[studentIndex], ...updatedInfo };

    fs.writeFile(filePath, JSON.stringify(students, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
        return;
      }
      console.log('Student details updated successfully!');
    });
  });
};


const deleteStudent = (rollNo) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    let students = [];
    try {
      students = JSON.parse(data); 
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      return;
    }


    const updatedStudents = students.filter(student => student.rollNo !== rollNo);

    if (students.length === updatedStudents.length) {
      console.log('Student not found!');
      return;
    }


    fs.writeFile(filePath, JSON.stringify(updatedStudents, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
        return;
      }
      console.log('Student deleted successfully!');
    });
  });
};

const newStudent = { name: 'Reethika', rollNo: '202301', dept: 'CSE', dob: '2003-01-01' };
createStudent(newStudent);

readStudents();

// Update a student
const updatedInfo = { name: 'Johnathan Doe', dept: 'IT' };
updateStudent('202301', updatedInfo);

// Delete a student
deleteStudent('202301');