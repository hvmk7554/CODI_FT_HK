
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import Pagelayout from "../../components/Pagelayout";
import CartItem from "../Cart/CartItem";
import { decrease, increase, removeCart } from "../../rtk/slices/cartSlice";
import { useNavigate } from "react-router";
import TextFields from "../../components/Textfield/Textfield";
import { useEffect, useState } from "react";
import SingleSelect from "../../components/Dropdown/SingleSelect";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

import { apiGetPublicDistricts, apiGetPublicProvinces, apiGetPublicWards } from "../../services/apiLocation";

import moment from "moment";
import { notification } from "../../utils/helper";

function Checkout() {
    const [email, setEmail] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    console.log(provinces)
    const { cartList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userEmail = JSON.parse(localStorage.getItem("userInfor")).email;
    const history = JSON.parse(localStorage.getItem("history")) ?? []


    const [formState, setFormState] = useState(
        {
            province: 0,
            district: 0,
            ward: 0
        }
    )
    const handleIncrease = (item) => {
        dispatch(increase(item));
    };

    const handleDecrease = (item) => {
        if (item.quantity <= 1) {
            dispatch(removeCart(item));
        } else {
            dispatch(decrease(item));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeCart(item));
    };


    const totalPrice = cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);


    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            console.log(response)
            if (response.status === 200) {
                setProvinces(response?.data.results);
            }
        };
        fetchPublicProvince();

    }, [])

    useEffect(() => {
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistricts(formState.province);
            if (response.status === 200) {
                setDistricts(response?.data.results);
            }
        };
        formState.province !== 0 && fetchPublicDistrict();
    }, [formState.province])

    useEffect(() => {
        const fetchPublicWard = async () => {
            const response = await apiGetPublicWards(formState.district);
            if (response.status === 200) {
                setWards(response?.data.results);
            }
        };
        formState.district !== 0 && fetchPublicWard();
    }, [formState.district])



    const convertDataProvince = (array) => {
        const ProvinceList = array.map((item) => ({
            value: item.province_id,
            label: item.province_name,
        }));
        return ProvinceList;
    };

    const convertDataDistrict = (array) => {
        const DistrictList = array.map((item) => ({
            value: item.district_id,
            label: item.district_name,
        }));
        return DistrictList;
    };

    const convertDataWard = (array) => {
        const WardList = array.map((item) => ({
            value: item.ward_id,
            label: item.ward_name,
        }));
        return WardList;
    };

    console.log(convertDataProvince(provinces))
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = yup.object({
        email: yup.string().required("Plesse enter email").email("invalid email"),
        firstname: yup.string().required("Plesse enter first name"),
        lastname: yup.string().required("Please enter Last name"),
        address: yup.string().required("Please enter address"),
        phone: yup.string().required("Please enter phone").matches(phoneRegExp, 'Phone number is invalid').min(10, "tooshort").max(10, "toolong")
    });

    const randomId = () => {
        return Math.floor(Math.random()*99999)
}

    const formik = useFormik({
        initialValues: {
            email: userEmail,
            firstname: "",
            lastname: "",
            address: "",
            phone: ""
        },

    


        validationSchema: validationSchema,

        onSubmit: (values) => {
            const newData = {
                id:randomId(),
                email: values.email,
                firstname: values.firstname,
                lastname: values.lastname,
                province: formState.province,
                district: formState.district,
                ward: formState.ward,
                address: values.address,
                phone: values.phone,
                cart: [...cartList],
                totalPrice: totalPrice,
                dataplaced: moment()
            }

            notification("Thanh toán thành công");
            localStorage.setItem("history", JSON.stringify([...history,newData]));

            localStorage.removeItem("cart")
            navigate("/")
            window.location.reload()
        },
    });

    return (
        <Pagelayout>
            {cartList.length === 0 && navigate("/")}
            <form
                onSubmit={formik.handleSubmit}
                className="mt-20 flex mx-auto max-w-2x1 px-4 sm:px-6 lg:max-w-7x1 lg:px-8 h-auto"> <div className="w-3/5 bg-red-100 p-5">
                    <p className="font-semibold text-base">Contact Information</p>
                    <TextFields name="Email address"
                        type="email"
                        required={true}
                        width="600px"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        helperText={
                            formik.touched.email && formik.errors.email
                        }
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                    />
                    <p className="font-semibold text-base mt-5">Shipping Information</p>

                    <div className="flex gap-5">
                        <TextFields
                            name="First Name"
                            required={true}
                            width="290px"
                            value={formik.values.firstname}
                            onChange={formik.handleChange("firstname")}
                            helperText={
                                formik.touched.firstname && formik.errors.firstname
                            }
                            error={
                                formik.touched.firstname && Boolean(formik.errors.firstname)
                            }
                        />

                        <TextFields
                            name="Last Name"
                            required={true}
                            width="290px"
                            value={formik.values.lastname}
                            onChange={formik.handleChange("lastname")}
                            helperText={
                                formik.touched.lastname && formik.errors.lastname
                            }
                            error={
                                formik.touched.lastname && Boolean(formik.errors.lastname)
                            }
                        />
                    </div>

                    <div className="flex gap-5">
                        <SingleSelect
                            name="Province/City"
                            width="200px"
                            options={convertDataProvince(provinces)}
                            required={true}
                            value={formState.province}
                            onChange={(e) => setFormState({ ...formState, province: e.target.value })}
                        />

                        <SingleSelect
                            name="District"
                            width="290px"
                            options={convertDataDistrict(districts)}
                            required={true}
                            value={formState.district}
                            onChange={(e) => setFormState({ ...formState, district: e.target.value })}
                        />
                    </div>

                    <div className="flex gap-5">
                        <SingleSelect
                            name="Ward/Commune"
                            width="290px"
                            options={convertDataWard(wards)}
                            required={true}
                            value={formState.ward}
                            onChange={(e) => setFormState({ ...formState, ward: e.target.value })}
                        />
                    </div>

                    <TextFields
                        name="Address"
                        required={true}
                        width="600px"
                        value={formik.values.address}
                        onChange={formik.handleChange("address")}
                        helperText={
                            formik.touched.address && formik.errors.address
                        }
                        error={
                            formik.touched.address && Boolean(formik.errors.address)
                        }
                    />

                    <TextFields
                        name="Phone"
                        type="phone"
                        required={true}
                        width="600px"
                        value={formik.values.phone}
                        onChange={formik.handleChange("phone")}
                        helperText={
                            formik.touched.phone && formik.errors.phone
                        }
                        error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                        }
                    />
                </div>

                <div className="w-2/5 p-5">
                    <p className="font-semibold text-base">Order Sumary</p>
                    <div>
                        <div className="mt-5 rounded-1g">
                            {cartList.length > 0 && cartList.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    handleRemove={() => handleRemove(item)}
                                    handleIncrease={() => handleIncrease(item)}
                                    handleDecrease={() => handleDecrease(item)}
                                />
                            ))}
                            {cartList.length == 0 && (
                                <img src="../src/assets/empty_cart.jfif" alt="not-found" />
                            )}
                        </div>
                        <div className="p-2 font-semibold bg-white">
                            <div className="flex justify-between font-semibold">
                                <p className="font-medium">Subtotal</p>
                                <p>${totalPrice}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p className="font-medium">Shipping</p>
                                <p> $0 </p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </div>
                            <button
                                type="submit"
                                className="mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-900 px-2 py-1.5 rounded-md"
                            >
                                Confirm order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </Pagelayout>

    );
}

export default Checkout