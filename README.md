# Netflix Clone with Next.js

This project is a Netflix clone built using Next.js, React, TypeScript, Firebase, and Tailwind CSS. It aims to replicate the basic functionality and design of the Netflix website, allowing users to browse and watch movie trailers.


## Features

- Browse and search movie titles.
- Watch movie trailers.
- Responsive design suitable for various screen sizes.
- Firebase integration for data storage.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/netflix-clone-nextjs.git

2. cd netflix-clone-nextjs
3. Install dependencies 
npm install or yarn install or pnpm install

### Configuration

0. Create your .env file

1. Firebase Configuration
To set up Firebase for this project, you'll need to:

Create a Firebase project at https://console.firebase.google.com/
Obtain your Firebase configuration (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) and update the src/lib/firebase.ts file with your configuration.
Config file is in lib/firebase.ts

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

2. TMDB API

- create account and tmdb api and from settings copy information about api key and access token and update your env local

NEXT_PUBLIC_TMDB_API_KEY
NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN