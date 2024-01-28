'use client';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import IncludeCharCheckBox from './IncludeCharCheckBox';
import GenButton from './GenButton';
import { RecoilRoot } from 'recoil';
import LengthInput from './LengthInput';
import ExcludeCharCheckBox from './ExcludeCharCheckBox';
import OutlinedCard from './OutlinedCard';
import theme from '../theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <Box>
            <OutlinedCard>
              <GenButton />
            </OutlinedCard>
            <OutlinedCard>
              <LengthInput />
            </OutlinedCard>
            <OutlinedCard>
              <IncludeCharCheckBox />
            </OutlinedCard>
            <OutlinedCard>
              <ExcludeCharCheckBox />
            </OutlinedCard>
          </Box>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
