import status from './status';
import member from './member';
import recipes from './recipes';
import locale from './locale';
import product from './product';
import colors from './colors';
import ui from './ui';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  status,
  member,
  colors,
  recipes,
  locale,
  ui,
  product
};
