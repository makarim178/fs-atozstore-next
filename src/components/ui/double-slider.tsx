'use client'
import { PRICE_RANGE } from '@/constants/common';
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useState } from 'react';
import { RangeInputComponent } from './range-input';
import type { DoubleSliderPropsType } from '@/types/props';

function valueText(value: number) {
  return `$${value}`
}

export const DoubleSlider = ({mutateQuery}: DoubleSliderPropsType) => {
    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (_: Event, newValue: number[]) => {
      _.preventDefault()
      setValue(newValue)
      mutateQuery({ minPrice: newValue[0], maxPrice: newValue[1] })
    };

    const handleMinVal = (val: number) => {
      setValue(prev => [val, prev[1]])
      mutateQuery({ minPrice: val, maxPrice: value[1]})
    }
    const handleMaxVal = (val: number) => {
      setValue(prev => [prev[0], val])
      mutateQuery({ minPrice: value[0], maxPrice: val})
    }

    return (
      <div className='flex flex-col w-full justify-center content-center my-4'>
          <div>
              <h4 className='text-md font-semibold pb-4 title-text-theme'>Price Range</h4>
              <div className="flex justify-between items-center gap-2">
                <RangeInputComponent id='min-range' title='Min' value={value[0]} maxValue={value[1]} getValue={handleMinVal} />
                <RangeInputComponent id='max-range' title='Max' value={value[1]} maxValue={value[0]} getMaxValue={true} getValue={handleMaxVal} />
              </div>
          </div>
          <div className='flex justify-center content-center w-full'>
              <Box className="w-[710px] md:w-[300px]" color={'Scrollbar'}>
              <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  max={PRICE_RANGE.MAX}
                  getAriaValueText={valueText}
                  sx={{
                      '& .MuiSlider-thumb': { color: '#cbcbd3' },
                      '& .MuiSlider-track': { color: '#cbcbd3' },
                      '& .MuiSlider-rail': { color: '#575757' },
                      '& .MuiSlider-active': { color: '#A3A3A3' }
                  }}
              />
              </Box>
          </div>
      </div>
    )
}