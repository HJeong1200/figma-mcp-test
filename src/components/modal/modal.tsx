import React from "react";
import {
  Backdrop,
  Container,
  TextContainer,
  Title,
  Description,
  Slot,
  ButtonContainer,
  Button,
} from "./styled";

type ModalSize = "xs" | "s" | "m" | "l";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onCancel: () => void;
  onAction: () => void;
  actionLabel?: string;
  cancelLabel?: string;
  size?: ModalSize;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  description,
  onCancel,
  onAction,
  actionLabel = "",
  cancelLabel = "Cancel",
  size = "m",
  children,
}) => {
  if (!open) return null;

  return (
    <Backdrop>
      <Container size={size}>
        <TextContainer>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </TextContainer>
        {children && <Slot>{children}</Slot>}
        <ButtonContainer>
          <Button variant="cancel" onClick={onCancel}>
            {cancelLabel}
          </Button>
          {actionLabel && (
            <Button variant="action" onClick={onAction}>
              {actionLabel}
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </Backdrop>
  );
};

export default Modal;
