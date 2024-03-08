import { atom } from 'recoil';

const musicPlayerState = atom<boolean>({
  key: 'MusicPlayer',
  default: false,
});

export default musicPlayerState;