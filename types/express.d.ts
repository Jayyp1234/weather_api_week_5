import 'express-serve-static-core';

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;  // Extend the Request to include 'user'
    }
}
