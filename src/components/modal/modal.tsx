import React from "react";
import {
  Backdrop,
  Container,
  TextContainer,
  Title,
  Description,
  Slot,
  ButtonContainer,
} from "./styled";
import Button from "../button/Button";

type ModalSize = "xs" | "s" | "m" | "l";

import type { ButtonVariant } from "../button/Button";

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
  buttonStyle?: {
    action?: ButtonVariant;
    cancel?: ButtonVariant;
  };
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
  buttonStyle,
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
          <Button
            variant={buttonStyle?.cancel || "secondary"}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
          {actionLabel && (
            <Button
              variant={buttonStyle?.action || "primary"}
              onClick={onAction}
            >
              {actionLabel}
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </Backdrop>
  );
};

export default Modal;
