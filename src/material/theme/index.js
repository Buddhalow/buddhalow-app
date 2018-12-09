import { createMuiTheme } from '@material-ui/core/styles';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../config';

const palette = () => ({
  primary: { main: localStorage.getItem('primary_color') || PRIMARY_COLOR },
  secondary: { main: localStorage.getItem('secondary_color') || SECONDARY_COLOR },
});

export const skeuomorphicPrimary = () => ({
  // Some CSS
  background: `linear-gradient(-180deg, rgba(255, 255, 255, .28) 0%, rgba(255, 255, 255, .0) 100%), linear-gradient(45deg, ${palette().primary.main} 30%, ${palette().secondary.main} 190%)`,
  boxShadow: ' inset 0pt 23pt 0pt rgba(255, 255, 255, .2), inset 0pt 1px 0pt rgba(0, 0, 0, .28), inset 0pt 2pt 1pt rgba(255, 255, 255, .5), 0 3px 5px 2px rgba(255, 105, 135, .2)',
  textShadow: '0pt 1pt 0pt rgba(255, 255, 255, .5)',
});

export const skeuomorphicInput = () => ({
  // Some CSS
  backgroundColor: `white`,
  boxShadow: 'inset 0pt 1px 0pt rgba(0, 0, 0, .28),  0pt 0pt 1pt rgba(255, 255, 255, .5)',
  textShadow: '0pt 1pt 0pt rgba(255, 255, 255, .5)',
});

export const skeuomorphic = () => ({
  // Some CSS
  background: 'linear-gradient(-180deg, rgba(255, 255, 255, .58) 0%, rgba(255, 255, 255, .0) 100%), #eee',
  boxShadow: '0pt 0pt 2pt rgba(0, 0, 0, .9), inset 0pt 1px 0pt rgba(0, 0, 0, .28), inset 0pt -1pt 0pt rgba(255, 255, 255, .9), inset 0pt 2pt 1pt rgba(255, 255, 255, .5), 0 3px 5px 2px rgba(0, 0, 0, .2)',
  textShadow: '0pt 1pt 0pt rgba(255, 255, 255, .5)',
});

const root = {
  fontFamily: 'Tahoma',
  fontSize: '11px',
};
const overrides = {
  root: {
    ...root,
    backgroundColor: '#ddd'
  },
  MuiGrid: {
    root: {
      height: '100%'
    }
  },
  MuiCard: {
    root: {
      boxShadow: '0pt 1pt 2pt rgba(0, 0, 0, .1)'
    }
  },
  MuiInputBase: {
    root: {
  //    skeuomorphicInput: skeuomorphicInput(),
    },
  },
  MuiAppBar: {
    // Name of the rule
    root: {
    //  ...skeuomorphicPrimary(),
    boxShadow: 'none'
    },
  },
};
const themeName = 'Mauvelous Cold Purple Hamsters';

export default createMuiTheme({
  root,
  palette: palette(),
  typography: {
    useNextVariants: true,
  },
  themeName,
  overrides,
});
