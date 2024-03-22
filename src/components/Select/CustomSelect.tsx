import React from 'react';
import { Select, Space } from 'antd';

interface CustonSelectProps {
  options: {
    value: string; label: string;
  }[];
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const CustomSelect: React.FC<CustonSelectProps> = ({ options }) => {
  return (
    <Space wrap>
      <Select
        defaultValue="Degree"
        style={{ width: 120 }}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

