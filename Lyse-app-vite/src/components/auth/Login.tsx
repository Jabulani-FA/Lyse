import {useState} from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setemail] = useState<string>("")
  return (
    <motion.div
      className="flex justify-center h-2/3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    >
      <div className="self-center md:w-1/3 w-1/2">
        <h1 className="mb-5">Login</h1>
          <input type="email" className="w-full form-control p-2 mb-2" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)}/>
          <input type="password" className="w-full form-control p-2 mb-2" placeholder="Enter password"/>
        <div className="btn-gradient-inner rounded-lg">
          <button className="btn-gradient w-full ">Submit</button>
        </div>
        <div className="dividingLine"><p>Or</p></div>
        <div className="btn-gradient-inner rounded-lg">
          <button className="btn-gradient w-full flex justify-center align-center gap-4"><img src="/github-icon2.svg" width={20}/> Sign in with GitHub</button>
        </div>
        <div className="btn-gradient-inner rounded-lg">
          <button className="btn-gradient w-full flex justify-center align-center gap-4"> <img src="/gmail-icon.svg" width={20}/> Sign in with Email</button>
        </div>
        <div className="btn-gradient-inner rounded-lg">
          <button className="btn-gradient w-full flex justify-center align-center gap-4"> <img src="/google-icon.svg" width={20}/>Sign in with Google</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
