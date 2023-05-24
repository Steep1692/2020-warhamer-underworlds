import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import classes from './Icons.module.scss'
import classnames from 'classnames'
import {makeImageIconUrl} from '../../utils/utils'

type ImageButtonProps = {
  size?: "tiny" | undefined
  srcDisabled?: string
  srcHover?: string
  srcDefault: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ImageButton: FC<ImageButtonProps> = ({
                                             size,
                                             srcDisabled,
                                             srcHover,
                                             srcDefault,
                                             className,
                                             ...restProps
                                           }) => {
  let sizeClassName = "";

  if (size === "tiny") {
    sizeClassName = classes.tiny
  }

  return (
    <button
      className={classnames(classes.root, className, sizeClassName)}
      style={{
        // @ts-ignore
        '--src-disabled': `url("${makeImageIconUrl(srcDisabled || srcDefault)}")`,
        '--src-hover': `url("${makeImageIconUrl(srcHover || srcDefault)}")`,
        '--src-default': `url("${makeImageIconUrl(srcDefault)}")`
      }}
      {...restProps}
    />
  )
}

export default ImageButton