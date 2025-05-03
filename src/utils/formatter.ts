export const dateFormatter = new Intl.DateTimeFormat('en-uk');

export const priceFormatter = new Intl.NumberFormat('en-uk',
  {
    style: 'currency',
    currency: 'GBP',
  });
  