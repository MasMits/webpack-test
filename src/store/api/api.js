export async function getToken() {
    console.log('getToken')
    try {
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
        const data = await response.json();
        console.log(data);
        return data.token
    } catch (error) {
        // process network errors
    }
}

export async function submitForm1(fields) {
    try {
        const formData = new FormData();
        formData.append('position_id', 1);
        formData.append('name', fields.name);
        formData.append('email', fields.email);
        formData.append('phone', fields.phone);
        formData.append('photo', fields.file);
        const token = await getToken()
        console.log(token)
        console.log(formData)
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token,
            },
        });
        // console.log(data);
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Unexpected response:', response);
        }
    } catch (error) {
        console.log('process network errors:' + error);
        // process network errors
    }
}