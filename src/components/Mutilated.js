import React, { useState } from 'react'
import TextInput from './TextInput'
import CustomSlider from './CustomSlider'
import Time from './Time';
import Date from './Date';
// import CheckboxesGroup from './CheckboxesGroup';
import File from './File';
import Toaster from './Toaster';

const Mutilated = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [toast, setToast] = useState(false);
    

    return (
        <div className='relative'>
            {toast && <Toaster status={'success'} content={'data collected'} />}
            <div className='border p-3 border-2 rounded-md'>
                <div className=' py-5'>
                    <File />
                </div>
                <div className='input'>
                    <TextInput label={'Denomination'} name={'denomination'} helperText={'The value of the note'} />
                    <TextInput label={'Serial Number'} name={'serial_number'} helperText={'Mention the serial number'} />
                    <TextInput label={"Condition of the Note"} name={"type"} helperText={"Mention the type of damage"} list={"datalist"} />
                    <datalist id="datalist">
                        <option value="Torn" />
                        <option value="Split in half" />
                        <option value="Stained" />
                        <option value="Old" />
                        <option value="Water damaged" />
                        <option value="Burnt" />
                    </datalist>
                    <div className='mt-5 border px-5 py-2 mb-3 rounded border-black border-opacity-50 flex flex-col space-y-4'>
                        <label>Percentage of intact ({value}%)</label>
                        <CustomSlider value={value} onChange={handleChange} />
                    </div>
                    <div className='flex justify-evenly items-center gap-1'>
                        <div className='pt-2'><Date label={'Date'} /></div>
                        <div className='overflow-x-hidden'><Time label={'Time'} /></div>
                    </div>

                    {/* <div className='flex justify-center p-5'>
                    <CheckboxesGroup/>
                    </div> */}
                </div>
                <div className='text-center mt-12'>
                    <button className='border border-2 bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500 text-white font-bold py-2 px-4 rounded' onClick={() => { setToast(prev => !prev) }}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Mutilated
