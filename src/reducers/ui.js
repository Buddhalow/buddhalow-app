import { DEFAULT_LOCALE } from '../i18n';

export const initialState = {
  headerImageUrl: ''
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'UI_HEADER_IMAGE_URL_SET': { 
      return {
        ...state,
        headerImageUrl: action.data
      };
    }
    default:
      return state;
  }
}
