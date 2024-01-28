import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { charErrorAtom, includeCharactersAtom } from './atom';

export default function UseCharCheckBox() {
  const [includeCharacters, setIncludeCharacters] = useRecoilState(includeCharactersAtom);
  const [charError, setCharError] = useRecoilState(charErrorAtom);
  const { uppercase, lowercase, number, symbol } = includeCharacters;
  const handleCharChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCharacters = {
      ...includeCharacters,
      [event.target.name]: event.target.checked,
    };
    setIncludeCharacters(newCharacters);
    setCharError(() => Object.values(newCharacters).filter(Boolean).length === 0);
  };

  return (
    <>
      <FormControl required error={charError} variant="standard">
        <FormLabel component="legend">使用する文字種</FormLabel>
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
        {charError && (
          <FormHelperText>少なくとも1つの文字種を選択してください</FormHelperText>
        )}
      </FormControl>
    </>
  );
}
