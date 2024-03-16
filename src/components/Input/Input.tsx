import React from 'react';
import { Input } from 'antd';
import { styled } from 'styled-components';

interface CustomInputProps {
    label: string;
    placeholder: string;
}
export const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder }) => {

    const StylesCustomInput = styled.div`
        color:white;
        height: 110px;
        & p{
            width:400px;
        }
        & input{
            background-color:transparent;
        }
        & input::placeholder{
            color:white;
        }
    `
    return (
        <StylesCustomInput>
            <p> {label}
                <Input placeholder={placeholder} size="large" />
            </p>
        </StylesCustomInput>

    )
}


