import footerLinks from './footerLinks.json';

export interface IFooter extends React.ComponentPropsWithoutRef<'div'> {
  fontColor?: string;
}

const Footer: React.FC<IFooter> = ({
  fontColor = 'text-black'
}) => {
  return (
    <div className={`footer ${fontColor}`}>
      <small className="footer-copyright">
        © All Rights Reserved. HCL Technologies
      </small>
      <ul className="footer-links">
        {footerLinks.map((link, index) => {
          return (
            <li className="footer-link" key={index}>
              <a href={link.href}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
