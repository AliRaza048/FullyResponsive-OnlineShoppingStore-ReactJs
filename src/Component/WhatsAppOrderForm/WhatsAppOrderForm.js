// WhatsAppOrderForm.js
import React, { useState } from 'react';
import './WhatsAppOrderForm.css'

function WhatsAppOrderForm({ onSubmit, onClose  }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        whatsappNumber: '',
        productQuantity: 1,
        address: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "productQuantity") {
            const re = /^[1-9]\d*$/;  
            if (value === '' || re.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    

    const handleSubmit = () => {
        let hasError = false;
        let newErrors = {};

        if (!formData.name) {
            hasError = true;
            newErrors.name = "Full Name is required.";
        }
        if (!formData.mobileNumber) {
            hasError = true;
            newErrors.mobileNumber = "Mobile number is required.";
        }
        if (!formData.whatsappNumber) {
            hasError = true;
            newErrors.whatsappNumber = "WhatsApp Number is required.";
        }
        if (!formData.address) {
            hasError = true;
            newErrors.address = "Address is required.";
        }

        if (hasError) {
            setErrors(newErrors);
            return; 
        }

        onSubmit(formData);
        onClose();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <span onClick={onClose} style={{ float: "right" }}><i class="ri-close-circle-fill"></i></span>

                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                
                <input type="tel" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
                {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber}</p>}
                
                <input type="tel" name="whatsappNumber" placeholder="WhatsApp Number" value={formData.whatsappNumber} onChange={handleChange} />
                {errors.whatsappNumber && <p style={{ color: 'red' }}>{errors.whatsappNumber}</p>}

                <input type="number" name="productQuantity" placeholder="Quantity" value={formData.productQuantity} onChange={handleChange} />
                
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                
                <button onClick={handleSubmit}>Order on WhatsApp</button>
            </div>
        </div>
    );
}

export default WhatsAppOrderForm;
