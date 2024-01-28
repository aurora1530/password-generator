'use client';

import { Box } from '@mui/material';
import IncludeCharCheckBox from './IncludeCharCheckBox';
import GenButton from './GenButton';
import { RecoilRoot } from 'recoil';
import LengthInput from './LengthInput';
import ExcludeCharCheckBox from './ExcludeCharCheckBox';
import OptionsCard from './OptionCard';

export default function App() {
  return (
    <>
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
    </>
  );
}
