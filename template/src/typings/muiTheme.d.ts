import '@material-ui/core/styles/createBreakpoints';
import { AutocompleteClassKey } from '@material-ui/lab';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Custom overrides declare
declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiAutocomplete: AutocompleteClassKey;
  }
}
