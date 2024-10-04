// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Label, TextInput } from "flowbite-react";
// import { HiMail } from "react-icons/hi";
// import "/src/Loader.css"; // Impor file CSS

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
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
//         localStorage.setItem("user", JSON.stringify(user)); // Simpan data pengguna
//         setTimeout(() => {
//           // Arahkan ke halaman sesuai role
//           if (user.role === "admin") {
//             navigate("/dashboardadmin");
//           } else if (user.role === "mentor") {
//             navigate("/dashboardadmin");
//           } else {
//             navigate("/");
//           }
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
//             <div className="max-w-lg">
//               <div className="mb-2 block">
//                 <Label htmlFor="email4" value="Your email" />
//               </div>
//               <TextInput
//                 className=" rounded-lg p-1"
//                 placeholder="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 id="email4"
//                 icon={HiMail}
//                 rightIcon={HiMail}
//               />
//             </div>

//             <div className="max-w-lg">
//               <div className="flex justify-between">
//                 <Label className="font-medium">Password</Label>
//                 <a className="text-xs text-blue-700 cursor-pointer hover:text-blue-950">
//                   Forgot Password?
//                 </a>
//               </div>
//               <TextInput
//                 className=" rounded-lg p-1"
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
//               className="w-96 h-9 bg-title-login rounded-lg text-white font-be-vietnam-pro font-bold hover:bg-opacity-90 flex items-center justify-center"
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

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import "/src/Loader.css"; // Impor file CSS
import { auth } from "../firebase"; // Impor objek auth dari file Firebase yang telah kamu buat

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Fetch data from JSON file
    try {
      const response = await fetch("/data/Data.json");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setSuccess("Login berhasil!");
        setIsLoading(false);
        setFadeOut(true);
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
          if (user.role === "admin") {
            navigate("/dashboardadmin");
          } else if (user.role === "mentor") {
            navigate("/dashboardadmin");
          } else {
            navigate("/");
          }
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

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Simpan data pengguna ke localStorage atau ke state sesuai kebutuhan
      localStorage.setItem("user", JSON.stringify(user));
      setSuccess("Login berhasil!");
      setFadeOut(true);

      // Arahkan ke halaman sesuai role
      setTimeout(() => {
        navigate("/dashboardadmin");
      }, 2000);
    } catch (error) {
      setError("Login dengan Google gagal. Silakan coba lagi.");
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
            <div className="max-w-lg">
              <div className="mb-2 block">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                className="rounded-lg p-1"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="email4"
                icon={HiMail}
                rightIcon={HiMail}
              />
            </div>

            <div className="max-w-lg">
              <div className="flex justify-between">
                <Label className="font-medium">Password</Label>
                <a className="text-xs text-blue-700 cursor-pointer hover:text-blue-950">
                  Forgot Password?
                </a>
              </div>
              <TextInput
                className="rounded-lg p-1"
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
              className="w-96 h-9 bg-title-login rounded-lg text-white font-be-vietnam-pro font-bold hover:bg-opacity-90 flex items-center justify-center"
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
            <button
              className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src="./src/assets/google.svg" alt="Google Logo" />
              <label>Sign in with Google</label>
            </button>
            <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
              <img src="./src/assets/apple.svg" alt="Apple Logo" />
              <label>Sign in with Apple</label>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-medium font-be-vietnam-pro">
              Don't have an account?
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
