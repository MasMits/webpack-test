import React from 'react';
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Buttons";
import {FileUploadField} from "../../ui/FileUploadField";
import {Input} from "../../ui/Input";
import styles from './form.module.scss'
import {RadioButtons} from "../../ui/RadioButtons";
import {useSelector} from "react-redux";
import {setRole} from "../../../store/slices/form.slice";
import {submitForm} from "../../../store/api/api";

export const Form = () => {
    const {fields} = useSelector((state) => state.form);
    const list = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
    const handleClick = () => submitForm(fields);

    return (
        <div className={styles.form}>
            <Heading> Working with POST request </Heading>
            <Input value={fields.name}  placeHolder={'name'} />
            <Input value={fields.email} placeHolder={'email'} />
            <Input value={fields.phone} placeHolder={'phone'} helperText='+38 (XXX) XXX - XX - XX' />
            <RadioButtons list={list} value={fields.role} onChange={setRole} />
            <FileUploadField file={fields.file}/>
            <Button onClick={handleClick}> Sign up </Button>
        </div>
    );
};