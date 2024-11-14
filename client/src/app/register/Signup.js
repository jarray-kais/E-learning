"use client";
import { signupaction } from "@/actions/SignupAction";
import Error from "@/components/Error";
import Success from "@/components/Success";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
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
    try {
      const { confirmPassword, ...data } = formData;
      const result = await signupaction(data);
      console.log(result);
      if (result && result.status !== "success") {
        setError(result.message);
      } else {
        setSuccess(result.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      console.log("Signup error:", error.message);
      setError(
        error.response?.data?.message || "An error occurred during signup."
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <div >
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="full-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData(
                      { ...formData, name: e.target.value },
                      setError(""),
                      setSuccess(false)
                    )
                  }
                  required
                />
              </label>
            </div>
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData(
                      { ...formData, email: e.target.value },
                      setError(""),
                      setSuccess(false)
                    )
                  }
                />
              </label>
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
                  "Register"
                )}
              </button>
            </div>
          </form>

          {error ? (
            <Error error={error} />
          ) : success ? (
            <Success success={success} />
          ) : null}
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            If you are a member?{" "}
            <Link
              href="/signin"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
