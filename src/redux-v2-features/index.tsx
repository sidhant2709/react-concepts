/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import CreateCustomer from './customers/CreateCustomer';
import Customer from './customers/Customer';
import AccountOperations from './accounts/AccountOperations';
import BalanceDisplay from './accounts/BalanceDisplay';
import { useSelector } from 'react-redux';

const Bank = () => {
  const fullName = useSelector((state: any) => state.customer.fullName);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default Bank;
