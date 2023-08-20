import React, { useState } from "react";
import { Form } from 'semantic-ui-react'

const FilterVolunteer = ({ volunteerings, filterData, setFilterData, onSearch, onClear }) => {

    const getCityOptions = () => {
        const cityOptions = [...new Set(volunteerings.map((item) => item.cityvolunteering))];
        return cityOptions.map((city) => ({ key: city, text: city, value: city }))
    }

    const getDaysWeekOptions = () => {
        return (arrayRange(1, 7, 1)).map((number) => ({ key: number, text: number + ' days a week', value: number }));
    }

    const getTimeOptions = () => {
        return (arrayRange(1, 24, 1)).map((number) => ({ key: number, text: number + ' hours', value: number }));
    }

    const arrayRange = (start, stop, step) => Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

  const onHandlerChange = (e, { name, value }) => {
    setFilterData((prev) => ({ ...prev, [name]: value }));
    console.log({ filterData })
  }

  return (
    <div>
      <Form
        style={{
          padding: '30px',
          margin: 'auto',
          width: '75%',
          marginTop: '50px',
          boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px 0px',
          backgroundColor: 'white',
          marginBottom: '50px'
        }}
      >
        <Form.Group>
        <Form.Select
            width={4}
            required
            label='city'
            options={getCityOptions()}
            name={'city'}
            value={filterData.city}
            onChange={onHandlerChange}
        />
        <Form.Select
          width={4}
           required
           label='Number days a week'
           options={getDaysWeekOptions()}
           name={'days_a_week'}
           value={filterData.days_a_week}
           onChange={onHandlerChange}
        />
        <Form.Select
        width={4}
           required
           label='Min during time'
           options={getTimeOptions()}
           name={'min_time'}
           value={filterData.min_time}
           onChange={onHandlerChange}
        />
        <Form.Select
           width={4}
           required
           label='Max during time'
           options={getTimeOptions()}
           name={'max_time'}
           value={filterData.max_time}
           onChange={onHandlerChange}
        />
     
           <Form.Button
           basic 
           color='grey' 
          style={{marginTop: '25px', color: 'white', backgroundColor: 'red'}}
          content='Clear'
          onClick={onClear}
        />
           <Form.Button
          style={{marginTop: '25px', color: 'white', backgroundColor: 'red'}}
          content='Search'
          onClick={onSearch}
        />
        </Form.Group>
   
      </Form>

    </div>
  )
}
export default FilterVolunteer;