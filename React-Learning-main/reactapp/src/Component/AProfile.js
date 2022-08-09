import Style from "./Style/AProfile.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profile from "./Image/profile.jpg";
import email from "./Image/email.png";
import phone from "./Image/phone.png";
import nid from "./Image/nid.png";
import address from "./Image/address.gif";
import Nav from "./Nav";
export default function AProfile(){

    return(
    <>
 <Nav />
     <div className={Style.body}>
          <div className={Style.details}>
        <img className={Style.img}  src={profile}alt="" /><br/>
        <span  className={Style.name}>Imon Faysal</span>
      
       <hr/>
       <span className={Style.info}> <img className={Style.icon} src={email} />  emonf666@gmail.com</span>
       <hr/>
       <span  className={Style.info}><img className={Style.icon} src={phone} />  01959634446</span>
       <hr />
       <span  className={Style.info}><img className={Style.icon} src={nid} /> 987654567</span>
       <hr />
       <span  className={Style.info}><img className={Style.icon} src={address} />Hijulia, Shibput, Narsingdi</span>
      </div>
   
      <div className={Style.main}>
       <h2 className={Style.title}>EDIT PROFILE</h2>
   
       <Form>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>FULL NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>PHONE</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNid">
        <Form.Label>NID</Form.Label>
        <Form.Control type="nid" placeholder="Enter NID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
     </Form>
      </div>
     </div>
    </>
        
    );
}