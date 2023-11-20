import '../global.scss';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Fragment } from 'react';
import { Group, MantineProvider, ColorSchemeScript } from '@mantine/core';
import GlobalTheme from './mantineTheme';

// ====== internal components ====== //
import Logo from '../shared/Logo';
import ThemeToggle from '../features/color-scheme/ThemeToggle';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <Fragment>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider defaultColorScheme="light" theme={GlobalTheme}>
        <Group m="md" justify="space-between">
          <Logo />
          <ThemeToggle />
        </Group>
        <Outlet />
      </MantineProvider>
    </Fragment>
  );
};
