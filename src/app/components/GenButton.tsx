import { Button, Input } from '@mui/material';
import createPassword, { PasswordOptions } from 'password-generator';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  includeCharactersAtom,
  passwordLengthAtom,
  excludeMistakableCharactersAtom,
  charErrorAtom,
} from './atom';

export default function GenButton() {
  const length = useRecoilValue(passwordLengthAtom);
  const includeCharacters = useRecoilValue(includeCharactersAtom);
  const excludeMistakableCharacters = useRecoilValue(excludeMistakableCharactersAtom);
  const charError = useRecoilValue(charErrorAtom);

  const [password, setPassword] = useState('');
  const handleClick = () => {
    const options: PasswordOptions = {
      length,
      includeCharacters,
      excludeMistakableCharacters,
    };
    const pass = createPassword(options);
    setPassword(pass);
  };

  // 初回レンダリング時にパスワードを生成する
  useEffect(() => {
    handleClick();
  }, []);

  const hasError = charError || length <= 0;
  return (
    <>
      <Button variant="outlined" onClick={handleClick} disabled={hasError}>
        GENERATE
      </Button>
      <Input value={password} color="primary" readOnly />
    </>
  );
}
