import { useRecoilState } from 'recoil';
import { excludeMistakableCharactersAtom } from './atom';
import { Checkbox, FormControl, FormLabel } from '@mui/material';

export default function ExcludeCheckBox() {
  const [exclude, setExclude] = useRecoilState(excludeMistakableCharactersAtom);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExclude(event.target.checked);
  };

  return (
    <>
      <FormControl>
        <FormLabel>間違いやすい文字を除く</FormLabel>
        <Checkbox onChange={handleChange} checked={exclude} />
      </FormControl>
    </>
  );
}
