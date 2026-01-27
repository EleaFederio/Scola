import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

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

interface StudentDetailsCardProps {
  student: Student;
}

const StudentDetailsCard: React.FC<StudentDetailsCardProps> = ({ student }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {student.first_name} {student.middle_initial ? student.middle_initial + ' ' : ''}{student.last_name}
        </Typography>
        <Typography color="text.secondary">
          School ID: {student.school_id}
        </Typography>
        <Typography variant="body2">
          Email: {student.email}
        </Typography>
        <Typography variant="body2">
          Gender: {student.gender}
        </Typography>
        <Typography variant="body2">
          Address: {student.address}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StudentDetailsCard;