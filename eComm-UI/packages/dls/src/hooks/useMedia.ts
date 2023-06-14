import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface UseMedia {
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useMedia(): UseMedia {
  const theme     = useTheme();
  const isPhone   = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet  = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return { isPhone, isTablet, isDesktop };
}

export function useIsPhone(): boolean {
  const theme    = useTheme();
  const isPhone  = useMediaQuery(theme.breakpoints.down('sm'));
  return isPhone;
}

export function useIsTablet(): boolean {
  const theme    = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return isTablet;
}

export function useIsDesktop(): boolean {
  const theme     = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return isDesktop;
}

export default useMedia;
