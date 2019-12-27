import { createMuiTheme } from '@material-ui/core/styles';

// TODO: redistribute the colors to form the intended palette;
// could use a comment to say what use has each color OR rename the brandColors keys to be more descriptive
const brandColors = {
    primary: '#00ADB5',
    secondary: '#A5D5D7',
    brandDark: '#F16623',
    anotherGray: '#7A7978',
    darkPaper: '#929292',
    paper: '#EEEEEE',
    inputBorder: '#80BDFF',
    success: '#1BB99A',
    successDark: 'rgba(27, 185, 154, 1)',
    error: '#FF5D48',
    info: '#90FFDC',
    rightAnswer: '#0CCC5F',
    wrongAnswer: '#EF4E63',
    darkTitle: '#2f4a70',
};

// our custom theme
// docs can be found here: https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
    palette: {
        common: {
            darkPaper: brandColors.darkPaper,
            darkTitle: brandColors.darkTitle,
            anotherGray: brandColors.anotherGray,
        },
        primary: {
            main: brandColors.primary,
        },
        secondary: {
            main: brandColors.secondary,
        },
        right: {
            main: brandColors.rightAnswer,
        },
        wrong: {
            main: brandColors.wrongAnswer,
        },
        error: {
            main: brandColors.error,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    overrides: {
        // WARN: this is work in progress, we'll decide what we want to do with these together
        MuiOutlinedInput: {
            input: {
                padding: '10px 12px',
            },
            root: {
                borderRadius: 4,
                // '&$focused $notchedOutline': {
                //   borderColor: brandColors.info
                // }
            },
        },
        MuiCircularProgress: {
            root: {
                marginRight: 8
            }
        },
        MuiButton: {
            root: {
                borderRadius: 15,
                textTransform: 'none',
                fontSize: 18,
            },
            contained: {
                fontWeight: 'bolder',
                textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
                boxShadow: '0px 3px 6px rgba(0,0,0,0.16)'
            },
            containedPrimary: {
                color: '#fff'
            },
            label: {
                fontFamily: 'Lato'
            }
        },
        MuiTab: {
            wrapper: {
                fontFamily: 'Lato'
            }
        },
        MuiInputLabel: {
            root: {
                fontFamily: 'Lato',
                fontWeight: '18px',
                color: '#EEEEEE',
                textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
                '&$focused': {
                    color: '#fff',
                },
            },
            outlined: {
                transform: 'translate(13px, 12px) scale(1)',
                // '&$shrink': {
                //   transform: 'translate(23px, 5px) scale(0.75)',
                // },
            },
        },
        MuiFormControl: {
            root: {
                marginBottom: 16,
                display: 'block',
            }
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#fff',
                },
            },
        },
        MuiInput: {
            underline: {
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottomColor: '#fff',
                },
                '&:after': {
                    borderBottomColor: '#fff',
                },
                '&:before': {
                    borderBottomColor: brandColors.anotherGray,
                }
            }
        },
    }
});

export const globalStyles = {
    '@global': {
        body: {
            fontStyle: 100
        },
        '#root': {
            height: '100vh'
        },
        '*, *:before, *:after': {
            boxSizing: 'border-box'
        },
        'a, a:hover, a:visited, a:active, a:focus': {
            textDecoration: 'none',
            color: theme.palette.common.white
        },
        ':focus': {
            outline: 'none'
        },

        /* width */
        '::-webkit-scrollbar': {
            width: 10,
            height: 10
        },

        /* Track */
        '::-webkit-scrollbar-track': {
            opacity: 0
        },

        /* Handle */
        '::-webkit-scrollbar-thumb': {
            opacity: 0.1,
            borderRadius: 5,
            background: 'rgba(119, 119, 119, 0.3)'
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(119, 119, 119, 1)',
            opacity: 1
        }
    }
};

export default theme;