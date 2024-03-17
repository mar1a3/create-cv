import React from 'react';
import { Button } from 'antd';

interface CustomButtonProps {
    onClick:()=>void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({onClick}) => (

    <Button onClick={onClick} block style={{ width: '800px' }}>Add more</Button>

);
