import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import TextTeaserCard from 'components/TextTeaserCard/index';
import Logo from 'components/Logo/Logo';

const Start = () => {
  const theme = useTheme();

  const bottomBoxRendering = useCallback(() => {
    return (
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard
            primaryText="Login"
            prefixText="zum"
            link="/login"
            color={theme.palette.primary.dark}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard
            primaryText="Demo ansehen"
            prefixText="noch nicht überzeugt?"
            link="/"
            color={theme.palette.secondary.main}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
        <Grid item sm={12} md={6} xl={4}>
          <TextTeaserCard
            primaryText="Kontakt aufnehmen"
            prefixText="noch Fragen?"
            link="/"
            color={theme.palette.primary.light}
            ratio={{ md: '3/2' }}
            textAlign="center"
          />
        </Grid>
      </Grid>
    );
  }, [theme]);

  return (
    <>
      <Box
        sx={{
          padding: { xs: theme.spacing(4), sm: theme.spacing(10), md: theme.spacing(16), lg: theme.spacing(20) }
        }}
      >
        <Logo sx={{ maxWidth: '400px', mb: theme.spacing(4) }} />
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography sx={{ mb: { xs: theme.spacing(6), md: theme.spacing(12), lg: theme.spacing(18) } }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tempor nec feugiat nisl pretium fusce id velit ut. Fames ac turpis egestas sed tempus urna et. Diam in arcu cursus euismod.
              Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.
            </Typography>
          </Grid>
        </Grid>
        {bottomBoxRendering()}
      </Box>
    </>
  );
};

export default Start;