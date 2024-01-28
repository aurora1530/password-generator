import { Button, Input } from '@mui/material';
import createPassword, { PasswordOptions } from 'password-generator';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  includeCharactersAtom,
  lengthAtom,
  excludeMistakableCharactersAtom,
  charErrorAtom,
} from './atom';

export default function GenButton() {
  const length = useRecoilValue(lengthAtom);
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

  const [copyButtonText, setCopyButtonText] = useState('COPY');
  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopyButtonText('COPIED!');
      setTimeout(() => {
        setCopyButtonText('COPY');
      }, 1000);
    });
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
      <Button variant="outlined" onClick={handleCopy}>
        {copyButtonText}
      </Button>
      <div>
        <Input
          value={password}
          color="primary"
          readOnly
          inputProps={{ style: { textAlign: 'center' } }}
        />
      </div>
    </>
  );
}
