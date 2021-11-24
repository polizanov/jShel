import HotelForm from "../hotelToolsComponents/HotelForm/HotelForm";
import { useState } from "react";

const CreateHotel = () => {
    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        description: "",
        town: "",
        stars: 0,
        address: "",
        public: false
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }


    return (
        <HotelForm 
        type="create" 
        data={formData} 
        setData={setFormData} 
        onSubmitHandler={onSubmitHandler} 
        />
    )
}

export default CreateHotel;