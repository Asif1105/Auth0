import React from 'react';
import { makeStyles } from '@mui/styles';

export interface InfoPanelProps {
  label: string;
  value: any;
  renderAsHeader?: boolean;
  displayLabel?: boolean;
  displaySeparator?: boolean;
  separator?: ':' | '-';
  expandItems?: boolean;
  yMargin?: '0px' | '5px' | '10px' | '15px' | '20px' | '25px' | '30px' | '35px' | '40px' | '45px' | '50px';
  yPadding?: '0px' | '5px' | '10px' | '15px' | '20px' | '25px' | '30px' | '35px' | '40px' | '45px' | '50px';
  borderTop?: string;
};

const commonItemStyles = {
  margin    : ({ yMargin }: InfoPanelProps) => `${yMargin} 0`,
  padding   : ({ yPadding }: InfoPanelProps) => `${yPadding} 0`,
  borderTop : ({ borderTop }: InfoPanelProps) => borderTop
};

export const useStyles = makeStyles({
  infoItem : {
    ...commonItemStyles
  },
  infoFlexItem : {
    display        : 'flex',
    justifyContent : 'space-between',
    ...commonItemStyles
  },
  label : {

  },
  value : {
    fontSize    : ({ renderAsHeader }: InfoPanelProps) => renderAsHeader ? '32px' : 'initial',
    fontWeight  : ({ renderAsHeader }: InfoPanelProps) => renderAsHeader ? 'bold' : 'normal',
    paddingLeft : '5px'
  }
});

export const InfoPanel = ({
  label,
  value,
  renderAsHeader = false,
  displayLabel = true,
  displaySeparator = true,
  separator = ':',
  expandItems = false,
  yMargin = '5px',
  yPadding = '0px',
  borderTop = 'none'
}: InfoPanelProps) => {
  const classes = useStyles({ yMargin, yPadding, borderTop, renderAsHeader, label, value });
  return (
    <div className={!expandItems ? classes.infoItem : classes.infoFlexItem}>
      {displayLabel && (<span className={classes.label}>{`${label}${displaySeparator ? separator : ''}`}</span>)}
      <span className={classes.value}>{`${value}`}</span>
    </div>
  );
};

export default InfoPanel;
