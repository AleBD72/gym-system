import { MembershipValidate } from "../../utils/validateForms";
import { useFormik } from "formik";
import styles, { layout } from "../../style";
import { TextInput, Button, ComboBox } from "../index"
import { membershipsImage } from "../../assets";
import { MembershipType } from "../../constants";
import { useState } from "react";


const initialValues = {
    name: '',
    value: '',
    type: '',
    description: '',
}

const MembershipsForm = () => {
    const [membership, setMembership] = useState('');

    const onSubmit = async (values) => {
        console.log(values)
    }

    const { handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema: MembershipValidate,
    })

    return (
        <div className={`${layout.section} items-center justify-around translate-y-12 bg-principalCol`}>
            <div className=" m-2">
                <p className={styles.paragraph}>Bienvenido! Aquí puedes modificar la información de membresías </p>

                <form onSubmit={handleSubmit}>
                    <TextInput label="Nombre de la membresía" placeholder="Ingrese el nombre" className="md:mt-20 mt-6" name='name' onChange={handleChange} />
                    <small className='text-red-500 font-poppins'>{errors?.name}</small>
                    <TextInput label="Precio de membresía" placeholder="Ingrese el precio de la membresía" className="mt-2" name='value' onChange={handleChange} type="number" />
                    <small className='text-red-500 font-poppins'>{errors?.value}</small>
                    <ComboBox label='Tipo de mebresía' options={MembershipType} selectedOption={membership} onSelect={(selected) => (setMembership(selected))} placeholder="Seleccione el tipo de mebresía..." name='type' setFieldValue={handleChange} />
                    <small className='text-red-500 font-poppins'>{errors?.genre}</small>
                    <TextInput label="Descripción" placeholder="Ingrese una descripción de la membresía " className="mt-2" name='description' onChange={handleChange} />
                    <small className='text-red-500 font-poppins'>{errors?.description}</small>


                    <Button label={"Modificar Membresía"} type="submit" styles="text-center w-full bg-secondaryCol mt-5" />
                </form>
            </div>
            <div className="flex justify-center items-center m-5">
                <img src={membershipsImage} alt="imageMemberships" />
            </div>
        </div>
    )
}

export default MembershipsForm