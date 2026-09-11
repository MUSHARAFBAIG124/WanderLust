# WanderLust

WanderLust is a full-stack travel-listing web application built with Node.js, Express, MongoDB, EJS, Passport, and Cloudinary. Users can browse listings, create accounts, add and manage listings, upload listing images, and leave reviews.

## Features

- Create, view, edit, and delete travel listings
- Search and filter listings
- User signup, login, logout, and session-based authentication
- Listing reviews with validation
- Cloudinary-backed image uploads
- Flash messages and custom error handling

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Views:** EJS and ejs-mate
- **Authentication:** Passport, passport-local, passport-local-mongoose
- **Validation:** Joi
- **Image uploads:** Multer and Cloudinary

## Prerequisites

- Node.js 18 or newer
- MongoDB running locally (default: `mongodb://127.0.0.1:27017/wanderlust`)
- A Cloudinary account for image uploads

## Installation

```bash
git clone https://github.com/MUSHARAFBAIG124/WanderLust.git
cd WanderLust
npm install
```

Create a `.env` file in the project root. Do not commit this file.

```env
MONGODB_URI=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=replace_with_a_long_random_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start MongoDB, then run the application:

```bash
node app.js
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Deploying to Render

1. Push this repository to GitHub.
2. Create a MongoDB Atlas database and allow connections from Render. Copy its connection string as `MONGODB_URI`.
3. In Render, create a **Web Service** from this repository. Render detects the Node service using the `npm start` command.
4. Set `NODE_ENV=production` and add `MONGODB_URI`, `SESSION_SECRET`, `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET` as Render environment variables.
5. Deploy and use the public Render URL shown in the service dashboard.

Do not enter these secrets in source code or commit them to Git.

## Seed Sample Listings

To replace the current listings with the sample data:

```bash
node init/index.js
```

This operation deletes existing listings before inserting the sample listings.

## Project Structure

```text
controller/  Request handlers
init/        Database seed data and initializer
models/      Mongoose models
public/      Static CSS and JavaScript
routes/      Express route definitions
utils/       Shared utilities and error helpers
views/       EJS templates
```

## Security Notes

- `.env`, `node_modules`, uploads, logs, certificates, and local database files are excluded by `.gitignore`.
- Never commit Cloudinary keys, database credentials, passwords, or session secrets.
- Production requires `SESSION_SECRET`; the application reads it from an environment variable.
- Use a production session store before handling production traffic at scale.

## License

ISC
