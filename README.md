# Kongsberg - Dynamic table with row selection and breadcrumb.

This project is a recruitment task designed to showcase the ability to retrieve and present data in a dynamic table, as well as create breadcrumbs. It is a single-page application that allows users to select a user from the provided data and view their posts and related comments. The application retrieves data from an external API, which is available free of charge.

## Demo

[Live site](https://kongsberg.vercel.app/)
[Source](https://github.com/GrzywN/kongsberg)

## Setup

To run the application, make sure you have Node.js and Yarn installed. Then, follow these steps:

1. Clone the repository.
2. Navigate to the project's root directory.
3. Install dependencies by running the following command:

```shell
yarn install
```

## Development

To start the development server, use the following command:

```shell
yarn start:table
```

This will launch the application in development mode. You can access it in your browser at `http://localhost:4200`.

## Testing

To run the tests, use the following command:

```shell
yarn test:table
```

This will execute the tests and display the results.

## Dependencies

The key dependencies used in this project are:

- `@tanstack/react-query`: Library for managing remote data fetching and caching.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `react-router-dom`: Library for routing in React applications.
- `zod`: Library for data validation and parsing.
- `tailwindcss`: Library for styling user interfaces

## Project Structure

The project has the following structure:

- `apps/table`: Contains the dynamic table application code.
- `libs/table/fetch`: Contains the code for fetching data from an external source.
- `libs/shared/ui`: Contains reusable React components.
- `libs/shared/testing`: Contains the code needed for testing.
