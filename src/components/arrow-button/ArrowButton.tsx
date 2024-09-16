// ArrowButton.tsx
import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';


export type ArrowButtonProps = {
  onClick: () => void; 
  isOpen: boolean;      
};

export const ArrowButton = ({ onClick, isOpen }: ArrowButtonProps) => {
	return (
	  <div
		role="button"
		aria-label="Открыть/Закрыть форму параметров статьи"
		onClick={onClick} 
		tabIndex={0}
		className={styles.container}
		style={{ transform: isOpen ? 'translateX(616px)' : 'translateX(0)' }}  
	  >
		<img
		  src={arrow}
		  alt="иконка стрелочки"
		  className={`${styles.arrow} ${isOpen ? styles.arrow_open : ''}`}
		/>
	  </div>
	);
  };
  
