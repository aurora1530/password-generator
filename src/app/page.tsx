import Image from 'next/image';
import Header from './components/Header';
import { Box, Container } from '@mui/material';
import UseCharCheckBox from './components/UseCharCheckBox';

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="bg-white">
        <Box sx={{ height: '100vh' }}>
          <UseCharCheckBox />
        </Box>
      </Container>
    </>
  );
}
