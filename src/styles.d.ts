// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For LESS
declare module "*.module.less" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// For useSelector
import {DefaultRootState} from "react-redux"
import {RootState} from './store/Store'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}