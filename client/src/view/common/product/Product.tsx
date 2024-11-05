import {Component} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
    isButtonDisabled: boolean
    isImagePopupOpen: boolean;

}

export class Product extends Component <ProductProps,ProductState>{

    constructor(props:ProductProps) {
        super(props);
        this.state={
            isActive:false,
            isButtonDisabled: false,
            isImagePopupOpen: false,
        }
    }

    render() {

        const buttonText = this.state.isButtonDisabled ? 'Login Account' : 'By Now';

        const buttonStyle = {
            backgroundColor: this.state.isButtonDisabled ? 'gray' : 'bg-blue-500',
            color: 'white',
            fontWeight: 'bold',
            padding: '10px',
            borderRadius: '5px',
            cursor: this.state.isButtonDisabled ? 'not-allowed' : 'pointer',
        };

        const {data}= this.props;
        //const image=require(`../../../images/${data.image}`);

        return (

                <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40
                    max-w-sm">
                    <div className="relative">
                        <img
                            className="w-full cursor-pointer"
                            src={data.image}
                            alt="Product Image"
                            onClick={this.openImagePopup}
                        />
                        <div
                            className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm
                            font-medium">{data.room}
                        </div>
                    </div>
                    <div className="p-4">


                        <div className="flex items-baseline">
                            <h3 className="text-lg font-medium mb-2">{data.title}</h3>
                            {/*<span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full
                                uppercase font-semibold tracking-wide ml-2">New</span>*/}
                            <div className="ml-16 text-green-600 text-xs uppercase font-semibold tracking-wide">
                                {data.roomCount}
                            </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">{data.description}</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">${data.price}</span>
                            <button id="homeButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
                            px-4 rounded" onClick={this.onSendButtonClick} disabled={this.state.isButtonDisabled}
                                    style={buttonStyle}>
                                {/*Buy Now*/}
                                {buttonText}
                                <ToastContainer/>
                            </button>
                        </div>
                    </div>
                    {this.state.isImagePopupOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                            <img
                                className="max-w-full max-h-full"
                                src={data.image}
                                alt="Popup Image"
                                onClick={this.closeImagePopup}
                            />
                        </div>
                    )}
                </div>


        );

    /*    function coverToBase64(file: any) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = (error) => {
                    reject(error);
                };
            });
        }*/

    }

    private openImagePopup = () => {
        this.setState({ isImagePopupOpen: true });
    };

    private closeImagePopup = () => {
        this.setState({ isImagePopupOpen: false });
    };
    private onSendButtonClick =() => {


        toast('🦄You Have Login  Account Disable Button!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        this.setState({isButtonDisabled:false
        });


        setInterval(() => {
            this.setState({ isButtonDisabled: true });
        }, 1000);

        /*setTimeout(() => {
            this.setState({ isButtonDisabled: false });
        }, 5000);*/



    }
}
