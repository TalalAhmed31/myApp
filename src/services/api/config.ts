// Basic API Configuration
export const API_CONFIG = {
    BASE_URL: 'https://api.yourclientdomain.com', // Replace with real URL
    TIMEOUT: 15000,
    HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
};

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        SIGNUP: '/auth/signup',
        // REFRESH_TOKEN: '/auth/refresh', // Example of other endpoints
        // FORGOT_PASSWORD: '/auth/forgot-password',
    },
    // USER: {
    //     PROFILE: '/user/profile',
    //     UPDATE: '/user/update',
    // }
};
