interface Window {
  grecaptcha: {
    getResponse: () => string;
    reset: () => void;
  };
}