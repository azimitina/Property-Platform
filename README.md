# Property Platform

## Your Real Estate Hub

A platform for buying, selling, and renting properties


## View the live version of the project hosted on Vercel [Property Platform](https://property-platform-alpha.vercel.app/) 🚀

<img width="997" alt="property-platform" src="https://github.com/user-attachments/assets/b6d37391-7c9e-418c-a246-6d3a542b5ee1">

## Features

Here are some of the current features that Property Pulse has:

- [x] User authentication with Google & Next Auth
- [x] User authorization
- [x] Route protection
- [x] User profile with user listings
- [x] Property Listing CRUD
- [x] Property image upload (Multiple)
- [x] Property search
- [x] Internal messages with 'unread' notifications
- [x] Photoswipe image gallery
- [x] Mapbox maps
- [x] Toast notifications
- [x] Property bookmarking / saved properties
- [x] Property sharing to social media
- [x] Loading spinners
- [x] Responsive design (Tailwind)
- [x] Custom 404 page

## Tech Stack
Property Platform is built using the following technologies:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Photoswipe](https://photoswipe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://www.npmjs.com/package/react-share)


## <a name="quick-start">🤸 Quick Start</a>

### Prerequisites

- Node.js version 18 or higher
- MongoDB Atlas account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/)
- Cloudinary account. Sign up at [Cloudinary](https://cloudinary.com/)
- Google console account. Sign up at [Google Cloud](https://console.cloud.google.com/)
- Mapbox account. Sign up at [Mapbox](https://www.mapbox.com/)

**Set Up Environment Variables**

Rename the `env.example` file to `.env` and fill in the following environment variables:

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate with the following command:
  ```bash
  openssl rand -base64 32
  ```
- Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
- Get your Mapbox token from your Mapbox account and add it to `NEXT_PUBLIC_MAPBOX_TOKEN`.
- Get your Google Geocoding API key from your Google console account and add it to `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY`.


**Installation**

Install the project dependencies using npm:

```bash
npm install
```


**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
