import Modal from "react-modal"; 
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasanctionModalOpen, setIsNewTrasanctionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsNewTrasanctionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTrasanctionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNemTransactionModal={handleOpenTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTrasanctionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
      />
      
      <GlobalStyle />
    </>
  );
};
