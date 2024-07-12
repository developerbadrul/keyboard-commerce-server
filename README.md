
<div align="center">
  <h1>Keyboard Commerce Server</h1>
</div>

---

# Project Name : Keyboard Commerce Server

## Introduction

A server-side application for managing orders and products in a keyboard commerce platform.

## Project Description

Keyboard Commerce Server is a Node.js application designed to handle CRUD operations for products and orders. It provides APIs to manage product listings, customer orders, and order statuses.

## Features

- CRUD operations for products (add, update, delete, get all)
- CRUD operations for orders (add new order, update order status, get all orders)
- Product search and filtering by price range
- Order management with status tracking (confirmed, in process)
- MongoDB integration for database storage

## Technology Stack

- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Zod for schema validation
- HTTP status codes for error handling

## Installation Guideline

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd keyboard-commerce-server
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory with the following variables:

dotenv
Copy code
PORT=3000
DATABASE_URL=your_db_connection_uri
NODE_ENV=development
Configuration
Adjust PORT and DATABASE_URL according to your environment setup.
Usage
Running the Server
To start the server locally, run:

bash
Copy code
npm start

## Live URL

The server is live at: [keyboard-commerce-server.vercel.app](https://keyboard-commerce-server.vercel.app)

## APIs

### Get All Products

Endpoint: `{{LiveBaseURL}}/api/products`

- **Request Method:** GET
- **Request Body:** None
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 200,
      "message": "All Product Retrieved",
      "data": [
          {
              "_id": "66914f73f1ed9dbc761c38ec",
              "image": "https://example.com/image3.jpg",
              "title": "Compact Mechanical Keyboard",
              "brand": "TechGear",
              "availableQuantity": 19,
              "price": 59.99,
              "rating": 4.2,
              "description": "A compact mechanical keyboard with a sleek design, perfect for small desks and gaming setups.",
              "__v": 0
          },
          {
              "_id": "66914fb7f1ed9dbc761c38ee",
              "image": "https://example.com/image1.jpg",
              "title": "Mechanical Gaming Keyboard",
              "brand": "KeyMaster",
              "availableQuantity": 49,
              "price": 99.99,
              "rating": 4.5,
              "description": "A high-performance mechanical keyboard with RGB lighting and programmable keys.",
              "__v": 0
          }
      ]
  }
  ```

### Add New Product

Endpoint: `{{LiveBaseURL}}/api/products`

- **Request Method:** POST
- **Request Body:**
  ```json
  {
      "image": "https://example.com/image2.jpg",
      "title": "Wireless Ergonomic Keyboard",
      "brand": "ComfortType",
      "availableQuantity": 30,
      "price": 79.99,
      "rating": 4.0,
      "description": "An ergonomic keyboard designed for comfort with wireless connectivity and long battery life."
  }
  ```
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 201,
      "message": "Product Add Successfully",
      "data": {
          "image": "https://example.com/image2.jpg",
          "title": "Wireless Ergonomic Keyboard",
          "brand": "ComfortType",
          "availableQuantity": 30,
          "isDelete": false,
          "price": 79.99,
          "rating": 4,
          "description": "An ergonomic keyboard designed for comfort with wireless connectivity and long battery life.",
          "_id": "6691533ab1aa346e33d350ea",
          "__v": 0
      }
  }
  ```

### Product Search & Filter

Endpoint: `{{LiveBaseURL}}/api/products/?search=Gaming&minPrice=50&maxPrice=100&sort=priceAsc`

- **Request Method:** GET
- **Request Body:** None
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 200,
      "message": "All Product Retrieved",
      "data": [
          {
              "_id": "66914fb7f1ed9dbc761c38ee",
              "image": "https://example.com/image1.jpg",
              "title": "Mechanical Gaming Keyboard",
              "brand": "KeyMaster",
              "availableQuantity": 49,
              "price": 99.99,
              "rating": 4.5,
              "description": "A high-performance mechanical keyboard with RGB lighting and programmable keys.",
              "__v": 0
          }
      ]
  }
  ```

### Update Product

Endpoint: `{{LiveBaseURL}}/api/products/66914fc8f1ed9dbc761c38f0`

- **Request Method:** PUT
- **Request Body:**
  ```json
  {
      "title": "RGB Backlit Keyboard 5",
      "brand": "Bangla 2",
      "availableQuantity": 20
  }
  ```
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 201,
      "message": "Product Update Successfully",
      "data": {
          "_id": "66914fc8f1ed9dbc761c38f0",
          "image": "https://example.com/image2.jpg",
          "title": "RGB Backlit Keyboard 5",
          "brand": "Bangla 2",
          "availableQuantity": 20,
          "isDelete": true,
          "price": 79.99,
          "rating": 4,
          "description": "An ergonomic keyboard designed for comfort with wireless connectivity and long battery life.",
          "__v": 0
      }
  }
  ```

### Delete Product

Endpoint: `{{LiveBaseURL}}/api/products/66914fc8f1ed9dbc761c38f0`

- **Request Method:** DELETE
- **Request Body:** None
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 201,
      "message": "Product Delete Successfully",
      "data": {
          "_id": "66914fc8f1ed9dbc761c38f0",
          "image": "https://example.com/image2.jpg",
          "title": "RGB Backlit Keyboard 5",
          "brand": "Bangla 2",
          "availableQuantity": 20,
          "isDelete": true,
          "price": 79.99,
          "rating": 4,
          "description": "An ergonomic keyboard designed for comfort with wireless connectivity and long battery life.",
          "__v": 0
      }
  }
  ```

### Get All Orders

Endpoint: `{{LiveBaseURL}}/api/order`

- **Request Method:** GET
- **Request Body:** None
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 200,
      "message": "All Order Retrieved",
      "data": [
          {
              "_id": "669151ccb1aa346e33d350df",
              "name": "John Doe",
              "email": "john.doe@example.com",
              "phoneNumber": "+1234567890",
              "orderItem": [
                  {
                      "_id": "66914f73f1ed9dbc761c38ec",
                      "image": "https://example.com/image3.jpg",
                      "title": "Compact Mechanical Keyboard",
                      "brand": "TechGear",
                      "price": 59.99,
                      "description": "A compact mechanical keyboard with a sleek design, perfect for small desks and gaming setups."
                  },
                  {
                      "_id": "66914fb7f1ed9dbc761c38ee",
                      "image": "https://example.com/image1.jpg",
                      "title": "Mechanical Gaming Keyboard",
                      "brand": "KeyMaster",
                      "price": 99.99,
                      "description": "A high-performance mechanical keyboard with RGB lighting and programmable keys."
                  }
              ],
              "status": "confirmed",
              "deliveryAddress": {
                  "street": "123 Main St",
                  "city": "Anytown",
                  "state": "CA",
                  "postalCode": "12345",
                  "country": "USA"
              },
              "createdAt": "2024-07-12T15:54:52.696Z",
              "updatedAt": "2024-07-12T15:56:37.076Z",
              "__v": 0
          }
      ]
  }
  ```

### Add New Order

Endpoint: `{{LiveBaseURL}}/api/order`

- **Request Method:** POST
- **Request Body:**
  ```json
  {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phoneNumber": "+1234567890",
      "deliveryAddress": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "postalCode": "12345",
          "country": "USA"
      },
      "orderItem": [
          "66914f73f1ed9dbc761c38ec",
          "66914fb7f1ed9dbc761c38ee"
      ]
  }
  ```
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 201,
      "message": "New Order Added",
      "data": {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phoneNumber": "+1234567890",
          "orderItem": [
              "66914f73f1ed9dbc761c38ec",
              "66914fb7f1ed9dbc761c38ee"
          ],
          "status": "in process",
          "deliveryAddress": {
              "street": "123 Main St",
              "city": "Anytown",
              "state": "CA",
              "postalCode": "12345",
              "country": "USA"
          },
          "_id": "66915500b1aa346e33d350f2",
          "createdAt": "2024-07-12T16:08:32.327Z",
          "updatedAt": "2024-07

-12T16:08:32.327Z",
          "__v": 0
      }
  }
  ```

### Update Order Status

Endpoint: `{{LiveBaseURL}}/api/order/669151ccb1aa346e33d350df`

- **Request Method:** PUT
- **Request Body:** None
- **Response:**
  ```json
  {
      "success": true,
      "statusCode": 200,
      "message": "Order Confirmed",
      "data": {
          "_id": "66915500b1aa346e33d350f2",
          "name": "John Doe",
          "email": "john.doe@example.com",
          "phoneNumber": "+1234567890",
          "orderItem": [
              "66914f73f1ed9dbc761c38ec",
              "66914fb7f1ed9dbc761c38ee"
          ],
          "status": "confirmed",
          "deliveryAddress": {
              "street": "123 Main St",
              "city": "Anytown",
              "state": "CA",
              "postalCode": "12345",
              "country": "USA"
          },
          "createdAt": "2024-07-12T16:08:32.327Z",
          "updatedAt": "2024-07-12T16:10:40.286Z",
          "__v": 0
      }
  }
  ```