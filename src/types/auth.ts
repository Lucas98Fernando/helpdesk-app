import { ImageSourcePropType } from 'react-native';

export type AuthLayoutProps = {
  imageURI: ImageSourcePropType;
  textFooter?: string;
  textFooterAction?: string;
  routeToNavigate: string;
  routeParams?: Record<string, any>;
};
