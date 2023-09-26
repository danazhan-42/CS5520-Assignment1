export const validateName = (email) => {
  // Check if the email has a valid format using regular expression
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  return nameRegex.test(email);
};

export const validateEmail = (email) => {
  // Check if the email has a valid format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (number) => {
  // Check if the phone number has 10 digits
  const phoneRegex = /^\d{3}\d{3}\d{4}$/;
  return phoneRegex.test(number);
};
