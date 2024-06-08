const initialCustomerState: CustomerState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerSlice(state: CustomerState = initialCustomerState, action: ActionType) {
  const { type, payload }: ActionType = action;

  switch (type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: (payload as CustomerPayload)['fullName'],
        nationalID: (payload as CustomerPayload)['nationalID'],
        createdAt: (payload as CustomerPayload)['createdAt'],
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: (payload as CustomerPayload)['fullName'],
      };
    default:
      return state;
  }
}

export function createCustomer(newCustomer: CustomerPayload) {
  return { type: 'customer/createCustomer', payload: {...newCustomer, createdAt: new Date().toISOString()} };
}

export function updateCustomer(updatedCustomer: CustomerPayload) {
  return { type: 'customer/updateName', payload: updatedCustomer };
}