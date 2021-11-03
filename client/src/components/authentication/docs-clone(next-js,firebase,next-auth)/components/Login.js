import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
            src="https://banner2.cleanpng.com/20190423/hzg/kisspng-scalable-vector-graphics-computer-icons-computer-f-documents-files-and-folders-png-icons-and-graphics-5cbed2f5cceb05.4165270515560097178394.jpg"
            height="300"
            width="550"
            objectFit="contain"
            />

            <Button
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
            >
                Login
            </Button>


        </div>
    )
}

export default Login
