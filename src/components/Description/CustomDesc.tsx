import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export const CustomDescription: React.FC = () => (
    <>
        <TextArea rows={4} style={{ width: '800px' }} />
    </>
);

