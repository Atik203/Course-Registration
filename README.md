# Course Registration Website

## Table of Contents

- [Course Registration Website](#course-registration-website)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [1. Course Selection](#1-course-selection)
    - [2. Real-time Credit Tracking](#2-real-time-credit-tracking)
    - [3. Customized Alerts](#3-customized-alerts)
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

## Demo

Here is the website link: [Live Website](https://www.example.com)
