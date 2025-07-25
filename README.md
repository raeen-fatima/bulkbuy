```
bulkbuy-app/
│
├── client/                 # Frontend - React App
│   ├── public/
│   └── src/
│       ├── assets/         # Images, icons
│       ├── components/     # Reusable UI components (Navbar, ProductCard, etc.)
│       ├── pages/          # Routes/Views (Home, Login, Dashboard, etc.)
│       ├── context/        # Auth & Global State (React Context or Recoil)
│       ├── services/       # API calls (Axios or fetch wrappers)
│       ├── utils/          # Helper functions
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/                 # Backend - Node.js + Express
│   ├── controllers/        # Business logic (orderController, userController)
│   ├── models/             # DB Schemas (MongoDB with Mongoose or Prisma)
│   ├── routes/             # API Routes (authRoutes, productRoutes, etc.)
│   ├── middleware/         # Auth, error handling, etc.
│   ├── config/             # DB config or Firebase SDK
│   ├── utils/              # Utility functions (like price calculation)
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
│
├── README.md
├── package.json
└── .gitignore
```
