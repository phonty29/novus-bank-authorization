import footerLinks from './footerLinks.json';

export interface IFooter extends React.ComponentPropsWithoutRef<'div'> {
  fontColor?: string;
}

const Footer: React.FC<IFooter> = ({
  fontColor = 'black'
}) => {
  return (
    <footer className={`footer text-${fontColor}`}>
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
    </footer>
  );
};

export default Footer;
