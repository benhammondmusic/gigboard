import './GigPreview.css';

const GigPreview = ({ gig }) => (
  <h4>
    {gig.title}
    {gig.urgency === 'high' && '!!!'}
  </h4>
);

export default GigPreview;
