
Welcome to my Machine Maker website. How you can install this code in your application:

## Getting Started
First, open the project in your code editor and then follow the instructions below:
```bash
npm install
# and then 
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Machine Maker
This is a pc builder website where you can build your pc. This project created with next js and tailwind css and also used next js authentications.

## Features of home page:
- In the navbar user can see the dropdown of category and addproduct, all products and pc builders and also product cart with user profile.
- In home page there is a list of features products.
- In there, 6 categories of feature products.
- A user can view category wise product by just clicking on the category.
- A user can view single product details by clicking on the product on features product.

## Features of single product page:
- User can view product image and details of the product.

## Features of PC Builder:
- This is private route so if user is not logged in he will be redirected to the login page.
- User can view category wise product and can select that category product.
- Selected product will be added to product cart where I used redux to handle the task.
- If user didn't add at least five product on the cart then he can't click on Complete Builder button it will be hide.
- If user selected at least five product on the cart he will se the Complete Builder button and If click on that button will be shown a success toast message.
- User can remove or minus a product product from the cart.

## Features of PC All Products:
- User can view all products in the table.
- If user isn't logged in, then he can not view the Edit and Delete product buttons.
- If user is logged in and can view the Edit and Delete product buttons and clicking on the Edit button will redirect to the Edit product page.
- If user is logged in and can Delete products.

## Features of PC Add Products:
- This is private route so if user is not logged in he will be redirected to the login page.
- If logged in the user can add products and category.

## Server Code:
- [Machine](https://github.com/rahat2020/machine-server) - servers