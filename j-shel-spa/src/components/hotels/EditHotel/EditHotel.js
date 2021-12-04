import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router";
import useAuthInfo from "../../../hooks/useAuthInfo";

import HotelForm from "../hotelToolsComponents/HotelForm/HotelForm";
import { validateHotelData } from "../../../services/validate/HotelValidateService";
import { getDetails } from "../../../services/hotelService";
import { editHotel } from "../../../services/hotelService";

import isAuth from "../../../hoc/isAuth";

const EditHotel = () => {
    const {user} = useAuthInfo();
    const id = useParams().hotelId;
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

    useEffect(() => {
        getDetails(id)
            .then(data => {
                if(data.owner_id !== user.userId){
                    navigate(`/home`);
                }
            
                setFormData({...data, isPublic: data.public})
            })
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        try {
            validateHotelData(formData);
            editHotel(formData, id, user.sessionToken)
                .then(res => {
                    navigate(`/details/${id}`);
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
            type="edit"
            data={formData}
            setData={setFormData}
            onSubmitHandler={onSubmitHandler}
            errorArr={errorArr}
        />
    )
}

export default isAuth(EditHotel);