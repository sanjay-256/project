import React from 'react';
import { Box, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Typography } from '@mui/material';
import Mutilated from './Mutilated';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    Edges: false,
    Center: false,
    SerialNumberArea: false,
    SecurityFeatures: false,
    MissingPieces: false,
    CanBe: false,
    CannotBe: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    setState(prevState => {
      const updatedState = { ...prevState, [name]: checked };
      const selectedKeys = Object.keys(updatedState).filter(key => 
        key !== 'CanBe' && key !== 'CannotBe' && updatedState[key]
      );
      
      const shouldBeChecked = selectedKeys.includes('SerialNumberArea') || selectedKeys.includes('SecurityFeatures');
      const canBeChecked = !shouldBeChecked && selectedKeys.length > 0;

      return {
        ...updatedState,
        CanBe: canBeChecked,
        CannotBe: shouldBeChecked,
      };
    });
  };


  return (
    <>
    <Box sx={{marginBottom:'20px', display: 'flex',flexDirection: { xs: 'column', sm: 'row' },justifyContent:'space-evenly',alignItems:'' ,border:`2px solid ${state.CanBe?'green':state.CannotBe?'red':'grey'}`,borderRadius:'10px' }}>
      {/* Column 1 */}
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Evaluating a mutilated</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.CanBe}
                onChange={handleChange}
                name="CanBe"
                sx={{ color: 'blue', '&.Mui-checked': { color: 'green' } }}
                disabled
              />
            }
            label={<Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, color: 'green' }}>Can be</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.CannotBe}
                onChange={handleChange}
                name="CannotBe"
                sx={{ color: 'blue', '&.Mui-checked': { color: 'red' } }}
                disabled
              />
            }
            label={<Typography sx={{ fontSize: { xs: '0.8rem', sm: '1rem' }, color: 'red' }}>Cannot be</Typography>}
          />
        </FormGroup>
      </FormControl>

      {/* Column 2 */}
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Pick Options</FormLabel>
        <FormGroup>
          {['Edges', 'Center', 'SerialNumberArea', 'SecurityFeatures', 'MissingPieces'].map((label) => (
            <FormControlLabel
              key={label}
              control={
                <Checkbox
                  checked={state[label]}
                  onChange={handleChange}
                  name={label}
                />
              }
              label={<Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>{label}</Typography>}
            />
          ))}
        </FormGroup>
        <FormHelperText sx={{ fontSize: { xs: '0.9rem', sm: '0.9rem' } }}>Ensure correct selection</FormHelperText>
      </FormControl>
    </Box>
    {state.CanBe && 
    
      <Mutilated/>

    }
    </>
  );
}
