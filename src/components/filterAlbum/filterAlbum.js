import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './filterAlbum.css'
import { BiSearchAlt } from 'react-icons/bi'
import Album from '../../screens/album/album';
import GroupExample from '../cardsalbum/volunteering';

const FilterAlbum = ({kindVolunteerings}) => {
    const [city, setCity] = React.useState('');
    const [age, setAge] = React.useState();
    const [numDayOfWeek, setNumDayOfWeek] = React.useState();
    const [minDuringTime, setMinDuringTime] = React.useState();
    const [maxDuringTime, setMaxDuringTime] = React.useState();
    const options = [
        { label: 'תל אביב', value: 'תל אביב' },
        { label: 'ירושלים', value: 'ירושלים' },
        { label: 'חיפה', value: 'חיפה' },
        { label: 'ראשון לציון', value: 'ראשון לציון' },
        { label: 'נתניה', value: 'נתניה' },
        { label: 'פתח תקוה', value: 'פתח תקוה' },
        { label: 'אשדוד', value: "אשדוד" },
        { label: 'בני ברק', value: 'בני ברק' },
        { label: 'באר שבע', value: 'באר שבע' },
        { label: "חולון", value: "חולון" },
        { label: 'רמת גן', value: 'רמת גן' },
        { label: 'רחובות', value: 'רחובות' },
        { label: "אשקלון", value: "אשקלון" },
        { label: 'בית שמש', value: 'בית שמש' },
        { label: 'בת ים', value: 'בת ים' },
        { label: "הרצליה", value: "הרצליה" },
        { label: 'חדרה', value: 'חדרה' },
        { label: 'כפר סבא', value: 'כפר סבא' },
        { label: "מודיעין", value: "מודיעין" },
        { label: 'מודיעין-עילית', value: 'מודיעין-עילית' },
        { label: 'עפולה', value: 'עפולה' },
        { label: 'אום אל פחם', value: 'אום אל פחם' },
        { label: 'ירושלים', value: 'ירושלים' },
        { label: 'לוד', value: 'לוד' },
        { label: 'רעננה', value: 'רעננה' },
        { label: 'נצרת', value: 'נצרת' },
        { label: 'רמלה', value: 'רמלה' },
        { label: 'רהט', value: 'רהט' },
        { label: 'ראש העין', value: 'ראש העין' },
        { label: 'הוד השרון', value: 'הוד השרון' },
        { label: 'ביתר עילית', value: 'ביתר עילית' },
        { label: 'הוד השרון', value: 'הוד השרון' },
        { label: 'נהריה', value: 'נהריה' },
        { label: 'גבעתיים', value: 'גבעתיים' },
        { label: 'קרית גת', value: 'קרית גת' },
        { label: 'קרית אתא', value: 'קרית אתא' },
    ];
    const handleChangeCity = (event) => {
        setCity(event.target.value);
    }
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    }
    const handleChangeDays = (event) => {
        setNumDayOfWeek(event.target.value);
    }
    const handleChangeMinDuringTime = (event) => {
        setMinDuringTime(event.target.value);
    }
    const handleChangeMaxDuringTime = (event) => {
        setMaxDuringTime(event.target.value);
    }
    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );
    const onClickSearch = () => {
        <GroupExample city={city} numDayOfWeek={numDayOfWeek} minDuringTime={minDuringTime} maxDuringTime={maxDuringTime} age={age}></GroupExample>
    }
    return (
        <div className='filter'>
            <FormControl required sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-required-label">City</InputLabel>
                <Select
                    id="demo-simple-select-required"
                    value={city}
                    onChange={handleChangeCity}
                >
                    {options.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-required-label">Min age</InputLabel>
                <Select
                    id="demo-simple-select-required"
                    value={age}
                    onChange={handleChangeAge}
                >
                    {(arrayRange(10, 120, 1)).map((num) => (
                        <MenuItem value={num}>{num}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: 220 }}>
                <InputLabel id="demo-simple-select-required-label">Several days a week</InputLabel>
                <Select
                    id="demo-simple-select-required"
                    value={numDayOfWeek}
                    onChange={handleChangeDays}
                >
                    {(arrayRange(1, 7, 1)).map((num) => (
                        <MenuItem value={num}>{num} days a week</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-required-label">Min during time</InputLabel>
                <Select
                    id="demo-simple-select-required"
                    value={minDuringTime}
                    onChange={handleChangeMinDuringTime}
                >
                    {(arrayRange(1, 24, 1)).map((num) => (
                        <MenuItem value={num}>{num} hours</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-required-label">Max during time</InputLabel>
                <Select
                    id="demo-simple-select-required"
                    value={maxDuringTime}
                    onChange={handleChangeMaxDuringTime}
                >
                    {(arrayRange(1, 24, 1)).map((num) => (
                        <MenuItem value={num}>{num} hours</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <button type="button" class="btn btn-danger" style={{ minWidth: "100px" }} onClick={onClickSearch} ><BiSearchAlt fontSize={'40px'} /> search </button>
            {/* <p> {maxDuringTime}!</p> */}
        </div >
    );
}

export default FilterAlbum;