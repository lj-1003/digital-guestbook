function ComposeForm() {
  return (
    <div>
      <div className="fillout card">
        <h1>Compose a Message</h1>
        <form method="POST">
          <label for="content">Name</label>
            <textarea id="nameInput" name="nameInput" required="required" rows="2" cols="30" maxlength="50"></textarea><br></br>

            <label for="content">Share a message with us!</label>
            <textarea id="messageInput" name="messageInput" required="required" rows="4" cols="30" maxlength="150"></textarea><br></br>

            <button className="form-buttons" type="button" onclick="composeMessage()">Submit</button>
            <button className="form-buttons"type="button" onclick="resetForm()">Reset Form</button>
        </form>
      </div>
    </div>
  );
}

export default ComposeForm;