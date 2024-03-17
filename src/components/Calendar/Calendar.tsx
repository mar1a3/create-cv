import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import styled from 'styled-components';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};
const CustomCalendarWrapper = styled.div`
    position: relative;
    top: 80px;
    left: 100px;
`

export const CustomCalendar: React.FC = () => (
    <CustomCalendarWrapper>
        <Space>
            <DatePicker
                onChange={onChange}
                placeholder="Date of birth"
            />
        </Space>
    </CustomCalendarWrapper>
);

