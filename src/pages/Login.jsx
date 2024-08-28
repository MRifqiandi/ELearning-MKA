// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "/src/Loader.css"; // Impor file CSS

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [user, setUser] = useState(null); // State untuk pesan sukses
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");
//     setSuccess(""); // Reset pesan sukses

//     // Fetch data from JSON file
//     try {
//       const response = await fetch("/data/Data.json");
//       const users = await response.json();

//       const user = users.find(
//         (user) => user.email === email && user.password === password
//       );

//       if (user) {
//         setSuccess("Login berhasil!"); // Set pesan sukses
//         setIsLoading(false);
//         setFadeOut(true);
//         setTimeout(() => {
//           navigate(user.role === "admin" ? "/dashboardadmin" : "/");
//         }, 2000);
//       } else {
//         setError("Invalid email or password");
//         setIsLoading(false);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen flex flex-col lg:flex-row ${
//         fadeOut ? "fade-out" : ""
//       }`}
//     >
//       <div className="lg:w-1/2 flex flex-col p-5 lg:pt-28 lg:p-32">
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h1 className="text-4xl font-be-vietnam-pro font-medium">
//             E-
//             <span className="text-title-login">Learning</span>
//           </h1>
//           <h2 className="font-be-vietnam-pro mt-2 font-medium">
//             Yuk, Belajar lagi bersama kita🚀
//           </h2>
//         </div>
//         <form
//           className="mt-8 flex flex-col gap-5 sm:p-10 lg:p-0 font-be-vietnam-pro"
//           onSubmit={handleLogin}
//         >
//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col">
//               <label className="font-medium">Email address</label>
//               <input
//                 className="border-2 rounded-lg p-1"
//                 placeholder="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="flex justify-between">
//                 <label className="font-medium">Password</label>
//                 <a className="text-xs text-blue-700 cursor-pointer hover:text-blue-950">
//                   Forgot Password?
//                 </a>
//               </div>
//               <input
//                 className="border-2 rounded-lg p-1"
//                 placeholder="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {error && (
//             <div className="text-red-500 text-center mt-4">{error}</div>
//           )}
//           {success && (
//             <div className="text-green-500 text-center mt-4">{success}</div>
//           )}

//           <div className="flex gap-1.5">
//             <input type="checkbox" className="" />
//             <label className="font-be-vietnam-pro font-medium text-xs">
//               Remember for 30 days
//             </label>
//           </div>
//           <div className="flex items-center justify-center pt-3">
//             <button
//               type="submit"
//               className="w-96 h-9 bg-submit-login rounded-lg text-white font-be-vietnam-pro font-bold hover:bg-opacity-90 flex items-center justify-center"
//               disabled={isLoading}
//             >
//               {isLoading ? <div className="loader" /> : "Login"}
//             </button>
//           </div>
//           <div>
//             <div className="flex items-center justify-center my-8">
//               <div className="border-t border-gray-300 flex-grow"></div>
//               <span className="mx-4 text-gray-500 font-be-vietnam-pro">or</span>
//               <div className="border-t border-gray-300 flex-grow"></div>
//             </div>
//           </div>
//           <div className="flex flex-col gap-6 items-center justify-center lg:flex-row">
//             <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
//               <img src="./src/assets/google.svg" />
//               <label>Sign in with google</label>
//             </button>
//             <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
//               <img src="./src/assets/apple.svg" />
//               <label>Sign in with apple</label>
//             </button>
//           </div>
//           <div className="flex items-center justify-center">
//             <h1 className="font-medium font-be-vietnam-pro">
//               Dont have an account?
//               <Link to={"/registeruser"}>
//                 <span className="text-title-login cursor-pointer">Sign Up</span>
//               </Link>
//             </h1>
//           </div>
//         </form>
//       </div>

//       <div className="lg:w-1/2">
//         <img
//           className="w-full h-full object-cover rounded-l-3xl"
//           src="./src/assets/studying.jpeg"
//           alt="Login Background"
//         />
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/Loader.css"; // Impor file CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(""); // Reset pesan sukses

    // Fetch data from JSON file
    try {
      const response = await fetch("/data/Data.json");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setSuccess("Login berhasil!"); // Set pesan sukses
        setIsLoading(false);
        setFadeOut(true);
        localStorage.setItem("user", JSON.stringify(user)); // Simpan data pengguna
        setTimeout(() => {
          navigate(user.role === "admin" ? "/dashboardadmin" : "/"); // Arahkan ke halaman profil
        }, 2000);
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row ${
        fadeOut ? "fade-out" : ""
      }`}
    >
      <div className="lg:w-1/2 flex flex-col p-5 lg:pt-28 lg:p-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-be-vietnam-pro font-medium">
            E-
            <span className="text-title-login">Learning</span>
          </h1>
          <h2 className="font-be-vietnam-pro mt-2 font-medium">
            Yuk, Belajar lagi bersama kita🚀
          </h2>
        </div>
        <form
          className="mt-8 flex flex-col gap-5 sm:p-10 lg:p-0 font-be-vietnam-pro"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="font-medium">Email address</label>
              <input
                className="border-2 rounded-lg p-1"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label className="font-medium">Password</label>
                <a className="text-xs text-blue-700 cursor-pointer hover:text-blue-950">
                  Forgot Password?
                </a>
              </div>
              <input
                className="border-2 rounded-lg p-1"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}
          {success && (
            <div className="text-green-500 text-center mt-4">{success}</div>
          )}

          <div className="flex gap-1.5">
            <input type="checkbox" className="" />
            <label className="font-be-vietnam-pro font-medium text-xs">
              Remember for 30 days
            </label>
          </div>
          <div className="flex items-center justify-center pt-3">
            <button
              type="submit"
              className="w-96 h-9 bg-submit-login rounded-lg text-white font-be-vietnam-pro font-bold hover:bg-opacity-90 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? <div className="loader" /> : "Login"}
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center my-8">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-4 text-gray-500 font-be-vietnam-pro">or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center lg:flex-row">
            <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
              <img src="./src/assets/google.svg" />
              <label>Sign in with google</label>
            </button>
            <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
              <img src="./src/assets/apple.svg" />
              <label>Sign in with apple</label>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-medium font-be-vietnam-pro">
              Dont have an account?
              <Link to={"/registeruser"}>
                <span className="text-title-login cursor-pointer">Sign Up</span>
              </Link>
            </h1>
          </div>
        </form>
      </div>

      <div className="lg:w-1/2">
        <img
          className="w-full h-full object-cover rounded-l-3xl"
          src="./src/assets/studying.jpeg"
          alt="Login Background"
        />
      </div>
    </div>
  );
}

export default Login;
