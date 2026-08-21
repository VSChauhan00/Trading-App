require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRoute = require("./routes/AuthRoute");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UserModel");

const PORT = process.env.BACKEND_PORT || 3002;
const uri = process.env.BACKEND_MONGO_URL;

const app = express();

// CORS: configurable per-environment via BACKEND_CORS_ORIGINS (comma-separated)
// Falls back to localhost origins for local development.
const allowedOrigins = process.env.BACKEND_CORS_ORIGINS
  ? process.env.BACKEND_CORS_ORIGINS.split(",").map((o) => o.trim())
  : ["http://localhost:3000", "http://localhost:3001"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },

//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });

//         newHolding.save();
//     });
//     res.send("Done");
// });

// app.get('/addPositions', async (req, res) => {
//     let tempPositions = [

//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },


//     ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newPosition.save();
//     });
//     res.send("Done");
// });

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    const { name, qty, price, mode } = req.body;

    // Parse to Number — React e.target.value returns strings
    const qtyNum = Number(qty);
    const priceNum = Number(price);

    const newOrder = new OrdersModel({ name, qty: qtyNum, price: priceNum, mode });
    await newOrder.save();

    // Update holdings to reflect buy/sell in the holdings section
    const existingHolding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
        if (existingHolding) {
            // Recalculate weighted average cost
            const totalCost = existingHolding.avg * existingHolding.qty + priceNum * qtyNum;
            const totalQty = existingHolding.qty + qtyNum;
            existingHolding.qty = totalQty;
            existingHolding.avg = totalCost / totalQty;
            existingHolding.price = priceNum;
            await existingHolding.save();
        } else {
            await HoldingsModel.create({ name, qty: qtyNum, avg: priceNum, price: priceNum, net: "0.00%", day: "0.00%" });
        }
    }

    if (mode === "SELL") {
        if (existingHolding) {
            if (existingHolding.qty <= qtyNum) {
                await existingHolding.deleteOne();
            } else {
                existingHolding.qty -= qtyNum;
                existingHolding.price = priceNum;
                await existingHolding.save();
            }
        }
    }

    res.send("Order Saved!!");
});

app.use("/", authRoute);

// --- Auth session routes ---

// Verify: checks whether the client has a valid session token.
// Used by the dashboard to gate access and redirect unauthenticated users.
// Also returns the logged-in user's username so the dashboard can personalise the UI.
app.get("/verify", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.BACKEND_TOKEN_KEY);
    const user = await User.findById(decoded.id).select("username email");
    if (!user) {
      return res.status(401).json({ authenticated: false });
    }
    res.json({
      authenticated: true,
      id: decoded.id,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(401).json({ authenticated: false });
  }
});

// Logout: clears the token cookie so the session ends across all apps.
const isProduction = process.env.NODE_ENV === "production";
const clearCookieOptions = {
  withCredentials: true,
  httpOnly: false,
  secure: isProduction,
  sameSite: isProduction ? "None" : "Lax",
  maxAge: 0,
};

app.post("/logout", (req, res) => {
  res.cookie("token", "", clearCookieOptions);
  res.json({ message: "Logged out successfully", success: true });
});

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}!`);

    mongoose.connect(uri)
        .then(() => console.log("Database Connected!!!"))
        .catch((err) => console.error("Database connection error:", err));
});
