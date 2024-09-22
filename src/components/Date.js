import * as React from 'react';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateComponent = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}> {/* LocalizationProvider is needed */}
      <DemoItem>
        <DatePicker label={label} />
      </DemoItem>
    </LocalizationProvider>
  );
};

export default DateComponent;
