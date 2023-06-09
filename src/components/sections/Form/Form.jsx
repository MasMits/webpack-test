import React from 'react';
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Buttons";
import {FileUploadField} from "../../ui/FileUploadField";
import {Input} from "../../ui/Input";
import styles from './form.module.scss'
import {RadioButtons} from "../../ui/RadioButtons";
import {useSelector} from "react-redux";
import {
    setFieldValue,
    setFile,
    setRole,
} from "../../../store/slices/form.slice";
import {submitForm1} from "../../../store/api/api";

export const Form = () => {
    const {fields: {name, email, phone, file, role}} = useSelector((state) => state.form);
    const list = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
    const handleClick = () => {
        console.log('Click')
        const fields = {name, email, phone, file, role}
        submitForm1(fields);
    };
    return (
        <div className={styles.form}>
            <Heading> Working with POST request </Heading>
            <Input value={name} onChange={setFieldValue} placeHolder={'name'} />
            <Input value={email} onChange={setFieldValue} placeHolder={'email'} />
            <Input value={phone} onChange={setFieldValue} placeHolder={'phone'} helperText='+38 (XXX) XXX - XX - XX' />
            <RadioButtons list={list} value={role} onChange={setRole} />
            <FileUploadField file={file} setFile={setFile}/>
            <Button onClick={handleClick}> Sign up </Button>
        </div>
    );
};