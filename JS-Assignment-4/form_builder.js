class FormBuilder {
    constructor(formFields, containerId) {
        this.formFields = formFields;
        this.container = document.getElementById(containerId);
        this.formId = `dynamicForm-${Date.now()}`;
    }

    buildForm() {
        if (!this.container) {
            console.error("Form container not found.");
            return;
        }

        let formHTML = `<form id="${this.formId}">`;

        this.formFields.forEach(field => {
            formHTML += `
                <label for="${field.label.toLowerCase().replace(/\s/g, '-')}">${field.label}:</label>
                <input type="${field.type}" 
                       id="${field.label.toLowerCase().replace(/\s/g, '-')}" 
                       name="${field.label.toLowerCase().replace(/\s/g, '-')}"
                       ${field.required ? 'required' : ''}
                ><br><br>
            `;
        });

        formHTML += `<button type="submit">Submit</button></form>`;
        
        this.container.innerHTML = formHTML;

        document.getElementById(this.formId).addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("Form Data Submitted:", this.getFormData());
        });
    }

    getFormData() {
        const form = document.getElementById(this.formId);
        if (!form) return {};

        const formData = {};
        const elements = form.elements;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.name && element.type !== 'submit') {
                formData[element.name] = element.value;
            }
        }
        return formData;
    }
}

const fields = [
    { type: 'text', label: 'Username', required: true },
    { type: 'email', label: 'Email Address' },
    { type: 'password', label: 'Password', required: true }
];

// Example: Requires an HTML element with id="form-container"
// const myFormBuilder = new FormBuilder(fields, 'form-container');
// myFormBuilder.buildForm();