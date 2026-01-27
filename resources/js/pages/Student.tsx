import React, { useState } from 'react';
import Navbar from '../components/navbar';
import CreateNewStudentModal from '../components/student_components/create_new_student_modal';
import StudentDetailsCard from '../components/student_components/student_details_card';
import { Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { router } from '@inertiajs/react';

interface Student {
  main_id: number;
  school_id: string;
  first_name: string;
  last_name: string;
  middle_initial?: string;
  address: string;
  email: string;
  gender: string;
}

interface Props {
  students: Student[];
}

const Student: React.FC<Props> = ({ students }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmitStudent = (data: any) => {
    router.post('/students', data, {
      onSuccess: () => {
        console.log('Student added successfully');
        window.location.reload();
      },
      onError: (errors) => {
        console.error('Error adding student:', errors);
      },
    });
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Students</h1>
        <p>Manage student information here.</p>

        <Grid container spacing={2}>
          {students.map((student) => (
            <Grid item xs={12} md={3} key={student.main_id}>
              <StudentDetailsCard student={student} />
            </Grid>
          ))}
        </Grid>
      </div>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={handleOpenModal}
      >
        <AddIcon />
      </Fab>

      <CreateNewStudentModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitStudent}
      />
    </div>
  );
};

export default Student;