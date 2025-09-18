"use client"

import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type ToastVarient = "success" | "destructive" | "default";

type ToastConfig = {
    title: string;
    description: string;
    varient: ToastVarient;
}

const TOAST_CONFIG: Record<string, ToastConfig> = {
    login: {
        title: "Logged In",
        description: "You have been successfully logged In",
        varient: "success",
    },
    signUp: {
        title: "Signed In",
        description: "You have been successfully signed In",
        varient: "success",
    },
    newNote: {
        title: "New Note",
        description: "You have been successfully created a new note",
        varient: "success",
    },
    logOut: {
        title: "Logged Out",
        description: "You have been successfully logged Out",
        varient: "success",
    }
};

type ToastType = keyof typeof TOAST_CONFIG;

function isToastType(value: string | null): value is ToastType {
    return value !== null && value in TOAST_CONFIG;
}

function HomeToast() {
    const toastType = useSearchParams().get("toastType");
    
    const removeUrlParam = () => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete("toastType");
        const newUrl = `${window.location.pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;
        window.history.replaceState({}, "", newUrl);
    };

    useEffect(() => {
        if(isToastType(toastType)){
            toast.success(TOAST_CONFIG[toastType].title,{
               description: TOAST_CONFIG[toastType].description,
            });

            removeUrlParam();
        }
    }, [toastType]);

    return null;
}

export default HomeToast;