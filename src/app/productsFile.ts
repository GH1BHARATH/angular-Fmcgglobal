export interface Product {
  avalibility_QUALITY: number;
  expiry_DATE: String;
  price: number;
  product_id: String;
  product_Name: String;
  description: String;
}

export const productsFromFile = [
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-09-08',
    price: 50,
    product_id: 'P0001',
    product_Name: 'Britannia',
    description: 'A Moments of tasty Surprise',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 500,
    product_id: 'P0002',
    product_Name: 'Clinic Plus',
    description: 'The shampoo of the future',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 701,
    product_id: 'P0003',
    product_Name: 'Amul',
    description: 'The joy of Getting Best Bite',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 561,
    product_id: 'P0004',
    product_Name: 'Aavin',
    description: 'Your Favourite Tea Partner',
  },
  {
    avalibility_QUALITY: 100,
    expiry_DATE: '2022-10-08',
    price: 1,
    product_id: 'P0005',
    product_Name: 'Colgate',
    description: ' Moments of tasty Surprise',
  },
];
