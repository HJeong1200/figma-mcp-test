import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  size?: "xs" | "s" | "m" | "l";
}

const sizeStyles = {
  xs: `width: 320px; min-width: 0; padding: 20px 0;`,
  s: `width: 400px; min-width: 0; padding: 28px 0;`,
  m: `width: 520px; min-width: 0; padding: 32px 0;`,
  l: `width: 720px; min-width: 0; padding: 40px 0;`,
};

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 12px 60px 0px rgba(0, 0, 0, 0.15),
    0px 16px 64px 0px rgba(0, 0, 85, 0.02),
    0px 16px 36px -20px rgba(0, 6, 46, 0.2);
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  ${({ size = "m" }) => sizeStyles[size]}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 32px;
`;

export const Title = styled.div`
  font-family: "SF Pro", "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25em;
  color: #1c2024;
  text-align: left;
`;

export const Description = styled.div`
  font-family: "SF Pro", "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #1c2024;
  text-align: left;
`;

export const Slot = styled.div`
  margin: 0 32px;
  border: 1px dashed #3e63dd;
  border-radius: 8px;
  background: #fff;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
`;

export const Button = styled.button<{ variant?: "cancel" | "action" }>`
  border: none;
  border-radius: 6px;
  font-family: "SF Pro", "Inter", sans-serif;
  font-size: 16px;
  font-weight: 510;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  transition: background 0.15s;
  background: ${({ variant }) =>
    variant === "action" ? "#E5484D" : "rgba(0, 0, 51, 0.06)"};
  color: ${({ variant }) => (variant === "action" ? "#fff" : "#60646C")};
  &:hover {
    background: ${({ variant }) =>
      variant === "action" ? "#c13b3f" : "rgba(0, 0, 51, 0.12)"};
  }
`;
