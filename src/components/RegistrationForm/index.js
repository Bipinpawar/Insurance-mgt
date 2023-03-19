import axios from 'axios';
import { useEffect, useState } from 'react';
import './registrationForm.css';
import Sections from '../Sections';

function RegistrationForm() {
  const [sectionData, setSectionData] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setformData] = useState(
    {
      drugs: [],
      age: '',
      gender: '',
      qualification: '',
      job_title: '',
      salary: '',
      name: '',
      email: '',
      tel: '',
      id_number: '',
      medication: '',
      specailist: '',
      hospital: '',
      nicotine: '',
      prev_insurance: ''
    }
  );

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setformData({ ...formData, [name]: value })
  }

  const onCheckBoxChange = (e) => {
    const { defaultValue, name, checked } = e.target;
    if (checked) {
      setformData({ ...formData, [name]: [...formData[name], defaultValue] })
    } else {
      setformData({ ...formData, [name]: formData[name].filter((e) => e !== defaultValue) })
    }
  }

  const onRadioChange = (e) => {
    const { defaultValue, name } = e.target;
    setformData({ ...formData, [name]: defaultValue })
  }

  useEffect(() => {
    axios.get('https://6356e07f2712d01e14fe89d4.mockapi.io/api/v1/questions')
      .then(res =>
        setSectionData(res.data.sections)
      ).catch(error => console.log(error))
  }, []);

  const validateInputFields = () => {
    let isValid = false;
    isValid = formData.age && formData.drugs.length > 0 && formData.email && formData.gender
      && formData.hospital && formData.id_number && formData.job_title && formData.medication && formData.name
      && formData.nicotine && formData.prev_insurance && formData.qualification
    return isValid;
  }

  const handleSubmit = () => {
    console.log('formData', formData)
    setIsSubmitted(true);
  }

  return (
    <div className="registrationForm">
      {isSubmitted ?<>
        <h1> Thank you...we will get back to you...!!!</h1>
        </>
         :
        <>
          {
            sectionData && sectionData.map((section, index) => {
              return <div className='section-container' key={`section-${index}`}>
                <Sections
                  onCheckBoxChange={onCheckBoxChange}
                  onRadioChange={onRadioChange}
                  onInputChange={onInputChange}
                  section={section} />
              </div>
            })
          }
          <div className='btn'>
            <input type="button"
              className='submit-btn'
              value="SUBMIT"
              disabled={!validateInputFields()}
              onClick={handleSubmit} />
          </div>
        </>}
    </div>
  );
}

export default RegistrationForm;
