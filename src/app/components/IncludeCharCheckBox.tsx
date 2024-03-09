import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextareaAutosize,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import {
  charErrorAtom,
  includeCharactersAtom,
  excludeMistakableCharactersAtom,
} from './atom';
import { defaultCharacters, mistakableCharacters } from 'password-generator';

export default function IncludeCharCheckBox() {
  const [includeCharacters, setIncludeCharacters] = useRecoilState(includeCharactersAtom);
  const [excludeMistakableChars, setExcludeMistakableChars] = useRecoilState(
    excludeMistakableCharactersAtom
  );
  const [charError, setCharError] = useRecoilState(charErrorAtom);
  const { lowercase, uppercase, number, symbol } = includeCharacters;
  const targetChars = Object.entries(includeCharacters)
    .filter(([, value]) => value)
    .map(([key]) => defaultCharacters[key as keyof typeof defaultCharacters])
    .join('')
    .split('')
    .filter(
      (c) =>
        !excludeMistakableChars ||
        !Object.values(mistakableCharacters).join('').includes(c)
    );

  const handleCharChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCharacters = {
      ...includeCharacters,
      [event.target.name]: event.target.checked,
    };
    setIncludeCharacters((chars) => (chars = newCharacters));
    setCharError(() => Object.values(newCharacters).filter(Boolean).length === 0);
  };

  return (
    <>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
        <FormControl required error={charError} variant="standard">
          <FormLabel>使用する文字種</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCharChange}
                  checked={lowercase}
                  name="lowercase"
                />
              }
              label="小文字"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleCharChange}
                  checked={uppercase}
                  name="uppercase"
                />
              }
              label="大文字"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleCharChange} checked={number} name="number" />
              }
              label="数字"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleCharChange} checked={symbol} />}
              label="記号"
              name="symbol"
            />
          </FormGroup>

          <FormHelperText style={{ color: charError ? '' : 'transparent' }}>
            少なくとも1つの文字種を選択してください
          </FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>使用する文字</FormLabel>
          <br />
          <TextareaAutosize
            value={targetChars.join('')}
            readOnly
            style={{
              border: '1px solid #000',
              borderRadius: '12px 12px 0 12px',
              padding: '0.5rem',
            }}
          ></TextareaAutosize>
        </FormControl>
      </Box>
    </>
  );
}
