import React from 'react';
import { styled } from 'styled-components';
import TornPaper from '../../assets/img/tornPaper1.2.png';
import Hologram from '../../assets/img/hologram.jpg';
import { GlobalFont } from '../GlobalFont/GlobalFont';
import { CustomInput } from '../Input/Input';
import { CustomCalendar } from '../Calendar/Calendar';
import { CustomUpload } from '../Upload/Upload';


const SectionPaper = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-image: url(${TornPaper});

    & p{
        position: relative;
        padding-left:100px;
        top:100px;
        align-self:flex-start;
        font-size:30px;
    }
`
const InfoBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding:20px 20px;
    width: 900px;
    height: 600px;
    top:120px;
    background-image:url(${Hologram});
    margin-left: 50px;
    border-radius: 20px;

    &:before{
        content: '';
        position: absolute;
        width: 1000px;
        height: 550px;
        right: -30px;
        top: 50px;
        border-radius: 30px;
        backdrop-filter: blur(10px);
    }
    & p{
        margin-top:-30px;
        color:white;
    }

`

export const PersonalInfo = () => {
    return (
        <>
            <GlobalFont />
            <SectionPaper>
                <p>Personal Information</p>
                <InfoBlock>
                    <CustomInput label="Name" placeholder="Enter your name" />
                    <CustomInput label="Location" placeholder="Location" />
                    <CustomInput label="Phone number" placeholder="Phone number" />
                    <p>Date of birth</p>
                    <CustomCalendar />
                    <CustomUpload />
                </InfoBlock>
            </SectionPaper>

        </>
    )
}