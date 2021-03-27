import { createContext, useContext, useState } from 'react';

export const FaveContext = createContext();

export const FaveProvider = ({ children }) => {
  const [faves, setFaves] = useState([]);

  const handleFaves = (id) => (e) => {
    e.stopPropagation();
    if (faves.includes(id)) {
      const newFaves = faves.filter((f) => f !== id);
      return setFaves(newFaves);
    }

    if (faves.length === 5) {
      return alert('Voce nao pode adicionar mais favoritos');
    }
    return setFaves((state) => [...state, id]);
  };

  const isFave = (id) => () => (faves.includes(id) ? true : false);

  const faveContext = { faves, setFaves, handleFaves, isFave };

  return (
    <FaveContext.Provider value={faveContext}>{children}</FaveContext.Provider>
  );
};

export const { Consumer } = FaveContext;

export const useFave = () => {
  const context = useContext(FaveContext);
  if (context === undefined) {
    throw new Error('useFave deve ser usado dentro de um consumer');
  }
  return context;
};
