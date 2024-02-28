'use client'

import { Button } from 'react-bootstrap'
import { type ButtonProps } from '@/app/types/types'

export function CustomButton (props: ButtonProps): JSX.Element {
  return (
    <>
      <Button type={props.type} className={props.className} onClick={() => { props.onClick() }} variant={props.variant}> {props.text} </Button>{' '}
    </>
  )
}
