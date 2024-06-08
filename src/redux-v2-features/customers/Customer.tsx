/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { useSelector } from 'react-redux';

function Customer() {
  const customer  = useSelector((state: any) => state.customer.fullName);
  const createdAt  = useSelector((state: any) => state.customer.createdAt);
  return <h2>👋 Welcome, {customer} : {createdAt}</h2>;
}

export default Customer;
