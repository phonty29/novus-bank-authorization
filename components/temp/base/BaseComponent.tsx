import styles from './BaseComponent.module.css';

export interface IBaseComponent {
  sampleTextProp: string;
  backgroundColor: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ sampleTextProp, backgroundColor }) => {
  return <div className={styles.container} style={{backgroundColor: `${backgroundColor}`}}>{sampleTextProp}</div>;
};

export default BaseComponent;