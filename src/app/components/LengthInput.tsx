import { Box, FormControl, FormLabel, Input } from '@mui/material';
import { useRecoilState } from 'recoil';
import { lengthAtom } from './atom';

export default function LengthInput() {
  const [length, setLength] = useRecoilState(lengthAtom);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(event.target.value));
  };
  return (
    <>
      <FormControl required>
        <FormLabel>パスワードの長さ</FormLabel>
        <Input
          type="number"
          defaultValue={length}
          inputProps={{ min: '1', step: '1' }}
          style={{ width: '4rem' }}
          onChange={handleChange}
        />
      </FormControl>
    </>
  );
}
