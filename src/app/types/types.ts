export type ButtonProps = {   
        variant?: string
        text?: string
        onClick: () => void
        className?: string,
        type?: "button" | "submit" | "reset" | undefined 
}

