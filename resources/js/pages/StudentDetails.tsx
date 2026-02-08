import React from 'react';
import { useRoute } from '@inertiajs/react';
import Navbar from '../components/navbar';
import { Card, CardContent, Typography, Avatar, Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
  student: Student;
}

const StudentDetails: React.FC<Props> = ({ student }) => {
  const initials = `${student.first_name[0]}${student.last_name[0]}`.toUpperCase();

  const handleGoBack = () => {
    router.visit('/students');
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleGoBack}
          sx={{ marginBottom: '20px' }}
        >
          Back to Students
        </Button>

        <Card>
          <CardContent>
            <Box display="flex" alignItems="flex-start" gap={3}>
              <Avatar sx={{ width: 80, height: 80, flexShrink: 0 }}>
                {initials}
              </Avatar>
              <Box flex={1}>
                <Typography variant="h4" component="div" sx={{ marginBottom: '20px' }}>
                  {student.first_name} {student.middle_initial ? student.middle_initial + ' ' : ''}{student.last_name}
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      School ID
                    </Typography>
                    <Typography variant="body1">
                      {student.school_id}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Gender
                    </Typography>
                    <Typography variant="body1">
                      {student.gender.charAt(0).toUpperCase() + student.gender.slice(1)}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      {student.email}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Address
                    </Typography>
                    <Typography variant="body1">
                      {student.address}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDetails;
