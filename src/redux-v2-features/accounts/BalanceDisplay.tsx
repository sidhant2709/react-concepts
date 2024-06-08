/* eslint-disable @typescript-eslint/no-unsafe-argument */

import '../styles.css';

function formatCurrency(value: any) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay() {
  return <div className="balance">{formatCurrency(123456)}</div>;
}

export default BalanceDisplay;
