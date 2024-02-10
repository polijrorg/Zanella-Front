import React, { createContext, useState, ReactNode, useEffect } from 'react';


export type UserContextType = {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  age?: string;
  setAge?: React.Dispatch<React.SetStateAction<string>>;
  parental?: string;
  setParental?: React.Dispatch<React.SetStateAction<string>>;
  phone?: string;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;
};

type UserProviderType = {
    children: ReactNode;
};

export const UserContext = createContext<UserContextType>(
    {} as UserContextType
  );

const UserContextProvider = ({
  children,
}: UserProviderType): React.ReactElement => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [parental, setParental] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  return (
    <UserContext.Provider value={{ name, setName, age, setAge, parental, setParental, phone, setPhone, email, setEmail, password, setPassword }}>
      {children} 
    </UserContext.Provider>
    )
};

export default UserContextProvider;