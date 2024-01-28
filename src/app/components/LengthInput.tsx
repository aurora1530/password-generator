import { Box, Button, FormControl, FormLabel, Input } from '@mui/material';
import { useRecoilState } from 'recoil';
import { lengthAtom } from './atom';
import { Add, Remove } from '@mui/icons-material';
export default function LengthInput() {
  const [length, setLength] = useRecoilState(lengthAtom);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(event.target.value));
  };
  const handleAdd = () => setLength((pre) => pre + 1);
  const handleRemove = () =>
    setLength((pre) => {
      if (pre > 1) return pre - 1;
      return pre;
    });
  return (
    <FormControl required>
      <FormLabel>パスワードの長さ</FormLabel>
      <Box display="flex">
        <Input
          type="number"
          value={length}
          inputProps={{ min: '1', step: '1' }}
          style={{ width: '4rem' }}
          onChange={handleChange}
        />
        <Button variant="outlined" size="small" onClick={handleAdd}>
          <Add fontSize="small" />
        </Button>
        <Button variant="outlined" size="small" onClick={handleRemove}>
          <Remove fontSize="small" />
        </Button>
      </Box>
    </FormControl>
  );
}
