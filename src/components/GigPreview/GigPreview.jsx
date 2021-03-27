import './GigPreview.css';

const GigPreview = ({ gig }) => (
  <>
    <h4>
      {gig.title}
      {gig.urgency === 'high' && '!!!'}
    </h4>
    <div className="pay">${gig.pay}</div>
  </>
);

export default GigPreview;
