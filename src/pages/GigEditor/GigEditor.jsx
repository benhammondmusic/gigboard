
import GigEdit from '../../components/GigEdit/GigEdit';


const GigEditor = (gig, props) => {

return (
    <>
      <h2>Edit Gig</h2>

      <GigEdit gig={gig} props={props}/>
    </>
  );
};

export default GigEditor;