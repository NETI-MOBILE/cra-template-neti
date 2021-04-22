import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { routes } from '../routes';

const NotFoundScreen: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" py={8}>
        <Box mb={2}>
          <Typography variant="h2">Ошибка 404</Typography>
        </Box>
        <Box mb={4}>
          <Typography>Страница не найдена</Typography>
        </Box>

        <Link to={routes.MainScreen.path} className="router-link">
          <Button variant="outlined" color="primary" startIcon={<ArrowBackIcon />}>
            На главную
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFoundScreen;
