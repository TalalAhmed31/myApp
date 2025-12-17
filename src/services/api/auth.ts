import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { API_CONFIG, ENDPOINTS } from './config';
import { MOCK_LOGIN_RESPONSE, MOCK_SIGNUP_RESPONSE } from './mockResponses';

// --- Types ---
export interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    data?: User;
    message?: string;
    token?: string;
}

// --- Axios Configuration ---
const apiClient: AxiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: API_CONFIG.HEADERS,
});

// --- API Service ---
class AuthService {
    // Toggle this to switch between Local Mock and Real Server
    private static useMock: boolean = true;
    private static mockDelay: number = 1000; // Simulate network lag

    /**
     * LOGIN
     */
    static async login(credentials: LoginRequest): Promise<AuthResponse> {
        console.log(`[AuthService] Login Request to ${API_CONFIG.BASE_URL}${ENDPOINTS.AUTH.LOGIN}`, credentials);

        // MOCK PATH
        if (this.useMock) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('[AuthService] Returning Mock Login Response:', MOCK_LOGIN_RESPONSE);

                    // Optional: You can still do basic check like "if fields are empty"
                    // But here we just return the static success JSON
                    resolve(MOCK_LOGIN_RESPONSE);

                }, this.mockDelay);
            });
        }

        // REAL API PATH
        try {
            const response: AxiosResponse<AuthResponse> = await apiClient.post(ENDPOINTS.AUTH.LOGIN, credentials);
            return response.data;
        } catch (error: any) {
            console.error('[AuthService] Login Error:', error);
            // Handle different error shapes here based on backend spec
            return {
                success: false,
                message: error.response?.data?.message || 'Network request failed',
            };
        }
    }

    /**
     * SIGNUP
     */
    static async signup(data: SignupRequest): Promise<AuthResponse> {
        console.log(`[AuthService] Signup Request to ${API_CONFIG.BASE_URL}${ENDPOINTS.AUTH.SIGNUP}`, data);

        // MOCK PATH
        if (this.useMock) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('[AuthService] Returning Mock Signup Response:', MOCK_SIGNUP_RESPONSE);
                    resolve(MOCK_SIGNUP_RESPONSE);
                }, this.mockDelay);
            });
        }

        // REAL API PATH
        try {
            const response: AxiosResponse<AuthResponse> = await apiClient.post(ENDPOINTS.AUTH.SIGNUP, data);
            return response.data;
        } catch (error: any) {
            console.error('[AuthService] Signup Error:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Network request failed',
            };
        }
    }
}

export default AuthService;
