import React, {ButtonHTMLAttributes, FC} from 'react'
import classes from './Button.module.scss'
import classnames from 'classnames'

type Props = {
  className?: string
  theme?: 'primary' | 'secondary' | 'third'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({
                             className,
                             theme = 'primary',
                             ...restProps
                           }) => {
  let themeClassName

  if (theme === 'primary') {
    themeClassName = classes.primary
  } else if (theme === 'secondary') {
    themeClassName = classes.secondary
  } else if (theme === 'third') {
    themeClassName = classes.third
  }

  return (
    <button
      className={classnames(classes.root, themeClassName, className, {
        [classes.disabled]: restProps.disabled
      })}
      {...restProps}
    />
  )
}

export default Button