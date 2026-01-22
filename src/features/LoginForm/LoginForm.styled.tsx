import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  width: 360px;
  padding: 32px;

  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: var(--text-main-second);
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: var(--text-muted);
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: var(--radius-sm);

  border: 1px solid #e5e7eb;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: var(--danger);
`;

export const SubmitButton = styled.button<{ disabled?: boolean }>`
  margin-top: 8px;
  padding: 12px;

  border-radius: 999px;
  border: none;

  background: ${({ disabled }) =>
    disabled ? 'var(--accent-soft)' : 'var(--accent)'};

  color: ${({ disabled }) =>
    disabled ? 'var(--text-muted)' : "var(--text-main)"};

  font-weight: 500;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'};

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px var(--shadow-viol);
    }
  `}
`;
