import { Box, Button, Container, Grid, Typography, TextField, FormLabel } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const MainScreen: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box mb={8}>
        <Typography variant="h2">Стартовый шаблон CRA</Typography>
      </Box>

      <Box display="flex" flexDirection="column">
        <Box mb={2}>
          <Typography variant="h4">Typography</Typography>
        </Box>
        <Box mb={6}>
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="h4">Buttons</Typography>
        </Box>
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined">Outlined</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Outlined primary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                Outlined secondary
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box mb={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">Contained</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Contained primary
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Contained secondary
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box mb={2}>
          <Typography variant="h4">Inputs</Typography>
        </Box>
        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item>
              <TextField variant="outlined" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField defaultValue="Value" variant="outlined" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField defaultValue="Value" variant="outlined" placeholder="Placeholder" disabled>
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                defaultValue="Value"
                variant="outlined"
                placeholder="Placeholder"
                error
                helperText="Error message"
              >
                Outlined
              </TextField>
            </Grid>
          </Grid>
        </Box>

        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item>
              <TextField variant="outlined" label="Label" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField defaultValue="Value" variant="outlined" label="Label" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField defaultValue="Value" variant="outlined" label="Label" placeholder="Placeholder" disabled>
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                defaultValue="Value"
                variant="outlined"
                label="Label"
                placeholder="Placeholder"
                error
                helperText="Error message"
              >
                Outlined
              </TextField>
            </Grid>
          </Grid>
        </Box>

        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item>
              <FormLabel>Label</FormLabel>
              <TextField variant="outlined" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <FormLabel>Label</FormLabel>
              <TextField defaultValue="Value" variant="outlined" placeholder="Placeholder">
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <FormLabel>Label</FormLabel>
              <TextField defaultValue="Value" variant="outlined" placeholder="Placeholder" disabled>
                Outlined
              </TextField>
            </Grid>
            <Grid item>
              <FormLabel>Error</FormLabel>
              <TextField
                defaultValue="Value"
                variant="outlined"
                placeholder="Placeholder"
                error
                helperText="Error message"
              >
                Outlined
              </TextField>
            </Grid>
          </Grid>
        </Box>

        <Box mb={3}>
          <Grid container spacing={2}>
            <Grid item>
              <FormLabel>&nbsp;</FormLabel>
              <Autocomplete
                options={[
                  { title: 'The Shawshank Redemption', year: 1994 },
                  { title: 'The Godfather', year: 1972 },
                  { title: 'The Godfather: Part II', year: 1974 },
                  { title: 'The Dark Knight', year: 2008 },
                  { title: '12 Angry Men', year: 1957 },
                ]}
                getOptionLabel={option => option.title}
                style={{ width: 264 }}
                renderInput={params => <TextField {...params} label="Autocomplete" variant="outlined" />}
              />
            </Grid>
            <Grid item>
              <FormLabel>Autocomplete</FormLabel>
              <Autocomplete
                options={[
                  { title: 'The Shawshank Redemption', year: 1994 },
                  { title: 'The Godfather', year: 1972 },
                  { title: 'The Godfather: Part II', year: 1974 },
                  { title: 'The Dark Knight', year: 2008 },
                  { title: '12 Angry Men', year: 1957 },
                ]}
                getOptionLabel={option => option.title}
                style={{ width: 264 }}
                renderInput={params => <TextField {...params} placeholder="Autocomplete" variant="outlined" />}
              />
            </Grid>
            <Grid item>
              <FormLabel>Autocomplete</FormLabel>
              <Autocomplete
                options={[
                  { title: 'The Shawshank Redemption', year: 1994 },
                  { title: 'The Godfather', year: 1972 },
                  { title: 'The Godfather: Part II', year: 1974 },
                  { title: 'The Dark Knight', year: 2008 },
                  { title: '12 Angry Men', year: 1957 },
                ]}
                getOptionLabel={option => option.title}
                style={{ width: 264 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    placeholder="Autocomplete"
                    variant="outlined"
                    error
                    helperText="Error message"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default MainScreen;
