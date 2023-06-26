export const container = {
    hidden: {opacity:0}, 
    show: {
        opacity: 1, 
        transition: {
            delayChildren: 0.8, 
            staggerChildren: 0.2, 
        }, 
    }, 
};

export const items = {
    hidden: {opacity:0}, 
    show: {
        opacity:1, 
        transition: {
            duration: 0.5,
        }
    }
};