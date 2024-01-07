# React Context API Project

This project is a demonstration of how to use the React Context API. It's a great resource for understanding how to manage state in a React application using the Context API.

## About the Project

The project is a simple application that allows users to perform certain actions, 
- The state of the application changes based on these actions.
- The state is managed using the React Context API,
- Which allows the state to be shared among multiple components without passing props down manually at every level.



## How It Works

The application uses a context to share the state and a reducer to manage the state. The context provides the current state and a dispatch function to all components in the application. The components can use the dispatch function to dispatch actions, and the reducer updates the state based on these actions.

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
```
Navigate into the repository directory:
```
cd <repository-name>
```
Install the dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
