import React, { SetStateAction } from 'react';

export interface LoginProps {
  setAccess: React.Dispatch<SetStateAction<string>>;
}

export interface LoginSendData {
  username: string;
  password: string;
}