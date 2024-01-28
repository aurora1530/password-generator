import Header from './components/Header';
import { Box, Container } from '@mui/material';
import App from './components/App';

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="bg-white">
        <Box sx={{ height: '90vh' }}>
          <App />
        </Box>
      </Container>
    </>
  );
}
