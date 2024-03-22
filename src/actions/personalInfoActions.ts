import React from 'react';

interface PersonalInfo {
    name: string;
    location: string;
    phoneNumber: string;
    dateOfBirth: string;
}

interface SetPersonalInfoAction {
    type: 'SET_PERSONAL_INFO';
    payload: PersonalInfo;
  }

  export const setPersonalInfo = (personalInfo: PersonalInfo): SetPersonalInfoAction => ({
    type: 'SET_PERSONAL_INFO',
    payload: personalInfo,
  });
