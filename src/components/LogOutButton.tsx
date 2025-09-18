"use client";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";
import { toast } from "sonner";

function LogOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true);

        const { errorMessage } = await logOutAction();

        if(!errorMessage) {
            router.push(`/?toastType=logOut`);
        }
        else {
            toast.error(errorMessage , {
                description: "There was an error logging out. Please try again.",
                duration: 5000,
            })
        }

        setLoading(false);
    }

    return (
        <Button
          variant="outline"
          onClick={handleLogOut}
          disabled={loading}
          className="w-24"
        >
            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Log Out"}
        </Button>
    )
}

export default LogOutButton;
