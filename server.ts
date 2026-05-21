import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import axios from 'axios';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // --- PayPal Routes ---
  const PAYPAL_CLIENT_ID = process.env.VITE_PAYPAL_CLIENT_ID;
  const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
  const PAYPAL_API = process.env.PAYPAL_MODE === 'live' ? 'https://api-m.paypal.com' : 'https://api-m.sandbox.paypal.com';

  const generatePayPalAccessToken = async () => {
    try {
      if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
        throw new Error("MISSING_API_CREDENTIALS");
      }
      const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET).toString("base64");
      const response = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, "grant_type=client_credentials", {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data.access_token;
    } catch (error) {
      console.error("Failed to generate Access Token:", error);
      throw error;
    }
  };

  app.post('/api/paypal/create-order', async (req, res) => {
    try {
      const { amount, description } = req.body;
      const accessToken = await generatePayPalAccessToken();
      const url = `${PAYPAL_API}/v2/checkout/orders`;
      const payload = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: { currency_code: "USD", value: amount },
            description: description,
          },
        ],
      };
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      res.json(response.data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/paypal/capture-order', async (req, res) => {
    try {
      const { orderID } = req.body;
      const accessToken = await generatePayPalAccessToken();
      const url = `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`;
      const response = await axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      res.json(response.data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // --- Airwallex Routes ---
  const AIRWALLEX_CLIENT_ID = process.env.AIRWALLEX_CLIENT_ID;
  const AIRWALLEX_API_KEY = process.env.AIRWALLEX_API_KEY;
  const AIRWALLEX_API = process.env.AIRWALLEX_MODE === 'live' ? 'https://api.airwallex.com' : 'https://api-demo.airwallex.com';

  const generateAirwallexToken = async () => {
    try {
      if (!AIRWALLEX_CLIENT_ID || !AIRWALLEX_API_KEY) {
        throw new Error("MISSING_API_CREDENTIALS");
      }
      const response = await axios.post(`${AIRWALLEX_API}/api/v1/authentication/login`, null, {
        headers: {
          'x-client-id': AIRWALLEX_CLIENT_ID,
          'x-api-key': AIRWALLEX_API_KEY,
          'Content-Type': 'application/json'
        }
      });
      return response.data.token;
    } catch (error) {
      console.error("Failed to generate Airwallex Token:", error);
      throw error;
    }
  };

  app.post('/api/airwallex/create-payment-link', async (req, res) => {
    try {
      const { amount, description } = req.body;
      const token = await generateAirwallexToken();
      
      // Create a Payment Link via Airwallex API
      const response = await axios.post(`${AIRWALLEX_API}/api/v1/pa/payment_links/create`, {
        amount: parseFloat(amount),
        currency: 'USD',
        title: description,
        return_url: `${req.protocol}://${req.get('host')}/?payment=success`,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      res.json(response.data);
    } catch (error: any) {
      console.error("Airwallex Error:", error.response?.data || error.message);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
