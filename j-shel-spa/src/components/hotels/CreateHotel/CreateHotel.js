import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthInfo from "../../../hooks/useAuthInfo";

import HotelForm from "../hotelToolsComponents/HotelForm/HotelForm";
import isAuth from "../../../hoc/isAuth";
import { validateHotelData } from "../../../services/validate/HotelValidateService";
import { createHotel } from "../../../services/hotelService";

const CreateHotel = () => {
    const navigate = useNavigate();
    const {user} = useAuthInfo();
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

            createHotel(formData, user.sessionToken)
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

export default isAuth(CreateHotel);