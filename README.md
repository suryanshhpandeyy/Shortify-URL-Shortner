# URL Shortener

URL Shortener is a full-stack web application that transforms long URLs into short, easy-to-share links while providing detailed analytics and secure user management. Built using Node.js, Express.js, MongoDB, and EJS, the application follows the MVC architecture pattern to ensure scalability, maintainability, and clean code organization.

The platform enables users to register and log in securely, generate unique short URLs, and monitor link performance through click analytics. Every visit to a shortened URL is recorded and stored, allowing users to track engagement and gain insights into how their links are being used.

This project demonstrates core backend development concepts such as RESTful APIs, authentication and authorization, database management, server-side rendering, middleware implementation, and analytics tracking. It serves as a practical example of building a production-ready web application using modern web technologies.

## Features

- Secure User Authentication & Authorization
- Generate Unique Short URLs
- Redirect Short URLs to Original Links
- Click Tracking & Analytics Dashboard
- Server-Side Rendering with EJS
- MongoDB Database Integration
- MVC Architecture
- Protected Routes Using Middleware
- Responsive User Interface

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend
- EJS
- HTML
- CSS
- Bootstrap

### Authentication & Security
- JWT Authentication
- Cookie-Based Sessions
- Route Protection Middleware

## Screenshots

### Signup Page
![Signup](screenshots/signup.png)

### Login Page
![Login](screenshots/login.png)

### Home Dashboard
![Home](screenshots/home.png)

### Analytics Dashboard
![Analytics](screenshots/analytics.png)

## Project Structure

```text
├── controller
│   ├── url.js
│   └── users.js
├── middleware
│   └── auth.js
├── model
│   ├── url.js
│   └── users.js
├── routes
│   ├── url.js
│   └── users.js
├── service
│   └── auth.js
├── views
│   ├── analytics.ejs
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── connection.js
├── index.js
├── package.json
└── package-lock.json
```
