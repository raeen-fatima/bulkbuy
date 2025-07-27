
---

## 🛒 BulkBuy – Smarter Group Shopping Platform

BulkBuy is a collaborative shopping platform that lets users order essential items like groceries or household goods **either individually or as part of a group** to unlock better discounts. The more users join a group, the more everyone saves — simple, social, and cost-effective!

---

### 🚀 What We've Built So Far

* ✅ **Landing Page** with smooth UI & brand identity (BulkBuy logo, navigation, services).
* ✅ **Login / Signup Authentication** using **Firebase Auth** with proper validation and form polish.
* ✅ **Deals Listing Page** showing active bulk deals with:

  * Countdown timers
  * Group join status (e.g. `10/15 joined`)
  * Price comparison (individual vs. group)
* ✅ **Deal Details Page** that:

  * Redirects unauthenticated users to Login
  * Lets logged-in users choose between **Group Order** and **Individual Order**
* ✅ **Group Order Flow** with:

  * Live countdown
  * Joined members listing
  * Real-time chat box simulation
  * Group summary section (users, quantity, delivery address)
* ✅ **Group Payment Section (UI stage)** to simulate collective billing based on individual quantities.

---

### 🔐 Authentication

* Firebase Auth is integrated.
* Signup and Login pages support real-time errors and success flow.
* Authenticated sessions are used to guard access to group/individual order pages.

---

### 📦 Group Order Logic

* Users can see how many members have already joined a deal.
* Option to **Join Group Order** triggers a summary + countdown for deal expiry.
* Group orders maintain per-user quantity, address, and cost logic.
* Total group quantity is calculated and shown in real-time.

---

### 🧩 Tech Stack

| Feature  | Tech Used            |
| -------- | -------------------- |
| Frontend | React + Vite         |
| Styling  | TailwindCSS          |
| Auth     | Firebase Auth        |
| Routing  | React Router v6+     |
| Icons    | React Icons          |
| State    | useState + useEffect |

---

### 🔄 Coming Next

* Backend database (Firebase / Node.js) for live group syncing.
* Dynamic quantity selection, address input during order.
* Real-time chat with Firebase or Socket.io.
* Payment integration using Razorpay/Stripe.
* Order history & delivery tracking dashboard.

---

### 🧠 How It Works (in simple words)

> You open BulkBuy → See a good deal → Want to save? → Join a group instead of buying alone.
> You see who else is joining, how much they’re ordering, and where it's going.
> When the group limit fills or the timer ends — we place a bulk order and everyone saves. 💰

---

### 💻 To Run Locally

```bash
git clone https://github.com/raeen-fatima/bulkbuy
cd bulkbuy-app
npm install
npm run dev
```

> Make sure you create a `.env` file with your Firebase credentials:

```
VITE_FIREBASE_API_KEY=xxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx.firebaseapp.com
...
```

---

### 🤝 Credits

This project is crafted by a passionate team (led by Raeen Fatima) to bring real-world collaborative shopping to life. We believe tech should make everyday things smarter and cheaper.

---

Would you like me to **add a usage GIF, feature screenshots, or a badge section** at the top for GitHub markdown as well?
