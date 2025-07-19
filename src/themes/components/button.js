export const buttonStyled = {
        variants: {
            primary: {
                bg: "primary",
                color: "white",
                width: "100%",
                border: "1px solid primary",
                borderRadius: "8px",
                height: "3rem",
                _hover: {
                    bg: "primary.50",
                    boxShadow: "md",
                },
            },
        },
        defaultProps: {
            variant: "primary"
        }
    }