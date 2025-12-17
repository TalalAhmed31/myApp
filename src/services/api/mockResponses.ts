export const MOCK_LOGIN_RESPONSE = {
    success: true,
    data: {
        id: 'user-123',
        name: 'John Doe',
        email: 'john.doe@example.com',
        token: 'mock-jwt-token-xyz-123',
    },
    message: 'Login successful',
};

export const MOCK_SIGNUP_RESPONSE = {
    success: true,
    data: {
        id: 'new-user-456',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        token: 'mock-jwt-token-abc-789',
    },
    message: 'Account created successfully',
};

// Fallback error response sample
export const MOCK_ERROR_RESPONSE = {
    success: false,
    message: 'Invalid credentials or validation error',
};
