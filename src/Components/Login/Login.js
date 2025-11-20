import { useCallback, useState } from "react";
import { LoginService } from "../Common/Services/CommonServices";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); // State to hold form data
  // Handle input changes
  const onChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://192.168.88.18:7070/api/institute/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("Registration failed. Please try again.");
    }


  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await LoginService({ body: formData });
      console.log(response);
      if(response._id){
        sessionStorage.setItem("instituteData", JSON.stringify(response));
        window.location = '/';
      }
    } catch (error) {
      console.log(error, "error")
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      {/* Left side (Image + text) */}
      <div
        className={`relative flex flex-col items-center justify-center w-1/2 p-10 text-white transition-all duration-700 ${isRegister ? "translate-x-full" : ""
          } bg-gradient-to-r from-purple-600 to-indigo-600`}
      >
        <h1 className="text-4xl font-bold mb-4">
          {isRegister ? "Welcome Back!" : "Hello, Friend!"}
        </h1>
        <p className="text-lg mb-6 text-center max-w-sm">
          {isRegister
            ? "Already have an account? Log in and start your journey with us."
            : "New here? Register to join us and explore amazing features."}
        </p>
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-purple-700 transition"
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </div>

      {/* Right side (Forms) */}
      <div
        className={`absolute right-0 top-0 h-full w-1/2 flex items-center justify-center bg-white transition-all duration-700 ${isRegister ? "-translate-x-full" : ""
          }`}
      >
        {!isRegister ? (
          <form className="w-80" onSubmit={onLoginHandler}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
            <input
              type="email"
              name="email"
              required
              onChange={onChangeHandler}
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              required
              onChange={onChangeHandler}
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="w-80" onSubmit={onSubmitHandler}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Register</h2>
            <input
              type="text"
              placeholder="Institute Name"
              name="name"
              onChange={onChangeHandler}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onChangeHandler}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
