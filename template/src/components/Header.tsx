import { Box, Container, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <header>
      <Box mb={5}>
        <Container maxWidth="xl">
          <Box py={3} minHeight={60}>
            <Typography>Header</Typography>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
