import styles from './Overlay.module.scss';

export default function Overlay({ color = '#000000', opacity = 30, gradient }) {
  const getOverlayStyle = () => {
    if (!gradient)
      return {
        backgroundColor: color,
        opacity: `${opacity}%`,
      };

    return { backgroundImage: gradient };
  };

  return <div className={styles.overlay} style={getOverlayStyle()} />;
}
