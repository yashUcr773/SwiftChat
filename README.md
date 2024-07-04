# SwiftChat App

Demo - [swiftchat.dev](https://swiftchat.dev)

Test Account
- Email - demouser@mailsac.com
- Password - demo_user_1
- Username - demouser1

## Introduction
SwiftChat is a peer-to-peer messaging application inspired from Facebook messenger. It allows users to exchange text messages, emojis, and images seamlessly. The application supports authentication through various platforms like GitHub and Google, ensuring a secure and personalized user experience. Messaging features are powered by the Pusher API, facilitating real-time communication. 

## Features
- **Message Firends:** Peer-to-peer messaging
- **Make Groups:** Group chat functionality
- **Not Limited to texts:** Sending text messages, emojis, and images
- **Safe and secure:** Authentication with NextAuth supporting OAuth with GitHub and Google
- **Send Messages in an instant:** Real-time messaging using Pusher API

## Tech Stack

- **Next.js 14**: Powering the frontend and server-side rendering.
- **Form Validation**: Implemented using Zod and React Hook Form.
- **Toasts**: Utilizing React Toast for feedback messages.
- **Authentication**: Managed by NextAuth, supporting Google and GitHub OAuth.
- **Database**: MongoDB
- **Upload Management**: Handled by Cloudinary.
- **CSS**: Styled with Tailwind CSS.
- **Icons**: Leveraging Lucide React.
- **Database ORM**: Prisma for database operations.
- **State Management**: Utilizing Zustand for state management.

## Running Locally

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yashUcr773/SwiftChat.git`.
2. Navigate to the project directory: `cd SwiftChat`.
3. Install dependencies: `npm install`.
4. Run the development server: `npm run dev`.
5. The application will be accessible at `http://localhost:3000` by default.

## Environment Variables

- `DATABASE_URL`: MongoDB database connection URL.
- `NEXTAUTH_SECRET`: Secret key for NextAuth authentication.
- `NEXT_PUBLIC_PUSHER_APP_KEY`, `PUSHER_APP_ID`, `PUSHER_SECRET`: Pusher API credentials for real-time messaging.
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for image storage.
- `GITHUB_ID`, `GITHUB_SECRET`: GitHub OAuth client ID and client secret.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: Google OAuth client ID and client secret.


## Attribution

- The project idea was inspired by [Code with Antonio](https://www.youtube.com/watch?v=PGPGcKBpAk8).

## Planned Features

- [x] Real time Messaging
- [] End to End Encryption
- [] Send other things like videos and documents.
- [x] Emojis
- [x] Group Chat
- [] Audio / video Calls
- [x] Add Github and Google OAuth
- [x] Add Facebook OAuth?


Feel free to contribute and enhance the project!
