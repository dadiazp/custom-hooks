import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // Cada componente que use este hook estará ligado a los states o effects declarados en él. Ojo, cada estado será una instancia diferente, estos no se comparten
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
