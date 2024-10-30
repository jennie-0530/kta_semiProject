import DatePicker from 'react-datepicker';
import { Dispatch, SetStateAction } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { getMonth, getYear } from 'date-fns';
import { range } from 'lodash';
import './index.css';

interface IProps {
  startDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  defaultValue?: string;
}

const CustomDatePicker = ({
  defaultValue,
  startDate,
  setStartDate,
}: IProps) => {
  const years = range(2022, getYear(new Date()) + 5, 1);
  const months = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const parsedDefaultDate = defaultValue
    ? new Date(defaultValue) // ISO 8601 형식이라면 이처럼 Date 객체로 변환 가능
    : startDate;

  const isValidDate = !isNaN(parsedDefaultDate.getTime());

  return (
    <div className='flex justify-between items-center w-[80%] mx-auto'>
      <DatePicker
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div className='flex items-center space-x-2 mx-auto w-[70%]'>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
              className='border border-gray-300 rounded-md px-2 py-1'
            >
              {years.map((option: any) => (
                <option key={option} value={option}>
                  {option + '년'}
                </option>
              ))}
            </select>
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              className='border border-gray-300 rounded-md px-2 py-1'
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        locale={ko}
        dateFormat='yyyy.MM.dd'
        selected={isValidDate ? parsedDefaultDate : startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={isValidDate ? parsedDefaultDate : startDate}
        className='border border-gray-300 rounded-md w-full p-2' // Ensures full width
      />
    </div>
  );
};

export default CustomDatePicker;
