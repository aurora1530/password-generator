import { atom } from 'recoil';

export const passwordLengthAtom = atom({
  key: 'passwordLength',
  default: 10,
});

export const charErrorAtom = atom({
  key: 'charError',
  default: false,
});

export const includeCharactersAtom = atom({
  key: 'includeCharacters',
  default: {
    lowercase: true,
    uppercase: true,
    number: true,
    symbol: false,
  },
});

export const excludeMistakableCharactersAtom = atom({
  key: 'excludeMistakableCharacters',
  default: true,
});
