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
