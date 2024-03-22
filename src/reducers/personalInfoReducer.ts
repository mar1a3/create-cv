interface SetPersonalInfoAction {
  type: 'SET_PERSONAL_INFO';
  payload: {
    name: string;
    location: string;
    phoneNumber: string;
    dateOfBirth: string;
  };
}

const initialState = {
  name: '',
  location: '',
  phoneNumber: '',
  dateOfBirth: '',
};

const personalInfoReducer = (state = initialState, action: SetPersonalInfoAction) => {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default personalInfoReducer;
