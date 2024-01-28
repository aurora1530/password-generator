import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { charErrorAtom, includeCharactersAtom } from './atom';

export default function IncludeCharCheckBox() {
  const [includeCharacters, setIncludeCharacters] = useRecoilState(includeCharactersAtom);
  const [charError, setCharError] = useRecoilState(charErrorAtom);
  const { uppercase, lowercase, number, symbol } = includeCharacters;

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
      <FormControl required error={charError} variant="standard">
        <FormLabel>使用する文字種</FormLabel>
        <FormGroup>
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
    </>
  );
}
