import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import { v4 as uuid } from 'uuid';
import { ToastContainer } from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  title: string
  description?: string
  type?: 'success' | 'error' | 'info'
}
interface ToastContextData {
 addToast(message: Omit<ToastMessage, 'id'>): void
 removeToast(id: string): void
}

const ToastContext = createContext({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ title, description, type }: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
    };

    setMessages((state) => [...state, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used withing an ToastProvider');
  }

  return context;
}

export { useToast, ToastProvider };
