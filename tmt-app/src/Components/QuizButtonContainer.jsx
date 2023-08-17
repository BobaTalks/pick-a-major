import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { PrimaryBtn } from '../Styling/CustomStyling.js';
function QuizButtonContainer({ step }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        margin: '4.5rem 2rem',
      }}
    >
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-backward"
        component={RouterLink}
        to="/quiz/skills"
      >
        <PrimaryBtn
          sx={{
            backgroundColor: 'white',
            color: 'Matcha.main',
            border: '3px solid #73956F',
            padding: {
              xs: '1rem 1.75rem',
              md: '1.25rem 4.25rem',
            },
            '&:hover': {
              color: 'white',
              border: '3px solid #732C2C',
            },
          }}
        >
          <Typography variant="h4" sx={{ visibility: 'hidden' }}>
            {step === 'classes' ? 'Next Question' : "I'm Finished"}
          </Typography>
          <Typography variant="h4" sx={{ position: 'absolute' }}>
            Back
          </Typography>
        </PrimaryBtn>
      </Link>
      <Link
        sx={{ color: 'Boba.main' }}
        underline="none"
        aria-label="quiz-forward"
        component={RouterLink}
        to="/quiz/skills"
      >
        <PrimaryBtn
          sx={{
            backgroundColor: 'Matcha.main',
            border: '3px solid white',
            padding: {
              xs: '1rem 1.75rem',
              md: '1.25rem 4.25rem',
            },
          }}
        >
          <Typography variant="h4">
            {step === 'classes' ? 'Next Question' : "I'm Finished"}
          </Typography>
        </PrimaryBtn>
      </Link>
    </Box>
  );
}

export default QuizButtonContainer;
