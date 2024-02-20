"use client"

import { Button } from "react-bootstrap"
import { ButtonProps } from "@/app/types/types"

export function CustomButton(props: ButtonProps): JSX.Element {  
    return (
        <>
            <Button className={props.className} onClick={()=>{props.onClick()}} variant={props.variant}> {props.text } </Button>{' '}
        </>
    )
  }