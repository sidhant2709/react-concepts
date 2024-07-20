import CreateCustomer from './customers/CreateCustomer';
import Customer from './customers/Customer';
import AccountOperations from './accounts/AccountOperations';
import BalanceDisplay from './accounts/BalanceDisplay';
import { useSelector } from 'react-redux';

const Bank = () => {
  const fullName: string = useSelector((state: RootState) => state.customer.fullName);

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
