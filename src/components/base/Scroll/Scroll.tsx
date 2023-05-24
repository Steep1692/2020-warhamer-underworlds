import React, {FC, HTMLAttributes} from 'react'
import classes from './Scroll.module.scss'
import classnames from 'classnames'

type Props = {
  className?: string
} & HTMLAttributes<HTMLDivElement>

const Scroll: FC<Props> = ({className, ...restProps}) => {
  return (
    <div
      className={classnames(classes.root, className)}
      {...restProps}
    />
  )
}

export default Scroll