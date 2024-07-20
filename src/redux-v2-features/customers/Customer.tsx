import { useSelector } from 'react-redux';

function Customer() {
  const customer: string  = useSelector((state: RootState) => state.customer.fullName);
  const createdAt: string | undefined = useSelector((state: RootState) => state.customer.createdAt);
  return <h2>👋 Welcome, {customer} : {createdAt}</h2>;
}

export default Customer;
