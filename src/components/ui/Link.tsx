import * as React from 'react';

const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ children, href, ...props }, ref) => (
    <a href={href} ref={ref} {...props}>
      {children}
    </a>
  ),
);

export { Link };