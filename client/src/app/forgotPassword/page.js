"use client";
import { forgotPassword } from "@/actions/ForgotPassword";
import Error from "@/components/Error";
import Header1 from "@/components/Header_1";
import Success from "@/components/Success";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError("");
    setSuccess(false);
    try {
      const result = await forgotPassword({email});
      console.log(result);
      if (result && result.status !== "success") {
        setError(result.message);
      } else {
        setSuccess(result.message);
      }
    } catch (error) {
      console.log("error:", error.message);
      setError(
        error.response?.data?.message || "An error occurred during sending email."
      );
    } finally {
      setPending(false);
    }
  };
  return (
    <div style={{height : "75vh"}}>
      <Header1 />
      <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Please enter your email to reset your password.
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value, setError(""), setSuccess(false))
                    }
                    required
                  />
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className={
                    "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
                  }
                >
                  {pending ? (
                    <span className="loading loading-spinner loading-md "></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
            {error ? (
              <Error error={error} />
            ) : success ? (
              <Success success={success} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
