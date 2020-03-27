import React from 'react'
import { CustomButtonContainer } from './button-shoprrr.styles'
 
const CustomButtonn = ({children, ...rest}) => {
    return (
        <CustomButtonContainer {...rest}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButtonn