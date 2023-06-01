import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export type InputTypeProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  type?: HTMLInputTypeAttribute;
  id: string;
  onClick: any
}