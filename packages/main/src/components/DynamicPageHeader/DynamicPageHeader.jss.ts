import { ThemingParameters } from '@ui5/webcomponents-react-base';
import {
  sapUiResponsiveContentPadding,
  sapUiTinyMarginBegin,
  sapUiTinyMarginBeginEnd
} from '@ui5/webcomponents-react-base/lib/spacing';

export const DynamicPageHeaderStyles = {
  container: {
    ...sapUiResponsiveContentPadding,
    backgroundColor: ThemingParameters.sapObjectHeader_Background,
    solid: ThemingParameters.sapObjectHeader_Background,
    translucent: ThemingParameters.sapObjectHeader_Background,
    transparent: 'transparent',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  headerContent: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }
};
