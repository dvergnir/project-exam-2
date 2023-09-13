export function validateForm(data) {
  const errors = {};

  const nameRegex = /^[a-zA-Z0-9_]+$/;
  const passwordMinLength = 8;
  const avatarUrlRegex = /^(http|https):\/\/\S+$/;
  const emailRegex = /^(?=.*@)(?=.*(stud\.noroff\.no|noroff\.no))\S+$/;

  if (!data.name) {
    errors.name = "Name is required";
  } else if (!nameRegex.test(data.name)) {
    errors.name = "Name must only contain letters, numbers, and underscores";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email.toLowerCase())) {
    errors.email = "Invalid email address. Must be stud.noroff.no or noroff.no";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < passwordMinLength) {
    errors.password = `Password must be at least ${passwordMinLength} characters long`;
  }

  if (data.avatar && !avatarUrlRegex.test(data.avatar)) {
    errors.avatar = "Invalid avatar URL";
  }

  return errors;
}
