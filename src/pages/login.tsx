import React, { useState } from "react";
import { User, Eye, EyeClosed, Lock } from "lucide-react";
import { supabase } from "../lib/supabaseclient";

const Login_App:React.FC = () =>{
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPasword] = useState("");
    return(
        <div className="w-auto h-screen flex justify-center items-center">
            <div className="bg-white/70 relative inset-0 flex flex-col w-[80%] py-10 items-center p-5 rounded-xl shadow-xl gap-5">
                <p className="text-[#70A6D1] font-bold text-2xl">Danus Osis</p>
                <img src="image/logo.png" className="w-[50%]" />
                <div className="flex flex-col text-left w-full gap-1">
                    <div className="flex flex-col text-left w-full">
                    <div className="mb-7">
                        <div className="flex flex-row bg-white h-16 rounded-lg px-2 items-center border">
                            <User className="h-[100%}"></User>
                            <input type="text" placeholder="Username" className="w-[100%] h-[100%] outline-none px-2"/>
                        </div>
                    </div>

                    <div className="flex flex-col text-left w-full">
                        <div className="mb-7">
                            <div className="flex flex-row bg-white h-16 rounded-lg px-2 items-center border">
                                <Lock className="h-[100%}"></Lock>
                                <input type={showPassword? "text" : "password"} placeholder="Password" className="w-[100%] h-[100%] outline-none px-2"/>
                                {!showPassword? <EyeClosed onClick={()=>setShowPassword(!showPassword)}> </EyeClosed>: <Eye onClick={()=>setShowPassword(!showPassword)}> </Eye>}
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="flex justify-center">
                        <button className="h-[100%] w-[80%] bg-[#6699C7] p-2 text-white font-bold rounded-md ">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login_App;