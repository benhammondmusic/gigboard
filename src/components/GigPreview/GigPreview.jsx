import './GigPreview.css';

const GigPreview = ({ gig }) => (
  <h4>
    {gig.title}: {gig.description}...
  </h4>
);

export default GigPreview;
