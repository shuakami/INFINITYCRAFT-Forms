import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Core Middleware
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Set security-related HTTP response headers
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse incoming requests with URL-encoded payloads

// API Router
const apiRouter = express.Router();

// Health check endpoint
apiRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up and running!' });
});

// Mount the API router under the /api prefix
app.use('/api', apiRouter);

// Module Routers
import userRouter from '../modules/user/user.routes';
import formRouter from '../modules/form/form.routes';
import adminRouter from '../modules/admin/admin.routes';
import emailRouter from '../modules/email/email.routes';
apiRouter.use('/auth', userRouter);
apiRouter.use('/forms', formRouter);
apiRouter.use('/admin', adminRouter);
apiRouter.use('/notifications', emailRouter);

// Global Error Handler
import errorHandler from '../middleware/errorHandler';
import { bootstrapAdmin } from '../bootstrapAdmin';

app.use(errorHandler);

async function startServer() {
  await bootstrapAdmin(); // Run bootstrap before starting the server

  // Start the server only when running directly
  if (process.env.NODE_ENV !== 'test') { // Adjust condition as needed, e.g., for testing
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Backend server is running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
