import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

export const CustomDatePicker: React.FC = () => (
    <Space direction="vertical" size={12}>
        <RangePicker />
    </Space>
);

