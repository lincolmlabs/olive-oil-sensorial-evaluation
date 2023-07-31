import React, { SetStateAction } from 'react';

export interface LoginProps {
  setAccess: React.Dispatch<SetStateAction<string>>;
}

export interface LoginSendData {
  panel: string;
  username: string;
  password: string;
}