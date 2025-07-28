import { create } from 'storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'Nunito',

    brandTitle: 'Koum UI',
    brandImage: '/koum-ui-logo-horizontal.png',
    brandTarget: '_self',

    //
    colorPrimary: 'green',
    colorSecondary: '#6146ff',

    // UI
    appBg: '#f9fbff',
    appContentBg: 'white',
    appPreviewBg: 'white',
    appBorderColor: '#e5ecf8',
    appBorderRadius: 10,

    // Text colors
    // textColor: '#3d3d3d',
    // textInverseColor: 'blue',

    // Toolbar default and active colors
    // barTextColor: '#96a9ca',
    // barSelectedColor: 'red',
    // barHoverColor: 'yellow',
    // barBg: 'white',

    // Form colors
    // inputBg: '#ffffff',
    // inputBorder: '#10162F',
    // inputTextColor: '#10162F',
    inputBorderRadius: 10,
});
