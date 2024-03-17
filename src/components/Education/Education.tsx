import React from 'react';
import { GlobalFont } from '../GlobalFont/GlobalFont';
import styled from 'styled-components';

import { CustomInput } from '../Input/Input';
import { CustomCalendar } from '../Calendar/Calendar';
import { CustomSelect } from '../Select/CustomSelect';


import BlackTorn from '../../assets/img/blackTorn.jpg';
import HologramEducation from '../../assets/img/hologram2.jpg'

const BlackTornPaper = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    width: 100%;
    height: 300px;
    display: flex;
    margin-top:-250px;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-image: url(${BlackTorn});
    & p{
        position: relative;
        padding-left:100px;
        top:100px;
        color:white;
        align-self:flex-start;
        font-size:35px;
    }
`
const SectionPaper = styled.div`
    height:600px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: #111111;
`
const InfoBlock = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
    padding:20px 20px;
    width: 900px;
    height: 400px;
    top: -280px;
    background-image:url(${HologramEducation});
    border-radius: 20px;
    &:before{
        content: '';
        position: absolute;
        width: 1000px;
        height: 350px;
        right: -30px;
        top: 50px;
        border-radius: 30px;
        backdrop-filter: blur(8px);
    }
 `
const InputsBlock = styled.div`
    position: relative;
    top: 20px;
    left:100px;
 `
const Paragraph = styled.p`
    font-size: 30px;
 `
export const Education = () => {
    return (
        <>
            <GlobalFont />
            <BlackTornPaper>
            </BlackTornPaper>
            <SectionPaper>
                <InfoBlock>
                    <InputsBlock>
                        <CustomInput label="Institute" placeholder="Institute" />
                        <Paragraph>Date of graduation</Paragraph>
                        <CustomCalendar customStyles={{ position: 'relative', top: '-10px', left: '0px' }} />
                        <Paragraph>Academic degree</Paragraph>
                        <CustomSelect 
                            options={[
                            { value: 'Bachelor',label: 'Bachelor'}, 
                            { value: 'Master',label: 'Master'}
                            ]} />
                    </InputsBlock>
                </InfoBlock>
            </SectionPaper>
        </>
    )
}