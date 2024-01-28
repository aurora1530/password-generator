'use client';

import { Box } from '@mui/material';
import UseCharCheckBox from './UseCharCheckBox';
import GenButton from './GenButton';
import { RecoilRoot } from 'recoil';
import LengthInput from './LengthInput';
import ExcludeCheckBox from './ExcludeCheckBox';
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
            <UseCharCheckBox />
          </OptionsCard>
          <OptionsCard>
            <LengthInput />
          </OptionsCard>
          <OptionsCard>
            <ExcludeCheckBox />
          </OptionsCard>
        </Box>
      </RecoilRoot>
    </>
  );
}
