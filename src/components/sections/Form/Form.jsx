import React, {useEffect} from 'react';
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Button";
import {FileUploadField} from "../../ui/FileUploadField";
import {Input} from "../../ui/Input";
import {RadioButtons} from "../../ui/RadioButtons";
import {useDispatch, useSelector} from "react-redux";
import {setIsSubmitting, setRole} from "../../../store/slices/form.slice";
import {submitForm} from "../../../store/actions/form";
import {fetchPositions} from '../../../store/actions/positions'
import successImage from '../../../img/success-image.svg'
import styles from './form.module.scss'

export const Form = () => {
    const {fields, isSubmitting} = useSelector((state) => state.form);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPositions())
    }, []);
    const handleClick = async () => {
        await submitForm(fields)
        dispatch(setIsSubmitting(true))
    };
    let isFormDisable = false;
    for (const [key, value] of Object.entries(fields)) {
        if (value.error !== '') {
            isFormDisable = true;
            break;
        }
    }
    if (isSubmitting) {
        return (
            <div className={styles.form}>
                <Heading> User successfully registered </Heading>
                <img src={successImage} alt="success-submit-form"/>
            </div>
        );
    }

    return (
        <div className={styles.form}>
            <div className={styles.section}>
                <Heading> Working with POST request </Heading>
                <Input value={fields.name} validateAt='name' placeHolder={'Your name'}/>
                <Input value={fields.email} validateAt='email' placeHolder={'Email'}/>
                <Input value={fields.phone} validateAt='phone' placeHolder={'Phone'}
                       helperText='+38 (XXX) XXX - XX - XX'/>
                <RadioButtons value={fields.role} onChange={setRole}/>
                <FileUploadField file={fields.file}/>
                <Button onClick={handleClick} disabled={isFormDisable}> Sign up </Button>
            </div>
        </div>
    );
};