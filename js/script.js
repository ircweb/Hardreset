function copyEmailHardReset() {
        const email = "hardreset015@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const toast = document.getElementById("copy-toast");
            toast.classList.replace("opacity-0", "opacity-100");
            setTimeout(() => {
                toast.classList.replace("opacity-100", "opacity-0");
            }, 2000);
        });
    }