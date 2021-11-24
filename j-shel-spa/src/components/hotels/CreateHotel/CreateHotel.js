import { useState } from "react";
import { useNavigate } from "react-router";

import HotelForm from "../hotelToolsComponents/HotelForm/HotelForm";
import { validateHotelData } from "../../../services/validate/HotelValidateService";
import { createHotel } from "../../../services/hotelService"

const CreateHotel = () => {
    const navigate = useNavigate();
    const [errorArr, setErrorArr] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        imageUrl: "",
        description: "",
        town: "",
        stars: 1,
        address: "",
        isPublic: false
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();

        try {
            validateHotelData(formData);

            createHotel(formData)
                .then(res => {
                    navigate("/home");
                })
                .catch(err => {
                    setErrorArr([err.message]);
                })
                
        } catch (err) {
            setErrorArr(err.messages);
            setFormData({
                name: err.name,
                imageUrl: err.imageUrl,
                description: err.description,
                town: err.town,
                stars: err.stars,
                address: err.address,
                isPublic: false
            })
        }

    }


    return (
        <HotelForm
            type="create"
            data={formData}
            setData={setFormData}
            onSubmitHandler={onSubmitHandler}
            errorArr={errorArr}
        />
    )
}

export default CreateHotel;