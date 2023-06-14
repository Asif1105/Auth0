
import { Product } from '@shop/core/src/types';
import { FormFieldType } from './shipping/Shipping';

export type FieldType = {
  value?: string | null;
  error?: string | null;
  hasError?: boolean;
  required?: boolean;
  disabled?: boolean;
};
export interface CartState {
  isInitialized: boolean;
  item?: Product | null;
  items?: Product[] | [];
  shippingInfo?: FormFieldType;
};
