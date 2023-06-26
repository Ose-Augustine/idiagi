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

export const itemsLeft = {
    hidden: {
        x: '100%',
        opacity:0, 
        transition:{
            duration:0.1
        }
    }, 
    show: {
        x: '0%',
        opacity:1,
        transition: {
            duration: 2,
        }
    }
};

export const itemsRight = {
    hidden: {
        x: '-100%',
        opacity:0, 
        transition:{
            duration:0.1
        }
    }, 
    show: {
        x: '0%',
        opacity:1,
        transition: {
            duration: 2,
        }
    }
};