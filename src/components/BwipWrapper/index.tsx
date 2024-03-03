import React, { useEffect, useRef } from 'react';
import BwipJs from 'bwip-js';

import { BcIdType } from './types';
import classes from './bwipWrapper.module.css';

type BwipWrapperProps = {
  bcId: BcIdType;
  text: string;
  onClick?: (text: string) => void;
};

const BwipWrapper = ({ bcId, text, onClick }: BwipWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const clickHandler = () => {
    onClick?.(text);
  };

  useEffect(() => {
    const svg = BwipJs.toSVG({
      bcid: bcId, // Barcode type
      text, // Text to encode
      height: 12, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: 'center', // Always good to set this
      textcolor: 'ff0000', // Red text
      scale: 1
    });
    if (ref.current) {
      ref.current.innerHTML = svg;
    }
  }, [bcId, text]);

  return (
    <div
      className={classes.bwip}
      ref={ref}
      onClick={clickHandler}
      role='none'
    />
  );
};

export default BwipWrapper;
