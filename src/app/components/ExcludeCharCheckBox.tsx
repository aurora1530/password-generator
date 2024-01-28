import { useRecoilState } from 'recoil';
import { excludeMistakableCharactersAtom } from './atom';
import { Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { mistakableCharacters } from 'password-generator';

export default function ExcludeCharCheckBox() {
  const [exclude, setExclude] = useRecoilState(excludeMistakableCharactersAtom);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExclude(event.target.checked);
  };
  const mistakableChars = Object.values(mistakableCharacters).join('');
  return (
    <>
      <FormControl>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} checked={exclude} />}
          label="似た文字を除外"
        ></FormControlLabel>
      </FormControl>
      <hr />
      例:{' '}
      {mistakableChars
        .split('')
        .map((c) => `${c}`)
        .join(', ')}
    </>
  );
}
