import React, { useState } from 'react';
import styled from 'styled-components';


import { GlobalFont } from '../GlobalFont/GlobalFont';
import { CustomInput } from '../Input/Input';
import { CustomDatePicker } from '../DatePicker/DatePicker';
import { CustomDescription } from '../Description/CustomDesc';
import { CustomButton } from '../Button/CustomButton';


import TornPaper from '../../assets/img/tornPaperReverse.png';
import Plastic from '../../assets/img/plastic.jpg'


const WorkWrapper = styled.div`
    font-family: "Sedgwick Ave Display", sans-serif;
    position: relative;
    background-image: url(${TornPaper});
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;
    height: 1050px;
    margin-top:-220px;
`

const PlasticWrapper = styled.div`
    position: relative;
    padding: 20px 20px;
    width: 900px;
    height: 580px;
    top: 160px;
    background-image:url(${Plastic});
    margin-left: 50px;
    border-radius: 20px;
    & p{  
        font-size: 30px;
    }
`
const MainWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    left:50px;
`
const WorkPerioP = styled.div`
    font-size: 30px;
    margin: 0px;
`
export const WorkExperience = () => {
    const [workBlocks, setWorkBlocks] = React.useState([{ id: 1 }]);
    const addExperienceBlock = () => {
        const newId = Math.random();
        setWorkBlocks([...workBlocks, { id: newId }])
    }

    return (
        <>
            {workBlocks.map((block, index) => (
                <WorkWrapper>
                    <PlasticWrapper>
                        <MainWrapper key={block.id}>
                            <p>Work Experience {index + 1}</p>
                            <CustomInput label="Company" placeholder="Company" />
                            <CustomInput label="Position" placeholder="Position" />
                            <WorkPerioP>Work period</WorkPerioP>
                            <CustomDatePicker />
                            <WorkPerioP>Description</WorkPerioP>
                            <CustomDescription />
                            <br />
                            <CustomButton onClick={addExperienceBlock} />
                        </MainWrapper>
                    </PlasticWrapper>
                </WorkWrapper>
            ))}
        </>
    )
}