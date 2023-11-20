import { createTheme } from '@mantine/core';
import { TextInput, Button } from '@mantine/core';

const GlobalTheme = createTheme({
  fontFamily: 'Montserrat, system-ui, -apple-system, sans',
  headings: {
    fontFamily: 'Montserrat, system-ui, -apple-system, sans',
  },
  primaryColor: 'violet',
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: 'md',
      },
    }),
  },
});

export default GlobalTheme;
