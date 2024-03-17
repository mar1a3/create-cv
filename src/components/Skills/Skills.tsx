import React from 'react';
import { styled } from 'styled-components';
import HologramSkills from '../../assets/img/hologram5.jpg';
import { CustomTagSelect } from '../CustomTagSelect/CustomTagSelect';

const SkillsWrapper = styled.div`
    background-color:black;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`
const Infoblock = styled.div`
    position: relative;
    background-image: url(${HologramSkills});
    width: 950px;
    height: 300px;
    margin-left: 40px;
    border-radius: 20px;
    &:before{
        content: '';
        position: absolute;
        width: 1000px;
        height: 200px;
        right: -30px;
        top: 50px;
        border-radius: 30px;
        backdrop-filter: blur(5px);
    }

`


export const Skills = () => {
    return (

        <SkillsWrapper>
            <Infoblock>
                    <CustomTagSelect />
            </Infoblock>

        </SkillsWrapper>
    )
}