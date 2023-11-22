import Form from 'react-bootstrap/Form';
export default function Contactus(){
    const [userInfo, setUserInfo] = useState({ username: ' ', email: ' ' });

    return (
        <>
          <h1 className='contact-section'>Contact us:</h1>
          <br />
          <Form className='pr-section'>
            <div className={"container p-4"}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  value={userInfo.username}
                  onChange={(e) => setUserInfo({...userInfo, username: e.target.value })}
                  type="text"
                  placeholder="e.g John"
                />
              </Form.Group>
      <button type="submit" class="btn btn-primary">Submit</button>
  </div>
      </Form>
    </>
);

}
