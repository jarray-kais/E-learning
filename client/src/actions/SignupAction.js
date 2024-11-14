const API = "http://localhost:5000/api/";
export async function signupaction(formData) {
  console.log(formData);
  try {
    const response = await fetch(`${API}users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}