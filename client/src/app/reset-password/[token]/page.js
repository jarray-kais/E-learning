"use client";
import { ResetPassword } from "@/actions/ForgotPassword";
import Error from "@/components/Error";
import Header1 from "@/components/Header_1";
import Success from "@/components/Success";
import { useParams } from "next/navigation";
import { useState } from "react";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setPending(false);
      return;
    }
    setError("");
    setSuccess(false);
        const { password, confirmPassword} = formData
    try {
      const result = await ResetPassword({password, token} );
      console.log({password , token })
      if (result && result.status !== "success") {
        setError(result.message);
      } else {
        setSuccess(result.message);
      }
    } catch (error) {
      console.log("reset-password error:", error.message);
      setError(
        error.response?.data?.message || "An error occurred during state."
      );
    }
  };
  return (
    <div style={{ height: "75vh" }}>
      <Header1 />
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Reset Password
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
              <div>
                <div className="flex flex-col  justify-between gap-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData(
                          { ...formData, password: e.target.value },
                          setError(""),
                          setSuccess(false)
                        )
                      }
                      required
                    />
                  </label>
                </div>
              </div>
              <div>
                <div className="flex flex-col  justify-between gap-2">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData(
                          {
                            ...formData,
                            confirmPassword: e.target.value,
                          },
                          setError(""),
                          setSuccess(false)
                        )
                      }
                    />
                  </label>
                </div>
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
                    "Reset"
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
      </>
    </div>
  );
};

export default ResetPasswordPage;
