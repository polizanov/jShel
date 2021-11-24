import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router";

import HotelForm from "../hotelToolsComponents/HotelForm/HotelForm";
import { validateHotelData } from "../../../services/validate/HotelValidateService";
import { getDetails } from "../../../services/hotelService";
import { editHotel } from "../../../services/hotelService";

const EditHotel = () => {
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
                setFormData({...data, isPublic: data.public})
            })
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        try {
            validateHotelData(formData);
            console.log(formData)
            editHotel(formData, id)
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

export default EditHotel;