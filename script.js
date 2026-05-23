function verify(){

  const name = document.getElementById("name").value.trim();
  const cert = document.getElementById("cert").value.trim();

  const result = document.getElementById("result");

  if(
    (name === "Darshan Singh" && cert === "UN-LBC-DS12-X7K9") ||

    (name === "Vansh Singh" && cert === "UN-LBC-VS11-P4M2")
  ){

    result.innerHTML = `
      <h2 style="color:lime;">✅ VERIFIED PARTICIPATION</h2>
      <p>Leather Ball Cricket Tournament</p>
      <p>Organized by UN ENTERPRISES</p>
      <p>Under Guidance & Direction of Utsav Singh</p>
      <p>Organizer: Chandan Singh</p>
    `;

  } else {

    result.innerHTML = `
      <h2 style="color:red;">❌ INVALID CERTIFICATE</h2>
    `;
  }
}
