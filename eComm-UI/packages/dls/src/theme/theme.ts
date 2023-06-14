import { createTheme } from '@mui/material/styles';
import { GenericObject } from '@shop/core/src/types';
import merge from 'lodash.merge';
import deepcopy from 'deepcopy';
import { DLSTheme } from '../types';
import json from './theme.json5';

export let { dls } = json;

const getEntry = (...args: string[]) => {
  let val: unknown;
  for (const arg of args) {
    val = (val || dls)[arg];
  }
  return val;
};

export const dlsColor = (color: string) => {
  const val = dls.colors[color];
  if (!val) {
    console.warn('color', color);
  }
  return val;
};
  
export const dlsAlt = (...args: string[]): unknown => {
  const val = getEntry('alt', ...args);
  if (!val) {
    console.warn('alternative', ...args);
  }
  return val;
};

export const createCustomTheme = (overrides: GenericObject, includeDefaults = true): DLSTheme => {
  const theme = includeDefaults ? merge(deepcopy(json), overrides) : overrides;
  dls     = theme.dls;
  return createTheme(theme) as DLSTheme;
};

const createDefaultTheme = (): DLSTheme => {
  return createCustomTheme(json, false);
};

export default createDefaultTheme;
