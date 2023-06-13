import React from 'react';
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Buttons";
import {FileUploadField} from "../../ui/FileUploadField";
import {Input} from "../../ui/Input";
import {RadioButtons} from "../../ui/RadioButtons";
import {useSelector} from "react-redux";
import {setRole} from "../../../store/slices/form.slice";
import {submitForm} from "../../../store/api/api";
import styles from './form.module.scss'

export const Form = () => {
    const {fields} = useSelector((state) => state.form);
    const list = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
    const handleClick = () => submitForm(fields);
    let isFormDisable = false;
    for (const [key, value] of Object.entries(fields)){
        if (value.error !== '') {
            isFormDisable = true;
            break;
        }
    }
    return (
        <div className={styles.form}>
            <Heading> Working with POST request </Heading>
            <Input value={fields.name}  placeHolder={'name'} />
            <Input value={fields.email} placeHolder={'email'} />
            <Input value={fields.phone} placeHolder={'phone'} helperText='+38 (XXX) XXX - XX - XX' />
            <RadioButtons list={list} value={fields.role} onChange={setRole} />
            <FileUploadField file={fields.file}/>
            <Button onClick={handleClick} disabled={isFormDisable}> Sign up </Button>
        </div>
    );
};