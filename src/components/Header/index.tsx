import { useState } from "react";
import logo from "../../assets/logo.svg";
import Modal from 'react-modal'

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNemTransactionModal: () => void;
}

export function Header({onOpenNemTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button 
          type='button' 
          onClick={onOpenNemTransactionModal}
        >
          Nova transação
        </button>

      </Content>
    </Container>
  );
};