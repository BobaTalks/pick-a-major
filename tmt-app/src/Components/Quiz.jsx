import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

import { CustomTheme } from '../Styling/CustomStyling';
import {
  CAREERS_CARDS_PLACEHOLDERS,
  SOFT_SKILL_LIST,
} from '../utils/constants';
import BobaBot from './BobaBot';
import QuestionCard from './QuestionCard';

function Quiz() {
  const { step } = useParams();

  const dataSets = {
    classes: CAREERS_CARDS_PLACEHOLDERS,
    skills: SOFT_SKILL_LIST,
  };
  const data = dataSets[step] || dataSets['classes'];

  return (
    <Container sx={{ width: '100%' }}>
      <Text step={step} />
      <Grid container justifyContent={{ md: 'center', lg: 'flex-start' }}>
        {data.map((item) => (
          <Grid item key={item.title}>
            <QuestionCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Text({ step }) {
  const textContent = {
    classes: {
      title1: "Let's order some boba! Pick your base(s).",
      title2: 'What university classes sound interesting to you?',
      subtitle: 'Select more than 3.',
      bobaBot: '5 is the maximum.',
    },
    skills: {
      title1: 'Pick your toppings and add-ons.',
      title2: 'What skills would you like to use in a career?',
      subtitle: 'Select more than one.',
      bobaBot: '6 is the maximum.',
    },
  };

  const content = textContent[step] || textContent['classes'];

  return (
    <Grid
      container
      direction="row"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX={5}
      sx={{
        '@media (max-width: 1000px)': {
          justifyContent: 'center',
          textAlign: 'center',
        },
      }}
    >
      <Grid item>
        <Grid container direction="column" display="flex">
          <Typography variant="h3" mb={3}>
            {content.title1}
          </Typography>
          <Typography variant="h3">{content.title2}</Typography>
          <Typography variant="h5" color={CustomTheme.palette.ThaiTea.main}>
            {content.subtitle}
          </Typography>
          <div style={{ height: 40 }} />
        </Grid>
      </Grid>
      <Grid item>
        <BobaBot text={content.bobaBot} />
      </Grid>
    </Grid>
  );
}

export default Quiz;
