import { toast } from "react-toastify";

export default function alert(error: string, toastId: any) {
    return toast(error, toastId)
}

