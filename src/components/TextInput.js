import { TextField } from '@mui/material';
import React from 'react';

const TextInput = ({ label, name, value, onChange, error, helperText, className, type, onBlur, list,sxProps }) => {
    return (
        <TextField
            type={type}
            label={label}
            variant="outlined"
            className={`!my-3 w-full text-blue-500 ${className}`}
            name={name}
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={helperText}
            onBlur={onBlur}
            inputProps={{ list }}  // Pass the list attribute here
            sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: sxProps?.borderColor || 'gray',  // Uses custom border color if provided, else 'gray'
                  },
                  '&:hover fieldset': {
                    borderColor: sxProps?.hoverBorderColor || 'blue',  // Uses custom hover border color, else 'blue'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: sxProps?.focusedBorderColor || 'green',  // Custom focus color or 'green'
                  },
                  '&.Mui-error fieldset': {
                    borderColor: sxProps?.errorBorderColor || 'red',  // Custom error border color or 'red'
                  },
                },
                '& .MuiInputBase-input': {
                  color: sxProps?.textColor || 'black',  // Custom text color or 'black'
                },
                '& .MuiFormHelperText-root': {
                  color: sxProps?.helperTextColor || 'blue', // Custom helper text color or 'blue'
                  marginLeft:'10px'
                },
              }}
              
        />
    );
};

export default TextInput;
