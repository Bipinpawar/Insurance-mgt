import RegistrationForm from '../RegistrationForm';
import InsuranceContent from '../InsuranceContent';
import './landingPage.css';
import family from '../../assests/images/family.jpg'
import affortable from '../../assests/images/affortable.png';
import flex from '../../assests/images/flex.png';
import noHiddenCost from '../../assests/images/no-hidden-cost.png';
import simpleEnr from '../../assests/images/simpleEnr.png';
import support from '../../assests/images/support.jpg';


function LandingPage() {
  return (
    <div className="landing-page">
      <div className='insurance-info'>
        <div className='insurance-outer-container'>
          <div className='inner-container'>
            <div className='ins-logo'>
              <img src={family} />
            </div>
            <div className='insurance-details'>
              We're launching a new life insurance product targeting South African millennials.
              The cover amount is better than any other competitor, more affordable, and
              changes as you go through your various life stages. It's completely transparent,
              with no hidden fees and powered by intelligent AI algorithms.
              <div className='ins-btn'>
              <input type="button" className='buy-btn' value="BUY NOW" onClick={() => alert("buy")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='middlesection-content'>
        <div className='middlesection-title'>What makes us a different</div>
        <InsuranceContent logo={support} title={'Financial Support'} description={'Natural death benefit from 183,500 ZAR and a maximum benefit up to 917,500 ZAR.'} />
        <InsuranceContent logo={flex} title={'Flexibility'} description={'Flexible terms from 5 to 30 years, and enrollment for ages 27-42 with coverage up to 65'} />
        <InsuranceContent logo={simpleEnr} title={'Simple enrollment'} description={'No medical tests are required to enroll'} />
        <InsuranceContent logo={noHiddenCost} title={'No hidden costs'} description={'No hidden costs'} />
        <InsuranceContent logo={affortable} title={'Affordable'} description={'Affordable life insurance premiums starting from as little as 60  ZAR per month or 720 ZAR per year'} />
      </div>

      <div className='contact-us'>
        <div className="title"> Tell us about yourself, will get back to you</div>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default LandingPage;
