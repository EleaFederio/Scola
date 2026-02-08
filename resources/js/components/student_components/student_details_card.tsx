import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
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

interface StudentDetailsCardProps {
  student: Student;
}

const StudentDetailsCard: React.FC<StudentDetailsCardProps> = ({ student }) => {
  const initials = `${student.first_name[0]}${student.last_name[0]}`.toUpperCase();

  const handleCardClick = () => {
    router.visit(`/students/${student.main_id}`);
  };

  return (
    <Card 
      onClick={handleCardClick}
      sx={{ 
        cursor: 'pointer',
        transition: 'box-shadow 0.2s ease',
        '&:hover': {
          boxShadow: 2,
        }
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="flex-start" gap={2}>
          <Avatar sx={{ width: 56, height: 56, flexShrink: 0 }}>
            {initials}
          </Avatar>
          <Box flex={1}>
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
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StudentDetailsCard;