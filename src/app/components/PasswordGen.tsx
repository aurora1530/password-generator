'use client';
import { Box } from '@mui/material';
import UseCharCheckBox from './UseCharCheckBox';
import GenButton from './GenButton';
import { RecoilRoot } from 'recoil';
import LengthInput from './LengthInput';
import ExcludeCheckBox from './ExcludeCheckBox';

export default function PasswordGen() {
  return (
    <>
      <RecoilRoot>
        <Box>
          <div>
            <GenButton />
          </div>
          <UseCharCheckBox />
          <LengthInput />
          <ExcludeCheckBox />
        </Box>
      </RecoilRoot>
    </>
  );
}
