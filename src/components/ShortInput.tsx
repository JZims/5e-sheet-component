import { cva } from "class-variance-authority"


export const inputStyles = cva([], {
    variants:{
        location: {
            header: ["border-black", "border-solid border"],
            stat: [],
            modifier: []

        }, 
        
    }
}
)