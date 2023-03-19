import './insuranceContent.css';

function InsuranceContent({title, description, logo}) {
  return (
    <div className="insurance-content">
      <div className='insurance-logo'>
      <img src={logo} width= '60px'/> 
      </div>
       <div className='title'> {title} </div>
       <div className='description'> {description}</div>
    </div>
  );
}

export default InsuranceContent;
