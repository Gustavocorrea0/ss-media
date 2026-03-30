import { fireEvent, render } from '@testing-library/react-native';
import CustomButton from "./buttonComponent";

describe("group testing of the custom button", () => {

    test("title rendering test if loading is false", () => {
        const functionMock = jest.fn();
        const { getByText } = render( 
                <CustomButton 
                    onPress={functionMock} 
                    width={"80%"} 
                    height={"9.5%"} 
                    marginTop={"10%"} 
                    loading={false} 
                    loadingTextTrue={"Carregando..."}  
                    loadingTextFalse={"Entrar"} 
                /> 
        );
        expect(getByText("Entrar")).toBeTruthy();
    });

    it("title rendering test if loading is true", () => {
        const functionMock = jest.fn();
        const { getByText } = render( 
                <CustomButton 
                    onPress={functionMock} 
                    width={"80%"} 
                    height={"9.5%"} 
                    marginTop={"10%"} 
                    loading={true} 
                    loadingTextTrue={"Carregando..."}  
                    loadingTextFalse={"Entrar"} 
                /> 
        );
        expect(getByText("Carregando...")).toBeTruthy();
    });

    it("test the click on the button to execute the foundation", () => {
        const functionMock = jest.fn();
        const { getByText, getByTestId } = render( 
                <CustomButton 
                    onPress={functionMock} 
                    width={"80%"} 
                    height={"9.5%"} 
                    marginTop={"10%"} 
                    loading={false} 
                    loadingTextTrue={"Carregando..."}  
                    loadingTextFalse={"Entrar"} 
                /> 
        );
        expect(getByText("Entrar")).toBeTruthy();
        fireEvent.press(getByTestId("custom-button-test"))
    });

})