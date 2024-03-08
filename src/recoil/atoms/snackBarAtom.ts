import { atom } from 'recoil';

// Types
import { SnackBarState } from '../../types';

const snackBarState = atom<SnackBarState | null>({
  key: 'SnackBar',
  default: null,
});

export default snackBarState;