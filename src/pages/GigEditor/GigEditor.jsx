
import GigEdit from '../../components/GigEdit/GigEdit';


const GigEditor = (gig) => {

return (
    <>
      <h2>Edit Gig</h2>

      <GigEdit gig={gig}/>
    </>
  );
};

export default GigEditor;