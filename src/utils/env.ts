
export type Env = {
  BASE_URL: string;
  USER_EMAIL: string; // Swag Labs uses 'username'
  USER_PASS: string;
};

export function getEnv(): Env {
  const { BASE_URL, USER_EMAIL, USER_PASS } = process.env;
  if (!USER_EMAIL || !USER_PASS) {
    throw new Error('USER_EMAIL (username) and USER_PASS must be set (see .env.example)');
  }
  return {
    BASE_URL: BASE_URL ?? 'https://www.saucedemo.com',
    USER_EMAIL,
    USER_PASS
  };
}
