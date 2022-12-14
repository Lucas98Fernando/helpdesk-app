import { ImageSourcePropType } from 'react-native';

export type RecoverPassword = {
  email: string;
};

export type User = {
  email: string;
  password: string;
};

export type AuthLayoutProps = {
  imageURI: ImageSourcePropType;
  textFooter?: string;
  textFooterAction?: string;
  routeToNavigate: string;
  routeParams?: Record<string, any>;
};
