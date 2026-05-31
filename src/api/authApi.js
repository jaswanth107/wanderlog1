export const loginUser = async (email) => {
  if (!email) {
    throw new Error("Email is required");
  }

  return {
    token: "demo_token_12345",
    email,
  };
};