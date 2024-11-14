const API = "http://localhost:5000/api/";
export async function forgotPassword({email}) {
    console.log({email});
    try {
      const response = await fetch(`${API}users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error occurred:", error.message);
    }finally {
      setPending(false)
    }
  }

export async function ResetPassword({password , token}){
  console.log({password});
    try {
      const response = await fetch(`${API}users/reset-password/${token}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword: password }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error occurred:", error.message);
    }
  }
