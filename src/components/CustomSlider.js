import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const CustomSlider = ({
  value,
  onChange,
  defaultValue,
  min,
  max,
  step,
  valueLabelDisplay,
}) => {
  return (
    <PrettoSlider
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      valueLabelDisplay={valueLabelDisplay}
    />
  );
};

CustomSlider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  valueLabelDisplay: PropTypes.oneOf(['on', 'auto', 'off']),
};

CustomSlider.defaultProps = {
  defaultValue: 20,
  min: 0,
  max: 100,
  step: 1,
  valueLabelDisplay: 'auto',
};

export default CustomSlider;
