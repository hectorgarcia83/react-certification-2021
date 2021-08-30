export const SESSION_KEY = 'SESSION';

export default function useAuth() {
  const saveSession = (session) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  };

  const cleanSession = () => {
    localStorage.removeItem(SESSION_KEY);
  };

  const getSession = () => {
    const user = JSON.parse(localStorage.getItem(SESSION_KEY));
    return user;
  };

  return { saveSession, cleanSession, getSession };
}
