# API Integration Guide

This guide explains how to switch your application from using Mock Data to consuming real APIs.

## 1. Configure the API connection

Open `src/services/api/config.ts`. This file holds the central configuration for your network requests.

### a. Set the Base URL
Find `BASE_URL` and replace the placeholder with your actual server address.
```typescript
export const API_CONFIG = {
    // CHANGE THIS URL
    BASE_URL: 'https://api.myapp.com/v1', 
    // ...
};
```

### b. Verify Endpoints
Ensure the endpoint paths match exactly what your backend expects.
```typescript
export const ENDPOINTS = {
    AUTH: {
        // Example: if your backend uses '/users/login' instead of '/auth/login', change it here.
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
    },
};
```

---

## 2. Disable Mock Mode

Open `src/services/api/auth.ts`. This service handles the logic for Authentication.

### a. Toggle the flag
Find the `useMock` static property inside the `AuthService` class and set it to `false`.

```typescript
class AuthService {
    // CHANGE THIS TO FALSE
    private static useMock: boolean = false; 
    
    // ...
}
```
**Result:** The app will now skip the `if (this.useMock)` block and execute the `try...catch` block that uses `apiClient.post(...)`.

---

## 3. Match Data Structures (Interfaces)

Open `src/services/api/auth.ts`. You must ensure the TypeScript interfaces matching your Real API's "Contract".

### a. Request Payloads
If your backend requires `username` instead of `email` for login, update the interface:

```typescript
// Example Update
export interface LoginRequest {
    username: string; // Changed from email
    password: string;
}
```
*Note: If you change this, you will also need to update `src/screens/Login.tsx` to use the correct variable name when calling `AuthService.login`.*

### b. Response Payload
If your backend returns the raw user object instead of wrapping it in a `data` field, update `AuthResponse`.

**Mock Shape (Current):**
```json
{
  "success": true,
  "data": { "id": "...", "email": "..." },
  "message": "..."
}
```

**Common Backend Shape (Example):**
```json
{
  "token": "jwt-token-xyz",
  "user": { "id": 1, "email": "..." }
}
```

**If your backend looks like the example above, update the interface:**
```typescript
export interface AuthResponse {
    success?: boolean; // Real APIs might just use HTTP status codes (200 OK vs 400 Error)
    token?: string;
    user?: User;
    // ... mapping to whatever your backend sends
}
```

---

## 4. Handle Errors

In `src/services/api/auth.ts`, the `catch` block currently assumes error messages are in `error.response.data.message`.

```typescript
catch (error: any) {
    return {
        success: false,
		// Check where your backend sends error text. 
		// It might be error.response.data.error, or just error.message
        message: error.response?.data?.message || 'Network request failed',
    };
}
```
Verify this path matches your backend's error response format.

---

## 5. Token Management (Important)

The current code receives a token but doesn't **save** it. For a real app, you need to store the token so the user stays logged in.

**Recommendation:**
1. Install `AsyncStorage`: `npm install @react-native-async-storage/async-storage`
2. Save token on Login Check `Login.tsx`:
   ```typescript
   if (response.success) {
       await AsyncStorage.setItem('userToken', response.data.token);
       // Navigate...
   }
   ```
3. Use token in requests (in `config.ts` or `auth.ts`):
   ```typescript
   apiClient.interceptors.request.use(async (config) => {
       const token = await AsyncStorage.getItem('userToken');
       if (token) {
           config.headers.Authorization = `Bearer ${token}`;
       }
       return config;
   });
   ```

## Checklist before Deployment

- [ ] `BASE_URL` is correct (prod vs staging)
- [ ] `useMock` is false
- [ ] Interfaces (`LoginRequest`, `AuthResponse`) match Swagger/API docs
- [ ] Error handling logic matches backend error codes
