import './sections.css';

function Sections({ section, onCheckBoxChange,
  onRadioChange,
  onInputChange }) {

  const getInputType = (question) => {
    switch (question.type) {
      case 'text':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div> 
          <input className='question-input' 
          name={question.name} 
          required={question.required}
           type={question.type} 
           onChange={(e) => onInputChange(e)}
           />
        </>
        break;
      case 'numeric':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input' 
          type="number" id={question.name}
           name={question.name} 
           min={question.validation.min} 
           max={question.validation.max} 
           onChange={(e) => onInputChange(e)}
           />
        </>
        break;
      case 'inline_numeric':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input'
           type="number" id={question.name} 
           name={question.name}
           min={question.validation.min} 
           max={question.validation.max} 
           onChange={(e) => onInputChange(e)}
           />
        </>
        break;
      case 'currency':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input' 
          name={question.name} 
          required={question.required} 
          type={question.type} 
          onChange={(e) => onInputChange(e)}
          />
        </>
        break;
      case 'tel':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input'
           name={question.name} 
           required={question.required} 
           type={question.type} 
           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
           onChange={(e) => onInputChange(e)}
           />
        </>
        break;
      case 'email':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input' 
          name={question.name} 
          required={question.required} 
          type={question.type} 
          onChange={(e) => onInputChange(e)}
          />
        </>
        break;

      case 'select':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <select className='question-input-select'
           name={question.name} 
           id={question.name}
           onChange={(e) => onInputChange(e)}
           >
            <option value={''}>Please select an option</option>
            {question.options.map((option) => {
              return <option value={option.value}>{option.text || option.label}</option>
            })}
          </select>
        </>
        break;

      case 'search_select':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <input className='question-input' 
          list="browsers" 
          name={question.name} 
          id={question.name} 
          onChange={(e) => onInputChange(e)}
          />
          <datalist id="browsers">
            {question.options.map((option) => {
              return <option value={option.value}>{option.text}</option>
            })}
          </datalist>
        </>
        break;

      case 'inline_select':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          <select className='question-input-select'
           name={question.name} 
           id={question.name}
           onChange={(e) => onInputChange(e)}
           >
            <option value={''}>Please select an option</option>
            {question.options.map((option) => {
              return <option value={option.value}>{option.label}</option>
            })}
          </select>
        </>
        break;

      case 'checkbox':
        return <>
          <div className='question-label'> {question.label} {question.required && <span style={{color:'red'}}>*</span>}</div>
          {question.options.map((option, index) => {
            return <>
              <input value={option.value} 
              type={question.type} 
              name={question.name} 
              id={`check-${index}`} 
              onChange={(e) => onCheckBoxChange(e)}
              />
              <label htmlFor={`check-${index}`}> {option.label}</label><br />
            </>
          })}
        </>
        break;

      case 'radio':
        return <>
          <div className='question-label'> {question.label ? question.label : question.name} {question.required && <span style={{color:'red'}}>*</span>}</div>
          {question.options.map((option, index) => {
            return <div className='radio-container'>
              <input value={option.value} 
              type={question.type} 
              name={question.name} 
              id={`radio-${index}`} 
              onChange={(e) => onRadioChange(e)}
              />
              <label htmlFor={`radio-${index}`}> {option.label ? option.label : option.text} </label><br />
            </div>
          })}
        </>
        break;

    }
  }
  return (
    <div className="Sections">
      {section.questions.map((question, index) => {
        return <div className='questions-container' key={`question-${index}-${question.name}`}>
          {getInputType(question)}
        </div>
      })}
    </div>
  );
}

export default Sections;
