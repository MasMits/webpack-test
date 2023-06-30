export async function getToken() {
    try {
        const response = await fetch(`${process.env.API_KEY}/token`);
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.log('process network errors:', error);
    }
}

export async function submitForm(fields) {
    try {
        const img = await fetch(fields.file.value);
        const responseIMG = await img.blob();
        const file = new File([responseIMG], 'filename', { type: responseIMG.type });
        URL.revokeObjectURL(fields.file);
        const formData = new FormData();
        formData.append('photo', file);
        formData.append('position_id', fields.role.activeOption);
        formData.append('name', fields.name.value);
        formData.append('email', fields.email.value);
        formData.append('phone', fields.phone.value);
        const token = await getToken();
        const response = await fetch(`${process.env.API_KEY}/users`, {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token,
            },
        });
        if (response.status === 201) {
            const data = await response.json();
            console.log(data);
        } else {
            console.log('Unexpected response:', response);
        }
    } catch (error) {
        console.log('process network errors:', error);
    }
}