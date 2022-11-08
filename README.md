# Amazon.com Clone

Clone of Amazon.com is full stack web application built in a team of two that allows users to browse products, add items to the cart, and purchase

## Stacks/Technologies

- Front-End: ReactJs, MUI, Redux + ReduxToolkit + RTK Query
- Back-End: NodeJs, ExpressJs, Prisma, PostgreSQL (will add Python & Java version in future)

## Demo

- [Live Demo](https://amazon.xuanye.ca/)

- Home Page

    ![home-sample](./demo/images/home-sample.png)

## Install

#### Frontend

- `cd frontend && yarn install`

#### Backend

- node: `cd backend/node && yarn install`

#### Datebase

- Generate Schema: `prisma generate`

- Update Datebase: `prisma db push`

## Usage

- Frontend: `cd frontend && yarn start`

- Backend(Node): `cd backend/backend && yarn start`

- Database Setup: 
    - create `.env` file and put it in `backend/node`, write `db uri` in it, sample: `DATABASE_URL="postgres://username:password@host:port/database"`
    
## Features

#### Navigation

![MUI (1)](https://user-images.githubusercontent.com/93957228/200659250-9a0c23d2-1f3b-4081-9476-ad378d0c594b.gif)

#### Search

![individual_item (1)](https://user-images.githubusercontent.com/93957228/200659836-154a3a5a-51f2-4b50-8ba7-2f851586099c.gif)

#### Sign in

![signin (1)](https://user-images.githubusercontent.com/93957228/200660370-9cdbbbad-dc42-4107-8da1-24ff507e9947.gif)

#### Add to cart

![cart (1)](https://user-images.githubusercontent.com/93957228/200660960-8758cdcc-2e0a-44fe-9c39-c54ac7b0d55c.gif)

#### Checkout

![checkout (1)](https://user-images.githubusercontent.com/93957228/200661491-97279657-16b4-403f-bf17-75b55a977cc0.gif)

#### Delete products from cart

![delete (1)](https://user-images.githubusercontent.com/93957228/200662043-e475f4e7-3a65-4411-857e-c2824e79d689.gif)




