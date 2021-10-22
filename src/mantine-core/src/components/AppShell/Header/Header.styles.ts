import { createStyles, getFontStyles, getSizeValue, MantineNumberSize } from '@mantine/styles';

export interface HeaderPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface HeaderStyles {
  height: number | string;
  padding: MantineNumberSize;
  fixed: boolean;
  position: HeaderPosition;
}

export default createStyles((theme, { height, padding, fixed, position }: HeaderStyles) => ({
  root: {
    ...getFontStyles(theme),
    ...position,
    height,
    maxHeight: height,
    position: fixed ? 'fixed' : 'static',
    boxSizing: 'border-box',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
  },
}));
