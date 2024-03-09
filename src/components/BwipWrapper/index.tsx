import React, { useEffect, useRef } from 'react';
import BwipJs from 'bwip-js';

import { BcIdType } from './types';
import classes from './bwipWrapper.module.css';

interface BwipWrapperProps {
  bcId: BcIdType;
  text: string;
}

const BwipWrapper = ({ bcId, text }: BwipWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = BwipJs.toSVG({
      bcid: bcId, // Barcode type
      text, // Text to encode
      height: 12, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: 'center', // Always good to set this
      textcolor: '000', // Red text
      scale: 1
    });
    if (ref.current) {
      ref.current.innerHTML = svg;
    }
  }, [bcId, text]);

  return <div className={classes.bwip} ref={ref} role='none' />;
};

export default BwipWrapper;
