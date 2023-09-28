
import { Link, useNavigate } from "react-router-dom";
import Pagelayout from "../components/Pagelayout";
import TextFields from "../components/TextField/TextField";
import * as yup from "yup";
import { useFormik } from "formik";


function Register() {
    const navigate = useNavigate();
    const validationSchema = yup.object({
        firstname: yup.string().required("Chưa nhập first name"),
        lastname: yup.string().required("Chưa nhập last name"),
        email: yup
            .string()
            .required("Chưa nhập email")
            .email("Chưa nhập đúng định dạng email"),
        password: yup
            .string()
            .required("Chưa nhập password")
            .min(6, "Mật khẩu tối thiểu 6 ký tự"),
         cpassword: yup
            .string()
            .required("Chưa nhập confirm password")
            .oneOf([yup.ref('password')], "Mat khẩu không trùng khớp"),
    });
    // eslint-disable-next-line no-undef, no-unused-vars
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("Đăng ký thành công");
            navigate('/login')
            console.log(values);
        },

    });
    return (
        <Pagelayout>
            <div className="flex flex-wrap content-center justify-center w-full min-h-screen py-10 bg-gray-200">
                <div className="flex w-full xl:w-3/4 lg:w-11/12">
                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&webp=true&resize=300,272')]" />
                    <div className="w-full p-5 bg-white rounded-lg lg:w-7/12 lg:rounded-l-none">
                        <h3 className="pt-4 text-center text-2x1">Create an Account!</h3>
                        <form
                            onSubmit={formik.handleSubmit}
                            className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="flex gap-5 mb-3">
                                <TextFields
                                    name="First Name"
                                    type="text"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    required={true}
                                    helperText={
                                        formik.touched.firstname && formik.errors.firstname
                                    }
                                    error={
                                        formik.touched.firstname && Boolean(formik.errors.firstname)
                                    }
                                    width="200px"
                                />

                                <TextFields
                                    name="Last Name"
                                    type="text"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    required={true}
                                    helperText={formik.touched.lastname && formik.errors.lastname}
                                    error={
                                        formik.touched.lastname && Boolean(formik.errors.lastname)
                                    }
                                    width="200px"
                                />
                            </div>

                            <TextFields
                                name="Email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange("email")}
                                required={true}
                                helperText={formik.touched.email && formik.errors.email}
                                error={
                                    formik.touched.email && Boolean(formik.errors.email)
                                }
                                width="420px"
                            />

                            <TextFields name="Password" /> I
                            <TextFields name="Confirm Password"
                                type="password"
                                value={formik.values.cpassword}
                                onChange={formik.handleChange("cpassword")}
                                required={true}
                                helperText={formik.touched.cpassword && formik.errors.cpassword}
                                error={
                                    formik.touched.cpassword && Boolean(formik.errors.cpassword)
                                }
                                width="420px"
                            />
                            <div className="my-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full Ohover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    to="/login"
                                >
                                    Already have an account? Login!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Pagelayout>
    );
}

export default Register;