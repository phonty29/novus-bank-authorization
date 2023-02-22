import { useState } from 'react';
import FooterModal from './modal/FooterModal';
import footerLinks from './utils/footerLinks.json';

export interface IFooter extends React.ComponentPropsWithoutRef<'div'> {
  fontColor?: string;
}

export interface IModalContent {
  title: string;
  text: string;
}

const Footer: React.FC<IFooter> = ({
  fontColor = 'text-black'
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [content, setContent] = useState<IModalContent>({title: "", text: ""})
  const handleOpen = (content: IModalContent) => {
    return () => {
      setOpen(true);
      setContent(content);
    }
  };
  const handleClose = () => {
    return () => {
      setOpen(false);
      setContent({title: "", text: ""});
    };
  }
  return (
    <div className={`footer ${fontColor}`}>
      <small className="footer-copyright">
        © All Rights Reserved. HCL Technologies
      </small>
      <ul className="footer-links">
        {footerLinks.map((link, index) => {
          return (
            <li className="footer-link" key={index}>
              <button onClick={handleOpen({title: link.title, text: link.text})}>
                {link.title}
              </button>
            </li>
          );
        })}
        <FooterModal open={open} content={content} handleClose={handleClose}/>
      </ul>
    </div>
  );
};

export default Footer;
