# Amazon.com Clone
React Frontend + Muti Backend (Node Express currently. Will add Python & Java version in future) + PostgreSQL

## Demo

- [Live Demo]([https://amazon-clone-josh-tony.herokuapp.com/)](https://amazon.xuanye.ca/)

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
