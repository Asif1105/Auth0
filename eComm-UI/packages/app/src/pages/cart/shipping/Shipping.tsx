import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import isEmpty from 'lodash.isempty';
import TextField from '@shop/dls/src/components/textfield/TextField';
import { dlsColor } from '@shop/dls/src/theme/theme';
import { PrimaryButton, SecondaryButton } from '@shop/dls/src/components/buttons';
import classnames from 'classnames';
import { DLSTheme } from '@shop/dls/src/types';
import { isValidEmail } from '@shop/core/src/utils';
import { Title } from '@shop/dls/src/components/title';
import { setShippingInfo } from '../../../store/actions/cart';
import * as translations from '../../../translations';
import { FieldType } from '../state';
import { ApplicationState } from '../../../types';

export enum FormFields {
  firstName = 'First Name',
  lastName = 'Last Name',
  email = 'Email',
  address = 'Address'
};

export interface CheckoutFormProps {};

export interface FormFieldType {
  [FormFields.firstName]?: FieldType
  [FormFields.lastName]?: FieldType
  [FormFields.email]?: FieldType
  [FormFields.address]?: FieldType
};

export const useStyles = makeStyles((theme: DLSTheme) => ({
  shipping : {
    margin                                       : '10px 0',
    '& .MuiInput-underline.Mui-disabled::before' : {
      borderBottomStyle : 'solid',
      borderColor       : '#82828229 !important'
    }
  },
  input : {
    '&&' : {
      padding : '0 10px !important'
    }
  },
  inputUnderline : {
    '&::after' : {
      borderColor : dlsColor('caBlue')
    },
    '&::before' : {
      borderColor       : `${dlsColor('grey3')} !important`,
      borderBottomWidth : '1px !important'
    }
  },
  field : {
    padding : '10px'
  },
  firstName : {},
  lastName  : {},
  email     : {},
  address   : {},
  actions   : {
    display        : 'flex',
    justifyContent : 'center',
    alignItems     : 'center',
    '& > div'      : {
      padding : '10px'
    }
  }
}));

const textFieldStyleOverrides = (theme: DLSTheme) => ({
  floatingLabel : {
    color  : theme.dls.colors.grey3,
    zIndex : 2
  },
  root : {
    '&&' : {
      width     : '100%',
      margin    : '10px 0',
      '&:hover' : {
        backgroundColor : 'transparent'
      }
    }
  },
  underline : {
    backgroundColor : 'transparent'
  },
  inputRoot : {
    '& input' : {
      paddingLeft : '27px'
    },
    '&:hover' : {
      backgroundColor : 'transparent'
    }
  }
});

export const CheckoutForm = ({ ...props }) => {
  const classes = useStyles();
  const { shippingInfo }: any = useSelector(({ cart }: ApplicationState) => cart);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<FormFieldType>(shippingInfo);
  const [saveButtonState, setSaveButtonState] = useState<boolean>(true);
  const [editButtonState, setEditButtonState] = useState<boolean>(false);
  const [firstNameField, setFirstNameField] = useState<FieldType>({
    value    : null,
    error    : null,
    disabled : true,
    hasError : false
  });
  const [lastNameField, setLastNameField] = useState<FieldType>({
    value    : null,
    error    : null,
    disabled : true,
    hasError : false
  });
  const [emailField, setEmailField] = useState<FieldType>({
    value    : null,
    error    : null,
    disabled : true,
    hasError : false
  });
  const [addressField, setAddressField] = useState<FieldType>({
    value    : null,
    error    : null,
    disabled : true,
    hasError : false
  });

  function handleChange(field?: FormFields, value?: any) {
    switch (field) {
      case FormFields.firstName:
        setFirstNameField({
          ...firstNameField,
          value,
          hasError : isEmpty(value)
        });
        setSaveButtonState(isEmpty(value) || lastNameField.hasError || emailField.hasError ||
        addressField.hasError);
        break;
      case FormFields.lastName:
        setLastNameField({
          ...lastNameField,
          value,
          hasError : isEmpty(value)
        });
        setSaveButtonState(isEmpty(value) || firstNameField.hasError || emailField.hasError ||
        addressField.hasError);
        break;
      case FormFields.email:
        setEmailField({
          ...emailField,
          value,
          hasError : isEmpty(value) || isValidEmail(value),
          error    : isValidEmail(value) ? translations.emailError : null
        });
        setSaveButtonState(isEmpty(value) || isValidEmail(value) || firstNameField.hasError ||
        lastNameField.hasError || addressField.hasError);
        break;
      case FormFields.address:
        setAddressField({
          ...addressField,
          value,
          hasError : isEmpty(value)
        });
        setSaveButtonState(isEmpty(value) || firstNameField.hasError || lastNameField.hasError ||
        emailField.hasError);
        break;
      default:
        break;
    }
  };
  
  function handleEdit(state: boolean = false) {
    setFirstNameField({
      ...firstNameField,
      disabled : state
    });
    setLastNameField({
      ...lastNameField,
      disabled : state
    });
    setEmailField({
      ...emailField,
      disabled : state
    });
    setAddressField({
      ...addressField,
      disabled : state
    });
    setSaveButtonState(state);
  };

  function handleSave() {
    const updated = {
      [FormFields.firstName] : Object.assign({}, formValues[FormFields.firstName], firstNameField),
      [FormFields.lastName]  : Object.assign({}, formValues[FormFields.lastName], lastNameField),
      [FormFields.email]     : Object.assign({}, formValues[FormFields.email], emailField),
      [FormFields.address]   : Object.assign({}, formValues[FormFields.address], addressField)
    };
    dispatch(setShippingInfo(updated));
    handleEdit(true);
  };
  
  return (
    <div className={classes.shipping}>
      <Title variant='h5' label={translations.shippingHeader} />
      <form>
        <div className={classnames(classes.firstName, classes.field)}>
          <TextField value={firstNameField?.value ?? formValues[FormFields.firstName]?.value}
            disabled={firstNameField?.disabled ?? formValues[FormFields.firstName]?.disabled}
            hasError={firstNameField?.hasError ?? formValues[FormFields.firstName]?.hasError}
            errorText={firstNameField?.error ?? translations.required}
            fullWidth
            required
            styleOverrides={textFieldStyleOverrides}
            label={FormFields.firstName}
            fieldLabel={FormFields.firstName}
            placeholder={FormFields.firstName}
            autoFocus
            InputProps={{
              classes : {
                input     : classes.input,
                underline : classes.inputUnderline
              }
            }}
            onChange={function({ target }) {
              handleChange(FormFields.firstName, target.value);
            }}
            inputProps={{
              maxLength : 7
            }}
          />
        </div>
        <div className={classnames(classes.lastName, classes.field)}>
          <TextField value={lastNameField?.value ?? formValues[FormFields.lastName]?.value}
            disabled={lastNameField?.disabled ?? formValues[FormFields.lastName]?.disabled}
            fullWidth
            required
            hasError={lastNameField?.hasError ?? formValues[FormFields.lastName]?.hasError}
            errorText={lastNameField?.error ?? translations.required}
            styleOverrides={textFieldStyleOverrides}
            label={FormFields.lastName}
            fieldLabel={FormFields.lastName}
            placeholder={FormFields.lastName}
            InputProps={{
              classes : {
                input     : classes.input,
                underline : classes.inputUnderline
              }
            }}
            onChange={function({ target }) {
              handleChange(FormFields.lastName, target.value);
            }}
            inputProps={{
              maxLength : 7
            }}
          />
        </div>
        <div className={classnames(classes.email, classes.field)}>
          <TextField value={emailField?.value ?? formValues[FormFields.email]?.value}
            disabled={emailField?.disabled ?? formValues[FormFields.email]?.disabled}
            label={FormFields.email}
            fieldLabel={FormFields.email}
            hasError={emailField?.hasError ?? formValues[FormFields.email]?.hasError}
            errorText={emailField?.error ?? translations.required}
            placeholder={FormFields.email}
            fullWidth
            required
            styleOverrides={textFieldStyleOverrides}
            InputProps={{
              classes : {
                input     : classes.input,
                underline : classes.inputUnderline
              }
            }}
            onChange={function({ target }) {
              handleChange(FormFields.email, target.value);
            }}
            inputProps={{
              maxLength : 30
            }}
          />
        </div>
        <div className={classnames(classes.address, classes.field)}>
          <TextField value={addressField?.value ?? formValues[FormFields.address]?.value}
            disabled={addressField?.disabled ?? formValues[FormFields.address]?.disabled}
            fullWidth
            required
            styleOverrides={textFieldStyleOverrides}
            label={FormFields.address}
            fieldLabel={FormFields.address}
            hasError={addressField?.hasError ?? formValues[FormFields.address]?.hasError}
            errorText={addressField?.error ?? translations.required}
            placeholder={FormFields.address}
            InputProps={{
              classes : {
                input     : classes.input,
                underline : classes.inputUnderline
              }
            }}
            onChange={function({ target }) {
              handleChange(FormFields.address, target.value);
            }}
            inputProps={{
              maxLength : 70
            }}
          />
        </div>
        <div className={classes.actions}>
          <PrimaryButton disabled={saveButtonState}
            size="small" padding={'0px'}
            onClick={function() {
              handleSave?.();
            }}>{translations.saveAddress}</PrimaryButton>
          <SecondaryButton disabled={editButtonState}
            size="small"
            onClick={function() {
              handleEdit?.();
            }}>{translations.editAddress}</SecondaryButton>
            
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
