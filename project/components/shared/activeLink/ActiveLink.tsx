
import React, { Children } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface ActiveLinkPropsType {
    [x: string]: any;
    children: any;
}

const ActiveLink: React.FC<ActiveLinkPropsType> = ({children, ...props}) => {
  const router = useRouter();
  const child = Children.only(children);
  let className = child.props.className || '';

  if (router.asPath === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`
  }

  delete props.activeClassName;

  return <Link href={''} {...props}>{React.cloneElement(child, {className})}</Link>
}

export default ActiveLink;
