# Course Registration Website

## Table of Contents

- [Course Registration Website](#course-registration-website)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [1. Course Selection](#1-course-selection)
    - [2. Real-time Credit Tracking](#2-real-time-credit-tracking)
    - [3. Customized Alerts](#3-customized-alerts)
  - [State Management](#state-management)
    - [State Variables](#state-variables)
    - [State Management Logic](#state-management-logic)
  - [Demo](#demo)

## Introduction

The Course Registration Website allows users to browse, select, and track courses while staying within a specified credit limit. This README provides an overview of the website's features, state management, and a live website link.

## Features

### 1. Course Selection

- **Description:** Users can browse a list of available courses, view their details, and select courses to add to their cart.

- **How it Works:** The website presents a list of courses with descriptions, prices, and credit hours. Users can click on a "Select" button to add it to their cart. The website prevents adding the same course twice or exceeding the credit limit.

### 2. Real-time Credit Tracking

- **Description:** The website provides real-time credit tracking, allowing users to see the total credit hours selected and the remaining credit hours available.

- **How it Works:** As users select courses, the website dynamically updates and displays the total credit hours selected. It also shows the remaining credit hours available, ensuring users do not exceed the specified credit limit.

### 3. Customized Alerts

- **Description:** The website displays customized alerts for different scenarios, such as attempting to add the same course twice or exceeding the credit limit.

- **How it Works:** When users perform actions like adding the same course twice or exceeding the credit limit, the website shows specific alert messages using the [react-toastify](https://www.npmjs.com/package/react-toastify) library. These alerts are designed to provide clear feedback to users about their actions.

## State Management

In the Course Registration Website, state management is used to keep track of selected courses, remaining credit hours, and handle user interactions effectively. React's built-in `useState` hook is used for managing state within the website.

### State Variables

The following state variables are used in the website:

1. `cards`: This state variable stores the list of available courses fetched from the `course.json` file. It is initialized with an empty array and updated using the `setCards` function when data is fetched.

2. `carts`: The `carts` state variable holds the selected courses that the user has added to their cart. It starts as an empty array and is updated whenever a user selects or removes a course.

3. `totalcredit`: `totalcredit` represents the total credit hours available to the user. It is initialized with a value of 20 and is decremented as courses are selected.

4. `TotalSum`: `TotalSum` keeps track of the total credit hours selected by the user. It is updated whenever a course is added or removed from the cart.

### State Management Logic

When a user selects a course by clicking the "Select" button, the website checks whether the course is already in the cart using the `isExist` variable. If the course is not in the cart and adding it won't exceed the credit limit, the course is added to the `carts` array, and the `totalcredit` and `TotalSum` state variables are updated accordingly.

## Demo

Here is the website link: [Live Website](stimulating-book.surge.sh)
