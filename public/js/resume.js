const submit = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#fullName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone_number = document.querySelector('#phone').value.trim();
    const address = document.querySelector('#address').value.trim();
    const experience = document.querySelector('#experience').value.trim();
    const education = document.querySelector('#education').value.trim();
    const skills = document.querySelector('#skills').value.trim();
    let hobbies = document.querySelector('#hobbies').value.trim();
    const job_id = event.target.getAttribute('job-id');

    if(hobbies == '')
        hobbies= null;

    console.log(name);
    console.log(email);
    console.log(phone_number);
    console.log(address);
    console.log(experience);
    console.log(education);
    console.log(skills);
    console.log(hobbies);

    const response = await fetch(`/api/resumes/`, {
        method: 'POST',
        body: JSON.stringify({ 
            name,
            email,
            address,
            phone_number,
            experience,
            education,
            skills,
            hobbies,
            job_id
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok){
        document.location.replace(document.referrer);
    } else {
        alert(response.statusText);
    }


}
document
.querySelector('#resume')
.addEventListener('submit', submit);