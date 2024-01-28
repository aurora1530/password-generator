'use client';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import IncludeCharCheckBox from './IncludeCharCheckBox';
import GenButton from './GenButton';
import { RecoilRoot } from 'recoil';
import LengthInput from './LengthInput';
import ExcludeCharCheckBox from './ExcludeCharCheckBox';
import OptionsCard from './OptionCard';
import theme from '../theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RecoilRoot>
          <Box>
            <OptionsCard>
              <GenButton />
            </OptionsCard>
            <OptionsCard>
              <IncludeCharCheckBox />
            </OptionsCard>
            <OptionsCard>
              <LengthInput />
            </OptionsCard>
            <OptionsCard>
              <ExcludeCharCheckBox />
            </OptionsCard>
          </Box>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
