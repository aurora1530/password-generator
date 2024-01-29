import { Button, Input } from '@mui/material';
import createPassword, { PasswordOptions } from 'password-generator';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  includeCharactersAtom,
  lengthAtom,
  excludeMistakableCharactersAtom,
  charErrorAtom,
} from './atom';

export default function GenButton() {
  const [length, setLength] = useRecoilState(lengthAtom);
  const [includeChars, setIncludeChars] = useRecoilState(includeCharactersAtom);
  const [excludeMistakableChars, setExcludeMistakableChars] = useRecoilState(
    excludeMistakableCharactersAtom
  );
  const [charError, setCharError] = useRecoilState(charErrorAtom);

  const [password, setPassword] = useState('');
  const handleGen = () => {
    const options: PasswordOptions = {
      length,
      includeCharacters: includeChars,
      excludeMistakableCharacters: excludeMistakableChars,
    };
    console.log(options);
    const pass = createPassword(options);
    setPassword(pass);
  };

  // 初回レンダリング時にパスワードを生成する
  useEffect(() => {
    handleGen();
  }, []);

  const [copyButtonText, setCopyButtonText] = useState('COPY');
  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopyButtonText('COPIED!');
      setTimeout(() => {
        setCopyButtonText('COPY');
      }, 1000);
    });
  };

  const resetLength = useResetRecoilState(lengthAtom);
  const resetIncludeChars = useResetRecoilState(includeCharactersAtom);
  const resetExcludeMistakableChars = useResetRecoilState(
    excludeMistakableCharactersAtom
  );
  const resetCharError = useResetRecoilState(charErrorAtom);
  const [resetTrigger, setResetTrigger] = useState(false);
  useEffect(() => {
    if (resetTrigger) {
      setResetTrigger(false);
      handleGen();
    }
  }, [resetTrigger]);

  const handleReset = () => {
    resetLength();
    resetIncludeChars();
    resetExcludeMistakableChars();
    resetCharError();

    setResetTrigger((resetTrigger) => !resetTrigger);
  };

  const hasError = charError || length <= 0;
  return (
    <>
      <Button variant="outlined" onClick={handleGen} disabled={hasError}>
        GENERATE
      </Button>
      <Button variant="outlined" onClick={handleCopy}>
        {copyButtonText}
      </Button>
      <Button variant="contained" onClick={handleReset} color="error" sx={{ ml: 2 }}>
        RESET
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
