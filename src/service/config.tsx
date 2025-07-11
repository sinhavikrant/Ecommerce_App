import { Platform } from 'react-native';

export const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/api'
    : 'http://localhost:3000/api';
export const SOCKET_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';
export const Google_MAP_API = 'YOUR_GOOGLE_MAP_API_KEY';
export const BRANCH_ID = '67a4fc2f220ae25e92434b1f';

//USE YOUR NETWORK IP OR HOSTED URL
// export const BASE_URL = 'http://172.20.10.4:3000/api'
// export const SOCKET_URL = 'http://172.20.10.4:3000
